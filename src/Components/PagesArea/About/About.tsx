import { NavLink } from "react-router-dom";
import "./About.css";
import { useEffect, useState } from "react";

function FlightsList() {
    const [departure, setDeparture] = useState<string>("");
    const [arrival, setArrival] = useState<string>("");
    const [flights, setFlights] = useState([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (departure && arrival) {
            fetch(`https://api.aviationstack.com/v1/flights?access_key=f3375848585640e5175941f88d85dc5a&dep_iata=${departure}&arr_iata=${arrival}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network is jammed');
                    }
                    return response.json();
                })
                .then(data => {
                    setFlights(data.data);
                })
                .catch(err => {
                    setError(err.message);
                });
        }
    }, [departure, arrival]);

    if (error) {
        return <p>Errrrrrrrrror: {error}</p>;
    }

    return (
        <div>
            <div className="FlightsList">
                <h2>Flight Departures and Arrivals</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Enter Departure IATA Code"
                        value={departure}
                        onChange={(e) => setDeparture(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter Arrival IATA Code"
                        value={arrival}
                        onChange={(e) => setArrival(e.target.value)}
                    />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Departing</th>
                            <th>Departure Time</th>
                            <th>Destination</th>
                            <th>Arrival Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flights.map((flight, index) => (
                            <tr key={index}>
                                <td>{flight.departure.airport}</td>
                                <td>{new Date(flight.departure.scheduled).toLocaleString()}</td>
                                <td>{flight.arrival.airport}</td>
                                <td>{new Date(flight.arrival.scheduled).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export function About(): JSX.Element {
    return (
        <div className="About">
            <h1>this is where I do experiments</h1>
            <button className="navLinkBtn" id="homeButton">
                <NavLink to="/home">Home</NavLink>
            </button>
            <FlightsList />
        </div>
    );
}
