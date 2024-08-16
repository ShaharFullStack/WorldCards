import { NavLink } from "react-router-dom";
import "./Home.css";

export function Home(): JSX.Element {
    return (
        <div className="Home">
            <span id="text" className="text">
                <p>See</p>
                <p>The</p>
                <p>World</p>
            </span>
            <button className="navLinkBtn" id="allButton">
                <NavLink to="/countries">Click To See The World</NavLink>
            </button>
            <div id="countryCards"></div>



        </div>
    );
}
