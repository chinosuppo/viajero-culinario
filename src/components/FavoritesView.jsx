import Flag from './Flag';

export default function FavoritesView({ favorites, onRemove }) {
  if (favorites.length === 0) {
    return (
      <div className="empty-state">
        <p>
          Todavía no guardaste ninguna receta como favorita. Cuando explores un país, tocá el
          corazón 🤍 en la receta que te gustó para guardarla acá.
        </p>
      </div>
    );
  }

  return (
    <div className="list-view">
      <h2>❤️ Tus recetas favoritas</h2>
      <div className="simple-list">
        {favorites
          .slice()
          .reverse()
          .map((f) => (
            <div key={f.recipeId} className="simple-item">
              <Flag emoji={f.bandera} size={48} className="flag" />
              <div className="simple-item-info">
                <strong>{f.nombre}</strong>
                <span>
                  {f.pais} · {f.tipo}
                </span>
              </div>
              <button className="btn-remove" onClick={() => onRemove(f.recipeId)}>
                Quitar
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
