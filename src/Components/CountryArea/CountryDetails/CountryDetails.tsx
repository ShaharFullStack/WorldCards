import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CountryModel } from "../../../Models/CountryModel";
import { countryService } from "../../../Services/CountryService";
import "./CountryDetails.css";

export function CountryDetails(): JSX.Element {
    const { name } = useParams<{ name: string }>(); 
    const [country, setCountry] = useState<CountryModel | null>(null);

    useEffect(() => {
        if (name) {
            countryService.getOneCountry(name)
                .then(fetchedCountry => setCountry(fetchedCountry))
                .catch(err => console.error("Error fetching country:", err.message));
        }
    }, [name]);

    if (!country) return <div>Loading...</div>; // You can customize this message or remove it entirely

    return (
        <div className="CountryDetails">
            <h1>{country.name.common}</h1> 
            <h2>Capital: {country.capital?.[0] || "N/A"}</h2>
            <h2>Population: {country.population.toLocaleString()}</h2>
            <h2>Continent: {country.continents?.join(", ") || "N/A"}</h2>
            <h2>UN Member: {country.unMember ? "Yes" : "No"}</h2>
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
            <h2>{country.name.common}</h2>
            
            <button className="navLinkBtn" id="homeButton">
                <NavLink to="/countries">Back</NavLink>
            </button>
        </div>
    );
}
