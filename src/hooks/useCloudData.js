import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

function rowToFavorito(row) {
  return {
    recipeId: row.recipe_id,
    countryId: row.country_id,
    pais: row.pais,
    bandera: row.bandera,
    nombre: row.nombre,
    tipo: row.tipo,
    accesibilidad: row.accesibilidad,
    fecha: row.fecha,
  };
}

function rowToHistorial(row) {
  return {
    id: row.id,
    recipeId: row.recipe_id,
    countryId: row.country_id,
    pais: row.pais,
    bandera: row.bandera,
    continente: row.continente,
    nombre: row.nombre,
    tipo: row.tipo,
    accesibilidad: row.accesibilidad,
    fecha: row.fecha,
  };
}

function favoritoToRow(userId, country, recipe, fecha) {
  return {
    user_id: userId,
    recipe_id: recipe.id,
    country_id: country.id,
    pais: country.pais,
    bandera: country.bandera,
    nombre: recipe.nombre,
    tipo: recipe.tipo,
    accesibilidad: recipe.accesibilidad,
    fecha,
  };
}

function historialToRow(userId, country, recipe, fecha) {
  return {
    ...favoritoToRow(userId, country, recipe, fecha),
    id: crypto.randomUUID(),
    continente: country.continente,
  };
}

// Maneja favoritos e historial en Supabase para un usuario logueado.
// Cuando no hay usuario, todo queda en listas vacías y sin efecto: la
// pantalla que llama a este hook debe usar localStorage en ese caso.
export function useCloudData(usuario) {
  const [favoritosCloud, setFavoritosCloud] = useState([]);
  const [historialCloud, setHistorialCloud] = useState([]);
  const [cargando, setCargando] = useState(false);

  const recargar = useCallback(async () => {
    if (!supabase || !usuario) {
      setFavoritosCloud([]);
      setHistorialCloud([]);
      return;
    }
    setCargando(true);
    const [{ data: favs, error: errFavs }, { data: hist, error: errHist }] = await Promise.all([
      supabase
        .from('favoritos')
        .select('*')
        .eq('user_id', usuario.id)
        .order('fecha', { ascending: true }),
      supabase
        .from('historial')
        .select('*')
        .eq('user_id', usuario.id)
        .order('fecha', { ascending: true }),
    ]);
    if (errFavs) console.error('[supabase] error al leer favoritos', errFavs);
    if (errHist) console.error('[supabase] error al leer historial', errHist);
    setFavoritosCloud((favs ?? []).map(rowToFavorito));
    setHistorialCloud((hist ?? []).map(rowToHistorial));
    setCargando(false);
  }, [usuario]);

  useEffect(() => {
    recargar();
  }, [recargar]);

  async function toggleFavoritoCloud(country, recipe) {
    if (!supabase || !usuario) return;
    const yaEsFavorito = favoritosCloud.some((f) => f.recipeId === recipe.id);

    if (yaEsFavorito) {
      setFavoritosCloud((prev) => prev.filter((f) => f.recipeId !== recipe.id));
      const { error } = await supabase
        .from('favoritos')
        .delete()
        .eq('user_id', usuario.id)
        .eq('recipe_id', recipe.id);
      if (error) {
        console.error('[supabase] error al quitar favorito', error);
        recargar();
      }
      return;
    }

    const fecha = new Date().toISOString();
    const fila = favoritoToRow(usuario.id, country, recipe, fecha);
    setFavoritosCloud((prev) => [...prev, rowToFavorito(fila)]);
    const { error } = await supabase.from('favoritos').insert(fila);
    if (error) {
      console.error('[supabase] error al guardar favorito', error);
      recargar();
    }
  }

  async function agregarHistorialCloud(country, recipe) {
    if (!supabase || !usuario) return;
    const fecha = new Date().toISOString();
    const fila = historialToRow(usuario.id, country, recipe, fecha);
    setHistorialCloud((prev) => [...prev, rowToHistorial(fila)]);
    const { error } = await supabase.from('historial').insert(fila);
    if (error) {
      console.error('[supabase] error al guardar historial', error);
      recargar();
    }
  }

  async function eliminarHistorialCloud(id) {
    if (!supabase || !usuario) return;
    setHistorialCloud((prev) => prev.filter((h) => h.id !== id));
    const { error } = await supabase
      .from('historial')
      .delete()
      .eq('user_id', usuario.id)
      .eq('id', id);
    if (error) {
      console.error('[supabase] error al quitar del historial', error);
      recargar();
    }
  }

  // Sube a la cuenta, una única vez, los favoritos/historial que ya
  // existían en localStorage antes de loguearse (modo invitado), para no
  // perder nada al crear la cuenta. Solo actúa si la cuenta todavía no
  // tiene datos propios, para no duplicar en logins futuros.
  async function migrarDatosLocalesSiHaceFalta(favoritosLocales, historialLocales) {
    if (!supabase || !usuario) return;
    if (favoritosCloud.length > 0 || historialCloud.length > 0) return;
    if (favoritosLocales.length === 0 && historialLocales.length === 0) return;

    const filasFavoritos = favoritosLocales.map((f) => ({
      user_id: usuario.id,
      recipe_id: f.recipeId,
      country_id: f.countryId,
      pais: f.pais,
      bandera: f.bandera,
      nombre: f.nombre,
      tipo: f.tipo,
      accesibilidad: f.accesibilidad,
      fecha: f.fecha,
    }));
    const filasHistorial = historialLocales.map((h) => ({
      id: h.id ?? crypto.randomUUID(),
      user_id: usuario.id,
      recipe_id: h.recipeId,
      country_id: h.countryId,
      pais: h.pais,
      bandera: h.bandera,
      continente: h.continente,
      nombre: h.nombre,
      tipo: h.tipo,
      accesibilidad: h.accesibilidad,
      fecha: h.fecha,
    }));

    if (filasFavoritos.length > 0) {
      const { error } = await supabase.from('favoritos').upsert(filasFavoritos, {
        onConflict: 'user_id,recipe_id',
      });
      if (error) console.error('[supabase] error al migrar favoritos locales', error);
    }
    if (filasHistorial.length > 0) {
      const { error } = await supabase.from('historial').insert(filasHistorial);
      if (error) console.error('[supabase] error al migrar historial local', error);
    }
    recargar();
  }

  return {
    favoritosCloud,
    historialCloud,
    cargando,
    toggleFavoritoCloud,
    agregarHistorialCloud,
    eliminarHistorialCloud,
    migrarDatosLocalesSiHaceFalta,
  };
}
