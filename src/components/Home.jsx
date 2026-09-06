export default function Home({ onElegirPais, restantes, total }) {
  return (
    <div className="home">
      <div className="home-hero">
        <p className="home-kicker">Tu próxima semana de cocina empieza acá</p>
        <h1>🌍 Viajero Culinario</h1>
        <p className="home-copy">
          Sorteamos un país al azar. Vos elegís cuál de sus 5 recetas vas a cocinar esta semana.
        </p>
        <button className="btn-primary btn-hero" onClick={onElegirPais}>
          🎲 Elegir País
        </button>
        <p className="home-counter">
          Te quedan <strong>{restantes}</strong> de <strong>{total}</strong> países por explorar
        </p>
      </div>
    </div>
  );
}
