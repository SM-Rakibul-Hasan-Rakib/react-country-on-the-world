import React, { use } from "react";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <h1>Nadir world on the go...{countries.length}</h1>
      {countries.map()}
    </div>
  );
};

export default Countries;
