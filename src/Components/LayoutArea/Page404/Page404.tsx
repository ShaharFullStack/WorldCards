import { NavLink } from "react-router-dom";
import "./Page404.css";

export function Page404(): JSX.Element {
    return (
        <div className="Page404">
            <h1>Oops! You seem lost.</h1>
            <p>We couldn't find the page you're looking for.</p>
            <p>Maybe it's hiding under a rock, or it took a vacation to another domain!</p>
            <img
                src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
                alt="Confused Travolta"
            />
            <p>
                Don't worry, you can head back to the <NavLink to="/">Home Page</NavLink>.
            </p>
        </div>
    );
}
