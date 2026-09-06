import { countries } from '../src/data/countries.js';

const VALID_TIPO = new Set(['Plato Principal', 'Postre']);
const VALID_DIFICULTAD = new Set(['Fácil', 'Medio', 'Difícil']);
const VALID_ACCESIBILIDAD = new Set(['verde', 'amarillo', 'rojo']);
const VALID_CONTINENTE = new Set(['Europa', 'Asia', 'América', 'África', 'Oceanía']);

let errores = 0;
let advertencias = 0;
const countryIds = new Set();
const recipeIds = new Set();
const porContinente = {};

for (const country of countries) {
  const ctx = `[${country.pais ?? '???'}]`;

  if (!country.id) {
    console.error(`${ctx} falta id`);
    errores++;
  } else if (countryIds.has(country.id)) {
    console.error(`${ctx} id de país duplicado: ${country.id}`);
    errores++;
  } else {
    countryIds.add(country.id);
  }

  if (!country.bandera) {
    console.error(`${ctx} falta bandera`);
    errores++;
  }

  if (!VALID_CONTINENTE.has(country.continente)) {
    console.error(`${ctx} continente inválido: ${country.continente}`);
    errores++;
  } else {
    porContinente[country.continente] = (porContinente[country.continente] || 0) + 1;
  }

  if (!country.region) {
    console.error(`${ctx} falta region`);
    errores++;
  }

  if (!Array.isArray(country.recetas) || country.recetas.length !== 5) {
    console.error(`${ctx} debe tener exactamente 5 recetas, tiene ${country.recetas?.length}`);
    errores++;
  } else {
    const postres = country.recetas.filter((r) => r.tipo === 'Postre').length;
    const principales = country.recetas.filter((r) => r.tipo === 'Plato Principal').length;
    if (postres !== 1 || principales !== 4) {
      console.error(`${ctx} debe tener 4 platos principales + 1 postre (tiene ${principales}+${postres})`);
      errores++;
    }
  }

  for (const receta of country.recetas ?? []) {
    const rctx = `${ctx} receta "${receta.nombre ?? receta.id}"`;

    if (!receta.id) {
      console.error(`${rctx} falta id`);
      errores++;
    } else if (recipeIds.has(receta.id)) {
      console.error(`${rctx} id de receta duplicado en todo el dataset: ${receta.id}`);
      errores++;
    } else {
      recipeIds.add(receta.id);
    }

    if (!VALID_TIPO.has(receta.tipo)) {
      console.error(`${rctx} tipo inválido: ${receta.tipo}`);
      errores++;
    }
    if (!VALID_DIFICULTAD.has(receta.dificultad)) {
      console.error(`${rctx} dificultad inválida: ${receta.dificultad}`);
      errores++;
    }
    if (!VALID_ACCESIBILIDAD.has(receta.accesibilidad)) {
      console.error(`${rctx} accesibilidad inválida: ${receta.accesibilidad}`);
      errores++;
    }
    if (!receta.tiempo) {
      console.error(`${rctx} falta tiempo`);
      errores++;
    }
    if (!Array.isArray(receta.ingredientes) || receta.ingredientes.length < 3) {
      console.error(`${rctx} ingredientes debe tener al menos 3 items, tiene ${receta.ingredientes?.length}`);
      errores++;
    } else if (receta.ingredientes.length < 5 || receta.ingredientes.length > 8) {
      advertencias++;
    }
    if (!receta.sustituciones || receta.sustituciones.trim().length < 10) {
      console.error(`${rctx} sustituciones debe existir y tener contenido real`);
      errores++;
    }
    if (!Array.isArray(receta.pasos) || receta.pasos.length < 3) {
      console.error(`${rctx} pasos debe tener al menos 3 items, tiene ${receta.pasos?.length}`);
      errores++;
    } else if (receta.pasos.length < 4 || receta.pasos.length > 6) {
      advertencias++;
    }
    if (!receta.dato) {
      console.error(`${rctx} falta dato curioso`);
      errores++;
    }
  }
}

console.log('--- Resumen ---');
console.log(`Países totales: ${countries.length}`);
console.log(`Recetas totales: ${recipeIds.size}`);
console.log('Por continente:', porContinente);
console.log(`Errores encontrados: ${errores}`);
console.log(`Advertencias de estilo (ingredientes/pasos fuera del rango ideal 5-8/4-6): ${advertencias}`);

if (errores > 0) process.exit(1);
