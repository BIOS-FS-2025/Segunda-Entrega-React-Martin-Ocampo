import './Filters.css';
import React from 'react';

const Filters = ({ query, setQuery, region, setRegion, countries = [] }) => {
  const regions = ['Filtrar por región', ...new Set(countries.map(c => c.region).filter(Boolean))];

  return (
    <div className="filters">
      <div className="filters-container">
        <div className="filters-container-search">
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" d="m19.6 21-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.7 0-4.6-1.9T3 9.5t1.9-4.6T9.5 3t4.6 1.9T16 9.5q0 1.1-.35 2.1t-1 1.7l6.3 6.3zM9.5 14q1.9 0 3.2-1.3T14 9.5t-1.3-3.2T9.5 5T6.3 6.3T5 9.5t1.3 3.2T9.5 14"/>
          </svg>
          <input
            type="text"
            placeholder="Buscar un país..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <div className="filters-container-region">
          <select value={region} onChange={e => setRegion(e.target.value)}>
            {regions.map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
