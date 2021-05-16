/* React */
import React from "react";

/* Miscellaneous */
import SourcesContext from "../SourcesContext";

function Source({ source }) {
    return (
        <SourcesContext.Consumer>
            {(value) => (
                <a
                    href={value[source]["link"]}
                    target="_blank"
                    rel="noreferrer"
                    className="lg:w-1/3 sm:w-1/2 p-4"
                >
                    <div className="flex relative">
                        <img
                            alt={`${value[source]["name"]}-logo`}
                            className="absolute inset-0 h-full w-full object-contain object-center"
                            src={value[source]["logo"]}
                        />
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-xl title-font font-medium text-gray-900 mb-1">
                                {value[source]["name"]}
                            </h2>
                            <h1 className="title-font text-sm font-medium text-gray-400 mb-3">
                                {value[source]["type"]}
                            </h1>
                            <p className="leading-relaxed">
                                {value[source]["description"]}
                            </p>
                        </div>
                    </div>
                </a>
            )}
        </SourcesContext.Consumer>
    );
}

export default Source;
