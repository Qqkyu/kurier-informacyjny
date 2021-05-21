/* React */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Pages */
import AssignmentsPage from "./pages/Assignments";
import RegisterPage from "./pages/Register";
import SourcesPage from "./pages/Sources";
import LoginPage from "./pages/Login";
import IndexPage from "./pages/Index";

/* Miscellaneous */
import SourcesContext from "./SourcesContext";
import axios from "axios";

/* Sources logos */
import KrytykaPolitycznaLogo from "./images/sources/krytyka-polityczna.png";
import PolsatNewsLogo from "./images/sources/polsat-news.png";
import DoRzeczyLogo from "./images/sources/do-rzeczy.png";
import OkoPressLogo from "./images/sources/oko-press.png";
import InteriaLogo from "./images/sources/interia.png";
import WprostLogo from "./images/sources/wprost.png";
import Tvn24Logo from "./images/sources/tvn24.png";

/*
const sources = {
    DoRzeczy: {
        logo: DoRzeczyLogo,
        name: "Do Rzeczy",
        description:
            "Polski konserwatywno-liberalny tygodnik opinii wydawany od 2013 w Warszawie. Od początku istnienia redaktorem naczelnym tygodnika jest Paweł Lisicki.",
        type: "Prawica",
        link: "https://dorzeczy.pl/",
    },
    Interia: {
        logo: InteriaLogo,
        name: "Interia",
        description:
            "Czołowy polski portal internetowy, założony w 1999. Należący do Grupy portal internetowy INTERIA udostępnia indywidualnym użytkownikom internetu bogaty wybór najwyższej jakości serwisów informacyjnych, multimedialnych, społecznościowych i komunikacyjnych.",
        type: "Centrum",
        link: "https://www.interia.pl/",
    },
    KrytykaPolityczna: {
        logo: KrytykaPolitycznaLogo,
        name: "Krytyka Polityczna",
        description:
            "Lewicowe czasopismo społeczno-polityczne ukazujące się od 2002, wydawane przez Stowarzyszenie im. Stanisława Brzozowskiego. Jego redaktorem naczelnym jest Julian Kutyła. Działalność rozwija w trzech głównych sferach: nauki, kultury i polityki.",
        type: "Lewica",
        link: "https://krytykapolityczna.pl/",
    },
    OkoPress: {
        logo: OkoPressLogo,
        name: "Oko Press",
        description:
            "Polski internetowy serwis informacyjny o tematyce polityczno-społecznej, specjalizujący się w dziennikarstwie śledczym i sprawdzaniu faktów. Redaktorem naczelnym portalu jest Piotr Pacewicz.",
        type: "Lewica",
        link: "https://oko.press/",
    },
    PolsatNews: {
        logo: PolsatNewsLogo,
        name: "Polsat News",
        description:
            "Kanał informacyjno-publicystyczny Grupy Polsat, nadający od 7 czerwca 2008. Szefem kanału od marca 2018 jest Dorota Gawryluk",
        type: "Centrum",
        link: "https://www.polsatnews.pl/",
    },
    Tvn24: {
        logo: Tvn24Logo,
        name: "Tvn24",
        description:
            "Pierwsza polska telewizja informacyjna, nadająca program przez całą dobę. Rozpoczęła nadawanie 9 sierpnia 2001.",
        type: "Centrum",
        link: "https://tvn24.pl/",
    },
    Wprost: {
        logo: WprostLogo,
        name: "Wprost",
        description:
            "Polski tygodnik społeczno-polityczny wydawany od 1982, do 2000 w Poznaniu, następnie w Warszawie; od 2021 redaktorem naczelnym jest Robert Feluś. Tygodnik „Wprost” udostępnia swoje łamy osobom o różnych poglądach, wywodzącym się z różnych środowisk.",
        type: "Prawica",
        link: "https://www.wprost.pl/",
    },
};
*/
function App() {
    const [sources, setSources] = useState();
    axios
        .get("http://localhost:5400/sources", { crossdomain: true })
        .then((response) => {
            console.log(response.data);
            setSources(response.data);
        });

    return (
        <SourcesContext.Provider value={sources}>
            <Router>
                <Switch>
                    <Route path="/register/">
                        <RegisterPage />
                    </Route>
                    <Route path="/login/">
                        <LoginPage />
                    </Route>
                    <Route path="/sources/">
                        <SourcesPage />
                    </Route>
                    <Route path="/assignments">
                        <AssignmentsPage />
                    </Route>
                    <Route path="/">
                        <IndexPage />
                    </Route>
                </Switch>
            </Router>
        </SourcesContext.Provider>
    );
}

export default App;
