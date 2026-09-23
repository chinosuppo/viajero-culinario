import { useMemo, useState } from 'react';
import Flag from './Flag';

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

export default function CountryPicker({ countries, onElegir, onCancelar }) {
  const [busqueda, setBusqueda] = useState('');

  const countriesOrdenados = useMemo(
    () => [...countries].sort((a, b) => a.pais.localeCompare(b.pais, 'es')),
    [countries]
  );

  const filtrados = useMemo(() => {
    const q = normalizar(busqueda.trim());
    if (!q) return countriesOrdenados;
    return countriesOrdenados.filter(
      (c) => normalizar(c.pais).includes(q) || normalizar(c.continente).includes(q)
    );
  }, [countriesOrdenados, busqueda]);

  return (
    <div className="country-picker">
      <div className="country-picker-header">
        <h2>Elegí un país</h2>
        <button className="btn-link" onClick={onCancelar}>
          ← Volver
        </button>
      </div>

      <input
        type="text"
        className="country-picker-search"
        placeholder="Buscar país o continente..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        autoFocus
      />

      <div className="country-picker-list">
        {filtrados.length === 0 && (
          <p className="empty-hint">Ningún país coincide con "{busqueda}".</p>
        )}
        {filtrados.map((country) => (
          <button
            key={country.id}
            className="country-picker-item"
            onClick={() => onElegir(country.id)}
          >
            <Flag emoji={country.bandera} size={32} className="country-picker-flag" />
            <span className="country-picker-name">{country.pais}</span>
            <span className="country-picker-region">{country.continente}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
