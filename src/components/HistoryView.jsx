import Flag from './Flag';

const ACC_EMOJI = { verde: '🟢', amarillo: '🟡', rojo: '🔴' };

function formatearFecha(iso) {
  return new Date(iso).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function HistoryView({ history, onRemove }) {
  if (history.length === 0) {
    return (
      <div className="empty-state">
        <p>
          Todavía no marcaste ninguna receta como cocinada. Cuando elijas qué vas a preparar esta
          semana, tocá "✅ Elegir para esta semana" y va a quedar acá.
        </p>
      </div>
    );
  }

  return (
    <div className="list-view">
      <h2>📖 Historial de cocina</h2>
      <div className="simple-list">
        {history
          .slice()
          .reverse()
          .map((h, i) => (
            <div key={h.id ?? `${h.recipeId}-${h.fecha}-${i}`} className="simple-item">
              <Flag emoji={h.bandera} size={48} className="flag" />
              <div className="simple-item-info">
                <strong>{h.nombre}</strong>
                <span>
                  {h.pais} · {formatearFecha(h.fecha)}
                </span>
              </div>
              <span className="acc-emoji">{ACC_EMOJI[h.accesibilidad]}</span>
              <button
                className="btn-remove"
                onClick={() => onRemove(h)}
                title="Sacar del historial"
              >
                Quitar
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
