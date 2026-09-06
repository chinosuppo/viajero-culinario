import { matchesFilter } from './filters';

const CUATRO_SEMANAS_MS = 28 * 24 * 60 * 60 * 1000;

export function getRecentlyDrawnIds(drawHistory, now = Date.now()) {
  return new Set(
    drawHistory
      .filter((d) => now - new Date(d.fecha).getTime() < CUATRO_SEMANAS_MS)
      .map((d) => d.countryId)
  );
}

export function pickRandomCountry(countries, drawHistory, filter) {
  const recentIds = getRecentlyDrawnIds(drawHistory);
  let pool = countries.filter((c) => !recentIds.has(c.id));

  const withFilterMatch = pool.filter((c) =>
    c.recetas.some((r) => matchesFilter(r.accesibilidad, filter))
  );
  if (withFilterMatch.length > 0) pool = withFilterMatch;

  if (pool.length === 0) pool = countries;

  return pool[Math.floor(Math.random() * pool.length)];
}
