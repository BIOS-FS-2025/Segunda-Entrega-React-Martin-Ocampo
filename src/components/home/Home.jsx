import { useState } from "react";
import "./Home.css";
import Card from "../card/Card";
import Filters from "../filters/Filters";
import GetData from "../../hooks/GetData";

const Home = () => {
  const { countries = [] } = GetData();
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("Filtrar por región");

  const q = query.toLowerCase();
  const filtered = countries.filter((c) => {
    const name = c.name.toLowerCase();
    return (
      name.includes(q) &&
      (region === "Filtrar por región" || c.region === region)
    );
  });

  return (
    <div className="home">
      <Filters
        query={query}
        setQuery={setQuery}
        region={region}
        setRegion={setRegion}
        countries={countries}
      />
      <div className="cards-container">
        <Card countriesOverride={filtered} />
      </div>
    </div>
  );
};

export default Home;
