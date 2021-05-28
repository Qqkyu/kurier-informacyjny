/* React */
import React, { useContext } from "react";

/* Miscellaneous */
import SourcesContext from "../SourcesContext";

/**
 *
 * @param {string} source
 */
function Source({ source }) {
    const { sources } = useContext(SourcesContext);

    return (
        <a
            href={sources[source]["link"]}
            target="_blank"
            rel="noreferrer"
            className="lg:w-1/3 sm:w-1/2 p-4"
        >
            <div className="flex relative">
                <img
                    alt={`${sources[source]["name"]}-logo`}
                    className="absolute inset-0 h-full w-full object-contain object-center"
                    src={sources[source]["logo"]}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-xl title-font font-medium text-gray-900 mb-1">
                        {sources[source]["name"]}
                    </h2>
                    <h1 className="title-font text-sm font-medium text-gray-400 mb-3">
                        {sources[source]["type"]}
                    </h1>
                    <p className="leading-relaxed">
                        {sources[source]["description"]}
                    </p>
                </div>
            </div>
        </a>
    );
}

export default Source;
