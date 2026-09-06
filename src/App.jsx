import { useEffect, useState } from 'react';
import { countries } from './data/countries';
import { useLocalStorage, readLS } from './hooks/useLocalStorage';
import { useAuth } from './hooks/useAuth';
import { useCloudData } from './hooks/useCloudData';
import { pickRandomCountry } from './utils/draw';
import Header from './components/Header';
import AuthBar from './components/AuthBar';
import FilterPanel from './components/FilterPanel';
import Home from './components/Home';
import CountryView from './components/CountryView';
import FavoritesView from './components/FavoritesView';
import HistoryView from './components/HistoryView';
import StatsPanel from './components/StatsPanel';
import './App.css';

export default function App() {
  const [filter, setFilter] = useLocalStorage('vc_filter', 'desafiante');
  const [favoritosLocal, setFavoritosLocal] = useLocalStorage('vc_favoritos', []);
  const [historialLocal, setHistorialLocal] = useLocalStorage('vc_historial', []);
  const [drawHistory, setDrawHistory] = useLocalStorage('vc_sorteos', []);
  const [currentCountryId, setCurrentCountryId] = useLocalStorage('vc_pais_actual', null);

  const [view, setView] = useState(() => (readLS('vc_pais_actual', null) ? 'pais' : 'inicio'));
  const [lastCooked, setLastCooked] = useState(null);

  const { usuario, loading: authLoading, disponible: authDisponible, enviarMagicLink, cerrarSesion } =
    useAuth();
  const { favoritosCloud, historialCloud, toggleFavoritoCloud, agregarHistorialCloud, migrarDatosLocalesSiHaceFalta } =
    useCloudData(usuario);

  const estaLogueado = !!usuario;
  const favorites = estaLogueado ? favoritosCloud : favoritosLocal;
  const history = estaLogueado ? historialCloud : historialLocal;

  // Al loguearse por primera vez, si la cuenta todavía no tiene datos
  // propios, subimos lo que ya se había guardado en modo invitado para
  // no perder nada.
  useEffect(() => {
    if (usuario) {
      migrarDatosLocalesSiHaceFalta(favoritosLocal, historialLocal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usuario?.id]);

  const currentCountry = countries.find((c) => c.id === currentCountryId) || null;

  function handleElegirPais() {
    const country = pickRandomCountry(countries, drawHistory, filter);
    setCurrentCountryId(country.id);
    setLastCooked(null);
    setView('pais');
  }

  function handleToggleFavorite(country, recipe) {
    if (estaLogueado) {
      toggleFavoritoCloud(country, recipe);
      return;
    }
    setFavoritosLocal((prev) => {
      const existe = prev.some((f) => f.recipeId === recipe.id);
      if (existe) return prev.filter((f) => f.recipeId !== recipe.id);
      return [
        ...prev,
        {
          recipeId: recipe.id,
          countryId: country.id,
          pais: country.pais,
          bandera: country.bandera,
          nombre: recipe.nombre,
          tipo: recipe.tipo,
          accesibilidad: recipe.accesibilidad,
          fecha: new Date().toISOString(),
        },
      ];
    });
  }

  function handleCocinarEstaSemana(country, recipe) {
    const fecha = new Date().toISOString();

    if (estaLogueado) {
      agregarHistorialCloud(country, recipe);
    } else {
      setHistorialLocal((prev) => [
        ...prev,
        {
          recipeId: recipe.id,
          countryId: country.id,
          pais: country.pais,
          bandera: country.bandera,
          continente: country.continente,
          nombre: recipe.nombre,
          tipo: recipe.tipo,
          accesibilidad: recipe.accesibilidad,
          fecha,
        },
      ]);
    }

    // El registro de sorteos (anti-repetición de 4 semanas) queda local
    // en todos los casos, no depende de la cuenta.
    setDrawHistory((prev) => [...prev, { countryId: country.id, fecha }]);
    setLastCooked({ countryId: country.id, nombre: recipe.nombre });
  }

  function handleNavigate(destino) {
    setView(destino);
  }

  const paisesVisitados = new Set(history.map((h) => h.countryId)).size;
  const restantes = Math.max(countries.length - paisesVisitados, 0);

  return (
    <div className="app-shell">
      <Header view={view} onNavigate={handleNavigate} />

      <AuthBar
        disponible={authDisponible}
        usuario={usuario}
        loading={authLoading}
        onEnviarLink={enviarMagicLink}
        onCerrarSesion={cerrarSesion}
      />

      <main className="app-main">
        {(view === 'inicio' || view === 'pais') && (
          <FilterPanel filter={filter} onChange={setFilter} />
        )}

        {view === 'inicio' && (
          <Home onElegirPais={handleElegirPais} restantes={restantes} total={countries.length} />
        )}

        {view === 'pais' && currentCountry && (
          <CountryView
            country={currentCountry}
            filter={filter}
            favorites={favorites}
            history={history}
            lastCooked={lastCooked}
            onToggleFavorite={handleToggleFavorite}
            onCocinar={handleCocinarEstaSemana}
            onSortearOtro={handleElegirPais}
          />
        )}

        {view === 'favoritos' && (
          <FavoritesView
            favorites={favorites}
            countries={countries}
            history={history}
            onToggleFavorite={handleToggleFavorite}
            onCocinar={handleCocinarEstaSemana}
          />
        )}

        {view === 'historial' && <HistoryView history={history} />}

        {view === 'estadisticas' && (
          <StatsPanel history={history} totalCountries={countries.length} />
        )}
      </main>

      <footer className="app-footer">
        Viajero Culinario · {countries.length} países · Adaptado para cocinar en Neuquén, Argentina
      </footer>
    </div>
  );
}
