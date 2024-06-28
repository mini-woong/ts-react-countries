import React from "react";
import { Country } from "../types/country";

interface CountCardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountCardProps> = ({ country, handleSelectCountry }) => {
  return(
    <div onClick={()=>handleSelectCountry(country)}>
      <img src={country.flags.svg} style={{width: "48px", height: "40px" }} />
      <h3>{country.name.common}</h3>
    </div>
  );
};

export default CountryCard;