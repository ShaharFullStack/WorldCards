import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../PagesArea/Home/Home";
import { CountryDetails } from "../../CountryArea/CountryDetails/CountryDetails";
import { About } from "../../PagesArea/About/About";
import { Countries } from "../../CountryArea/Countries/Countries";
import { Page404 } from "../Page404/Page404";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/country-details/:name" element={<CountryDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
