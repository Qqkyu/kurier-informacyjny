/* React */
import React from "react";

/* Sources logos */
import KrytykaPolitycznaLogo from "../images/sources/krytyka-polityczna.png";
import PolsatNewsLogo from "../images/sources/polsat-news.png";
import DoRzeczyLogo from "../images/sources/do-rzeczy.png";
import OkoPressLogo from "../images/sources/oko-press.png";
import InteriaLogo from "../images/sources/interia.png";
import WprostLogo from "../images/sources/wprost.png";
import Tvn24Logo from "../images/sources/tvn24.png";

const sourcesLogosCache = {
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

function Source({ source }) {
    return (
        <a
            href={sourcesLogosCache[source]["link"]}
            target="_blank"
            rel="noreferrer"
            className="lg:w-1/3 sm:w-1/2 p-4"
        >
            <div className="flex relative">
                <img
                    alt={`${sourcesLogosCache[source]["name"]}-logo`}
                    className="absolute inset-0 h-full w-full object-contain object-center"
                    src={sourcesLogosCache[source]["logo"]}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-xl title-font font-medium text-gray-900 mb-1">
                        {sourcesLogosCache[source]["name"]}
                    </h2>
                    <h1 className="title-font text-sm font-medium text-gray-400 mb-3">
                        {sourcesLogosCache[source]["type"]}
                    </h1>
                    <p className="leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas erat libero, blandit vitae tempor at, venenatis
                        eu eros. Proin at ipsum quam. Donec lobortis sodales
                        erat, non ultrices dui interdum ac.
                    </p>
                </div>
            </div>
        </a>
    );
}

export default Source;
