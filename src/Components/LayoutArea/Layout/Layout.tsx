import { Copyrights } from "../Copyrights/Copyrights";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { Routing } from "../Routing/Routing";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>
            <main>
                <Routing/>
            </main>
            <footer>
                <Copyrights />
            </footer>
        </div>
    );
}
