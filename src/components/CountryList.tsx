import { useEffect, useState } from "react";
import { Country } from "../types/country";
import { getCountries } from "../api/countries";
import CountryCard from "./CountryCard";


const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchCountries();
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: Country) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter((selectedCountry: Country) => selectedCountry.name.common !== country.name.common)
      );
    }
  }
  return (
    <>
      <div>
        <h1>선택된 나라 목록</h1>
        <div>
          {selectedCountries.map((country: Country) => {
            return <CountryCard key={country.name.common} country={country} handleSelectCountry={handleSelectCountry} />
          })}
        </div>
      </div>
      <div>
        <h1>나라 목록</h1>
        <div>
          {countries.map((country: Country) => {
            return <CountryCard key={country.name.common} country={country} handleSelectCountry={handleSelectCountry} />
          })}
        </div>
      </div>
    </>
  )
}

export default CountryList;