import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar(): JSX.Element {
    return (
        <div className="Navbar">
            <ul>

                <li><NavLink to="/home">Home</NavLink></li>

                <li><NavLink end to="/countries">Countries</NavLink></li>
            </ul>

        </div>
    );
}
