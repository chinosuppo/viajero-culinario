import { FILTER_OPTIONS } from '../utils/filters';

export default function FilterPanel({ filter, onChange }) {
  return (
    <div className="filter-panel">
      <span className="filter-label">
        Nivel de accesibilidad de ingredientes: filtra qué recetas ves en cada país (y también qué
        países es más probable que te toquen). Por defecto se muestra todo.
      </span>
      <div className="filter-options">
        {FILTER_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            className={`filter-chip ${filter === opt.value ? 'active' : ''}`}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
            <span className="filter-hint">{opt.hint}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
