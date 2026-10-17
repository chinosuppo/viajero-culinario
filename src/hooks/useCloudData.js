import { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebaseClient';

function coleccion(uid, nombre) {
  return collection(db, 'users', uid, nombre);
}

function datosReceta(country, recipe, fecha) {
  return {
    recipeId: recipe.id,
    countryId: country.id,
    pais: country.pais,
    bandera: country.bandera,
    nombre: recipe.nombre,
    tipo: recipe.tipo,
    accesibilidad: recipe.accesibilidad,
    fecha,
  };
}

// Favoritos e historial en Firestore para un usuario logueado, con
// actualización en vivo (si cambia desde otro dispositivo, se refleja acá).
// Sin usuario queda todo vacío: la pantalla usa localStorage en ese caso.
export function useCloudData(usuario) {
  const uid = usuario?.id ?? null;
  const [favoritosCloud, setFavoritosCloud] = useState([]);
  const [historialCloud, setHistorialCloud] = useState([]);
  const [favsListos, setFavsListos] = useState(false);
  const [histListos, setHistListos] = useState(false);

  useEffect(() => {
    setFavoritosCloud([]);
    setHistorialCloud([]);
    setFavsListos(false);
    setHistListos(false);
    if (!db || !uid) return;

    const unsubFavs = onSnapshot(
      query(coleccion(uid, 'favoritos'), orderBy('fecha', 'asc')),
      (snap) => {
        setFavoritosCloud(snap.docs.map((d) => d.data()));
        setFavsListos(true);
      },
      (err) => console.error('[firebase] error al leer favoritos', err)
    );
    const unsubHist = onSnapshot(
      query(coleccion(uid, 'historial'), orderBy('fecha', 'asc')),
      (snap) => {
        setHistorialCloud(snap.docs.map((d) => ({ ...d.data(), id: d.id })));
        setHistListos(true);
      },
      (err) => console.error('[firebase] error al leer historial', err)
    );
    return () => {
      unsubFavs();
      unsubHist();
    };
  }, [uid]);

  async function toggleFavoritoCloud(country, recipe) {
    if (!db || !uid) return;
    const ref = doc(db, 'users', uid, 'favoritos', recipe.id);
    try {
      if (favoritosCloud.some((f) => f.recipeId === recipe.id)) {
        await deleteDoc(ref);
      } else {
        await setDoc(ref, datosReceta(country, recipe, new Date().toISOString()));
      }
    } catch (err) {
      console.error('[firebase] error al actualizar favorito', err);
    }
  }

  async function agregarHistorialCloud(country, recipe) {
    if (!db || !uid) return;
    const fecha = new Date().toISOString();
    try {
      await setDoc(doc(db, 'users', uid, 'historial', crypto.randomUUID()), {
        ...datosReceta(country, recipe, fecha),
        continente: country.continente,
      });
    } catch (err) {
      console.error('[firebase] error al guardar historial', err);
    }
  }

  async function eliminarHistorialCloud(id) {
    if (!db || !uid) return;
    try {
      await deleteDoc(doc(db, 'users', uid, 'historial', id));
    } catch (err) {
      console.error('[firebase] error al quitar del historial', err);
    }
  }

  // Sube a la cuenta, una única vez por usuario y dispositivo, lo que ya
  // estaba en localStorage antes de loguearse. Los ids son determinísticos
  // para que repetirlo no duplique nada.
  async function migrarDatosLocalesSiHaceFalta(favoritosLocales, historialLocales) {
    if (!db || !uid || !favsListos || !histListos) return;
    const marca = `vc_migrado_${uid}`;
    if (localStorage.getItem(marca)) return;
    if (favoritosCloud.length > 0 || historialCloud.length > 0) {
      localStorage.setItem(marca, '1');
      return;
    }

    try {
      await Promise.all([
        ...favoritosLocales.map((f) =>
          setDoc(doc(db, 'users', uid, 'favoritos', f.recipeId), {
            recipeId: f.recipeId,
            countryId: f.countryId,
            pais: f.pais,
            bandera: f.bandera,
            nombre: f.nombre,
            tipo: f.tipo,
            accesibilidad: f.accesibilidad,
            fecha: f.fecha,
          })
        ),
        ...historialLocales.map((h) =>
          setDoc(doc(db, 'users', uid, 'historial', h.id ?? `${h.recipeId}_${h.fecha}`), {
            recipeId: h.recipeId,
            countryId: h.countryId,
            pais: h.pais,
            bandera: h.bandera,
            continente: h.continente,
            nombre: h.nombre,
            tipo: h.tipo,
            accesibilidad: h.accesibilidad,
            fecha: h.fecha,
          })
        ),
      ]);
      localStorage.setItem(marca, '1');
    } catch (err) {
      console.error('[firebase] error al migrar datos locales', err);
    }
  }

  return {
    favoritosCloud,
    historialCloud,
    cloudListo: favsListos && histListos,
    toggleFavoritoCloud,
    agregarHistorialCloud,
    eliminarHistorialCloud,
    migrarDatosLocalesSiHaceFalta,
  };
}
