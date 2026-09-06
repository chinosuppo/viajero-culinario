const TABS = [
  { id: 'inicio', label: '🏠 Inicio' },
  { id: 'favoritos', label: '❤️ Favoritos' },
  { id: 'historial', label: '📖 Historial' },
  { id: 'estadisticas', label: '📊 Estadísticas' },
];

export default function Header({ view, onNavigate }) {
  const activeTab = view === 'pais' ? 'inicio' : view;

  return (
    <header className="app-header">
      <button className="brand" onClick={() => onNavigate('inicio')}>
        <span className="brand-emoji">🧳🍲</span>
        <span>Viajero Culinario</span>
      </button>
      <nav className="nav-tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`nav-tab ${activeTab === t.id ? 'active' : ''}`}
            onClick={() => onNavigate(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
