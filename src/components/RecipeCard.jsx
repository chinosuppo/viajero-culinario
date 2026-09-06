import { useState } from 'react';
import { ACCESIBILIDAD_INFO } from '../utils/filters';

export default function RecipeCard({ recipe, isFavorite, isCooked, onToggleFavorite, onCocinar }) {
  const [open, setOpen] = useState(false);
  const info = ACCESIBILIDAD_INFO[recipe.accesibilidad];
  const esPostre = recipe.tipo === 'Postre';

  return (
    <div className={`recipe-card ${open ? 'is-open' : ''}`}>
      <button className="recipe-card-header" onClick={() => setOpen((o) => !o)}>
        <div className="recipe-card-title">
          <span className={`recipe-tipo-badge ${esPostre ? 'postre' : 'principal'}`}>
            {esPostre ? '🍰 Postre' : '🍽️ Plato Principal'}
          </span>
          <h3>{recipe.nombre}</h3>
        </div>
        <div className="recipe-card-meta">
          <span className="acc-emoji" title={info.label}>
            {info.emoji}
          </span>
          <span className="pill">{recipe.dificultad}</span>
          <span className="pill">⏱ {recipe.tiempo}</span>
          {isCooked && <span className="pill cooked">✅ Cocinada</span>}
          {isFavorite && <span className="pill fav">❤️</span>}
          <span className="chevron">{open ? '▲' : '▼'}</span>
        </div>
      </button>

      {open && (
        <div className="recipe-card-body">
          <div className="recipe-section">
            <h4>Ingredientes principales</h4>
            <ul>
              {recipe.ingredientes.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>

          {recipe.sustituciones && (
            <div className="recipe-section sustitucion">
              <h4>En Neuquén</h4>
              <p>{recipe.sustituciones.replace(/^En Neuquén:\s*/i, '')}</p>
            </div>
          )}

          <div className="recipe-section">
            <h4>Pasos</h4>
            <ol>
              {recipe.pasos.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ol>
          </div>

          <div className="recipe-section dato">
            <h4>💡 Dato curioso</h4>
            <p>{recipe.dato}</p>
          </div>

          <div className="recipe-actions">
            <button
              className={`btn-favorito ${isFavorite ? 'active' : ''}`}
              onClick={onToggleFavorite}
            >
              {isFavorite ? '❤️ En favoritos' : '🤍 Guardar en favoritos'}
            </button>
            <button className="btn-cocinar" onClick={onCocinar}>
              ✅ Elegir para esta semana
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
