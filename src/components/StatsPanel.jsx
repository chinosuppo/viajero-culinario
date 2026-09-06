function pct(n, total) {
  if (!total) return 0;
  return Math.round((n / total) * 100);
}

export default function StatsPanel({ history, totalCountries }) {
  const continentes = new Set(history.map((h) => h.continente));
  const paises = new Set(history.map((h) => h.countryId));
  const verde = history.filter((h) => h.accesibilidad === 'verde').length;
  const amarillo = history.filter((h) => h.accesibilidad === 'amarillo').length;
  const rojo = history.filter((h) => h.accesibilidad === 'rojo').length;

  return (
    <div className="list-view">
      <h2>📊 Tus estadísticas</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">{continentes.size}</span>
          <span>continentes explorados</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{paises.size}</span>
          <span>países visitados</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{Math.max(totalCountries - paises.size, 0)}</span>
          <span>países por explorar</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{history.length}</span>
          <span>recetas cocinadas</span>
        </div>
      </div>

      <h3>Distribución por accesibilidad de lo que ya cocinaste</h3>
      {history.length === 0 ? (
        <p className="empty-hint">Todavía no cocinaste ninguna receta.</p>
      ) : (
        <div className="accesibilidad-bars">
          <div className="bar-row">
            <span>🟢 Fácil</span>
            <div className="bar">
              <div className="bar-fill verde" style={{ width: `${pct(verde, history.length)}%` }} />
            </div>
            <span>{verde}</span>
          </div>
          <div className="bar-row">
            <span>🟡 Medio</span>
            <div className="bar">
              <div
                className="bar-fill amarillo"
                style={{ width: `${pct(amarillo, history.length)}%` }}
              />
            </div>
            <span>{amarillo}</span>
          </div>
          <div className="bar-row">
            <span>🔴 Desafiante</span>
            <div className="bar">
              <div className="bar-fill rojo" style={{ width: `${pct(rojo, history.length)}%` }} />
            </div>
            <span>{rojo}</span>
          </div>
        </div>
      )}
    </div>
  );
}
