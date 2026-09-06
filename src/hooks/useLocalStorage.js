import { useEffect, useRef, useState } from 'react';

export function readLS(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (err) {
    console.warn(`[localStorage] no se pudo leer "${key}", se usa el valor por defecto.`, err);
    return fallback;
  }
}

function readWithStatus(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return { value: fallback, failed: false };
    return { value: JSON.parse(raw), failed: false };
  } catch (err) {
    console.warn(
      `[localStorage] no se pudo leer "${key}" (dato corrupto o acceso bloqueado). ` +
        'No se va a sobrescribir hasta que hagas un cambio real, para no perder datos guardados.',
      err
    );
    return { value: fallback, failed: true };
  }
}

export function useLocalStorage(key, initialValue) {
  // Se calcula una sola vez por instancia del hook (no en cada render) y
  // guarda tanto el valor cargado como si la lectura falló.
  const loaded = useRef(null);
  if (loaded.current === null) {
    loaded.current = readWithStatus(key, initialValue);
  }

  const [value, setValue] = useState(loaded.current.value);

  useEffect(() => {
    // Si la lectura inicial falló (JSON corrupto, acceso bloqueado, un error
    // transitorio del navegador) y el valor todavía es exactamente el que
    // cargamos al montar, no escribir: así no reemplazamos datos reales que
    // puedan seguir ahí por un vacío de respaldo. En cuanto el usuario haga
    // un cambio real (agregar un favorito, etc.) esta condición deja de
    // cumplirse y se persiste con normalidad.
    const esElValorRecienCargado = value === loaded.current.value;
    if (loaded.current.failed && esElValorRecienCargado) {
      return;
    }

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn(`[localStorage] no se pudo guardar "${key}".`, err);
    }
  }, [key, value]);

  // Si el mismo dato cambia en otra pestaña/ventana, sincronizar acá para
  // que dos pestañas abiertas no terminen pisándose los datos.
  useEffect(() => {
    function handleStorage(event) {
      if (event.key !== key) return;
      setValue(readLS(key, initialValue));
    }
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [value, setValue];
}
