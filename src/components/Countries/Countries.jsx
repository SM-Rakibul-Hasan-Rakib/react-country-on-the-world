import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    const exists = visitedCountries.find(
      (visited) => visited.cca3 === country.cca3,
    );

    if (!exists) {
      setVisitedCountries([...visitedCountries, country]);
    }
  };

  const handleVisitedFlags = (flag) => {
    if (!visitedFlags.includes(flag)) {
      setVisitedFlags([...visitedFlags, flag]);
    }
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h1>Nadir World On The Go... {countries.length}</h1>

      <h3>Total Countries Visited: {visitedCountries.length}</h3>

      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <h3>Total Flags Visited: {visitedFlags.length}</h3>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag} alt="flag" width="80" height="50" />
        ))}
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
