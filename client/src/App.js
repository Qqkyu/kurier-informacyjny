/* React */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Pages */
import IndexPage from "./pages/Index";
import SourcesPage from "./pages/Sources";

/* Miscellaneous */
import SourcesContext from "./SourcesContext";

/* Sources logos */
import KrytykaPolitycznaLogo from "./images/sources/krytyka-polityczna.png";
import PolsatNewsLogo from "./images/sources/polsat-news.png";
import DoRzeczyLogo from "./images/sources/do-rzeczy.png";
import OkoPressLogo from "./images/sources/oko-press.png";
import InteriaLogo from "./images/sources/interia.png";
import WprostLogo from "./images/sources/wprost.png";
import Tvn24Logo from "./images/sources/tvn24.png";

const sources = {
    DoRzeczy: {
        logo: DoRzeczyLogo,
        name: "Do Rzeczy",
        type: "Prawica",
        link: "https://dorzeczy.pl/",
    },
    Interia: {
        logo: InteriaLogo,
        name: "Interia",
        type: "Centrum",
        link: "https://www.interia.pl/",
    },
    KrytykaPolityczna: {
        logo: KrytykaPolitycznaLogo,
        name: "Krytyka Polityczna",
        type: "Lewica",
        link: "https://krytykapolityczna.pl/",
    },
    OkoPress: {
        logo: OkoPressLogo,
        name: "Oko Press",
        type: "Lewica",
        link: "https://oko.press/",
    },
    PolsatNews: {
        logo: PolsatNewsLogo,
        name: "Polsat News",
        type: "Centrum",
        link: "https://www.polsatnews.pl/",
    },
    Tvn24: {
        logo: Tvn24Logo,
        name: "Tvn24",
        type: "Centrum",
        link: "https://tvn24.pl/",
    },
    Wprost: {
        logo: WprostLogo,
        name: "Wprost",
        type: "Prawica",
        link: "https://www.wprost.pl/",
    },
};

function App() {
    return (
        <SourcesContext.Provider value={sources}>
            <Router>
                <Switch>
                    <Route path="/sources/">
                        <SourcesPage />
                    </Route>
                    <Route path="/assignments">{/*Assignments*/}</Route>
                    <Route path="/">
                        <IndexPage />
                    </Route>
                </Switch>
            </Router>
        </SourcesContext.Provider>
    );
}

export default App;
