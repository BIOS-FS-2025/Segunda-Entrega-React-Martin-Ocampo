import "./Filters.css";
const Filters = ({ query, setQuery, region, setRegion, countries = [] }) => {
  const allRegions = countries.map((c) => c.region);
  const uniqueRegions = [...new Set(allRegions)];
  const regions = ["Filtrar por región", ...uniqueRegions];

  return (
    <div className="filters">
      <div className="filters-container">
        <div className="filters-container-search">
          <input
            type="text"
            placeholder="Buscar un país..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="filters-container-region">
          <select value={region} onChange={(e) => setRegion(e.target.value)}>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
