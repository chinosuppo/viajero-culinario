import Flag from './Flag';
import RecipeCard from './RecipeCard';

export default function FavoritesView({ favorites, countries, history, onToggleFavorite, onCocinar }) {
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

  const resueltos = favorites
    .slice()
    .reverse()
    .map((f) => {
      const country = countries.find((c) => c.id === f.countryId);
      const recipe = country?.recetas.find((r) => r.id === f.recipeId);
      return { favorito: f, country, recipe };
    });

  return (
    <div className="list-view">
      <h2>❤️ Tus recetas favoritas</h2>
      <div className="recipe-list">
        {resueltos.map(({ favorito, country, recipe }) => {
          if (!country || !recipe) {
            return (
              <div key={favorito.recipeId} className="simple-item">
                <span className="flag">{favorito.bandera}</span>
                <div className="simple-item-info">
                  <strong>{favorito.nombre}</strong>
                  <span>Esta receta ya no está disponible en los datos actuales.</span>
                </div>
              </div>
            );
          }
          return (
            <RecipeCard
              key={favorito.recipeId}
              recipe={recipe}
              countryLabel={
                <>
                  <Flag emoji={country.bandera} size={24} />
                  {country.pais}
                </>
              }
              isFavorite
              isCooked={history.some((h) => h.recipeId === recipe.id)}
              onToggleFavorite={() => onToggleFavorite(country, recipe)}
              onCocinar={() => onCocinar(country, recipe)}
            />
          );
        })}
      </div>
    </div>
  );
}
