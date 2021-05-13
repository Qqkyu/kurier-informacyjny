import React from "react";

/* Sources logos */
import KrytykaPolitycznaLogo from "../images/sources/krytyka-polityczna.png";
import PolsatNewsLogo from "../images/sources/polsat-news.png";
import DoRzeczyLogo from "../images/sources/do-rzeczy.jpg";
import OkoPressLogo from "../images/sources/oko-press.png";
import InteriaLogo from "../images/sources/interia.png";
import WprostLogo from "../images/sources/wprost.jpeg";
import Tvn24Logo from "../images/sources/tvn24.png";

/* Miscellaneous */
import Tooltip from "@material-ui/core/Tooltip";

const sourcesLogosCache = {
    DoRzeczy: {
        logo: DoRzeczyLogo,
        name: "Do Rzeczy",
    },
    Interia: {
        logo: InteriaLogo,
        name: "Interia",
    },
    KrytykaPolityczna: {
        logo: KrytykaPolitycznaLogo,
        name: "Krytyka Polityczna",
    },
    OkoPress: {
        logo: OkoPressLogo,
        name: "Oko Press",
    },
    PolsatNews: {
        logo: PolsatNewsLogo,
        name: "Polsat News",
    },
    Tvn24: {
        logo: Tvn24Logo,
        name: "Tvn24",
    },
    Wprost: {
        logo: WprostLogo,
        name: "Wprost",
    },
};

function Article({ source, title, link, position }) {
    return (
        <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
            <div className="flex items-center border-b border-gray-200 pb-6">
                <img
                    src={sourcesLogosCache[source]["logo"]}
                    alt={`${sourcesLogosCache[source]["name"]}-logo`}
                    className="w-28 h-28"
                />
                <div className="flex items-start justify-between w-full">
                    <div className="pl-3 w-full">
                        <p className="text-4xl text-center font-serif leading-5 text-gray-800">
                            {sourcesLogosCache[source]["name"]}
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-2">
                <Tooltip
                    title={title}
                    placement={
                        position === "center"
                            ? "bottom"
                            : position === "left"
                            ? "left"
                            : "right"
                    }
                    arrow
                >
                    <p className="truncate text-sm leading-5 py-4 text-gray-600">
                        {title}
                    </p>
                </Tooltip>
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100"
                >
                    Go to article
                </a>
            </div>
        </div>
    );
}

export default Article;
