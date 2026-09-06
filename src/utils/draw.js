import { matchesFilter } from './filters.js';

function contarRecetasCocinadasPorPais(history) {
  const conteo = {};
  for (const entrada of history) {
    conteo[entrada.countryId] = (conteo[entrada.countryId] || 0) + 1;
  }
  return conteo;
}

// Un país solo se excluye del sorteo cuando ya se cocinaron sus 5 recetas
// (está "completo"). Cocinar una sola receta no lo saca de circulación:
// tiene que seguir pudiendo tocarte para probar las otras.
export function pickRandomCountry(countries, history, filter) {
  const cocinadasPorPais = contarRecetasCocinadasPorPais(history);
  let pool = countries.filter(
    (c) => (cocinadasPorPais[c.id] || 0) < c.recetas.length
  );

  const withFilterMatch = pool.filter((c) =>
    c.recetas.some((r) => matchesFilter(r.accesibilidad, filter))
  );
  if (withFilterMatch.length > 0) pool = withFilterMatch;

  // Si ya se completaron todos los países (o ninguno matchea el filtro),
  // volvemos a considerar la lista completa en vez de trabarnos.
  if (pool.length === 0) pool = countries;

  return pool[Math.floor(Math.random() * pool.length)];
}
