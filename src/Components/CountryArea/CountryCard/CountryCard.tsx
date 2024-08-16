import { useNavigate } from "react-router-dom";
import { CountryModel } from "../../../Models/CountryModel";
import "./CountryCard.css";

type CountryCardProps = {
    country: CountryModel;
    onClick: (country: CountryModel) => void;
};

export function CountryCard(props: CountryCardProps): JSX.Element {

    const navigate = useNavigate();

    function showDetails(): void {
        navigate(`/country-details/${encodeURIComponent(props.country.name.common)}`);
      }      

    // Extract languages as a string
    const languages = props.country.languages
        ? Object.values(props.country.languages).join(", ")
        : "No languages available";

    return (
        <div
            className="CountryCard"
            style={{
                backgroundImage: `url(${props.country.flags.png})`, // Set background image dynamically
                backgroundSize: "cover",
                backgroundPosition: "center",
                
            }}
            onClick={showDetails}
            role="button"
            aria-label={`View details of ${props.country.name.common}`} // Use `name.common` for accessibility
        >
            <div className="CountryDetails">
                <span>Country: {props.country.name.common}</span> {/* Use `name.common` */}
                <span>Capital City: {props.country.capital?.[0] || "N/A"}</span> {/* Handle capital as an array */}
                <span>Population: {props.country.population.toLocaleString()}</span>
            </div>
        </div>
    );
}
