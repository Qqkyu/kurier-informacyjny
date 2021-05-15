/* React */
import React from "react";

/* Miscellaneous */
import Tooltip from "@material-ui/core/Tooltip";
import SourcesContext from "../SourcesContext";

function Article({ source, title, position }) {
    return (
        <SourcesContext.Consumer>
            {(value) => (
                <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <img
                            src={value[source]["logo"]}
                            alt={`${value[source]["name"]}-logo`}
                            className="w-28 h-28"
                        />
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-4xl text-center font-serif leading-5 text-gray-800">
                                    {value[source]["name"]}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <Tooltip title={title} placement={position} arrow>
                            <p className="truncate text-sm leading-5 py-4 text-gray-600">
                                {title}
                            </p>
                        </Tooltip>
                        <a
                            href={value[source]["link"]}
                            target="_blank"
                            rel="noreferrer"
                            className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100"
                        >
                            Artykuł
                        </a>
                    </div>
                </div>
            )}
        </SourcesContext.Consumer>
    );
}

export default Article;
