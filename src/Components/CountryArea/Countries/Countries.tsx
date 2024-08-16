import { useEffect, useState } from "react";
import { CountryModel } from "../../../Models/CountryModel";
import { countryService } from "../../../Services/CountryService";
import { CountryCard } from "../CountryCard/CountryCard";
import "./Countries.css";
import { NavLink } from "react-router-dom";

interface CountriesProps {
    setSelectedCountries: React.Dispatch<React.SetStateAction<CountryModel[]>>;
}

export function Countries(): JSX.Element {
    const [countries, setCountries] = useState<CountryModel[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<CountryModel[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<CountryModel[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>(""); // Define the search query state

    useEffect(() => {
        countryService.getAllCountries()
            .then(countries => {
                setCountries(countries);
                setFilteredCountries(countries); // Initialize with all countries
            })
            .catch(err => console.error(err.message));
    }, []);

    // Update filtered countries based on the search query
    useEffect(() => {
        const query = searchQuery.toLowerCase();
        const filtered = countries.filter(c =>
            c.name.common.toLowerCase().includes(query)
        );
        setFilteredCountries(filtered);
    }, [searchQuery, countries]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleCountryClick = (country: CountryModel) => {
        if (!selectedCountries.includes(country)) {
            setSelectedCountries([...selectedCountries, country]);
        }
    };

    return (
        <div className="Countries">
            <form id="countryForm">
                <input
                    type="text"
                    id="countryInput"
                    placeholder="Enter country name"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button className="aboutBtn">
                    <NavLink to="/about">Experimental Mode</NavLink>
                </button>
            </form>
            <div className="countryGrid">
                {filteredCountries.map(c => (
                    <CountryCard
                        key={c.name.common}
                        country={c}
                        onClick={() => handleCountryClick(c)}
                    />
                ))}
            </div>
        </div>
    );
}
