import RecipeCard from './RecipeCard';
import Flag from './Flag';

export default function CountryView({
  country,
  favorites,
  history,
  lastCooked,
  onToggleFavorite,
  onCocinar,
  onSortearOtro,
}) {
  return (
    <div className="country-view">
      <div className="country-header">
        <Flag emoji={country.bandera} size={80} className="country-flag" />
        <div>
          <h2>{country.pais}</h2>
          <p className="country-region">
            {country.continente} · {country.region}
          </p>
        </div>
      </div>

      {lastCooked && lastCooked.countryId === country.id && (
        <div className="toast-confirm">
          ✅ ¡Anotado! Vas a cocinar <strong>{lastCooked.nombre}</strong> esta semana.
        </div>
      )}

      <div className="recipe-list">
        {country.recetas.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={favorites.some((f) => f.recipeId === recipe.id)}
            isCooked={history.some((h) => h.recipeId === recipe.id)}
            onToggleFavorite={() => onToggleFavorite(country, recipe)}
            onCocinar={() => onCocinar(country, recipe)}
          />
        ))}
      </div>

      <div className="country-actions">
        <button className="btn-secondary" onClick={onSortearOtro}>
          🎲 Sortear otro país
        </button>
      </div>
    </div>
  );
}
