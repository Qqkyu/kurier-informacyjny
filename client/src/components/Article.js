/* React */
import React from "react";

/* Miscellaneous */
import SourcesContext from "../SourcesContext";

/* Material-UI */
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
    noMaxWidth: {
        maxWidth: "none",
    },
}));

function Article({ source, title, position, link, sourceLink }) {
    const classes = useStyles();

    return (
        <SourcesContext.Consumer>
            {(value) => {
                return value ? (
                    <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                        <a href={sourceLink} target="_blank" rel="noreferrer">
                            <div className="flex items-center border-b border-gray-200 pb-6 flex justify-center">
                                <img
                                    src={value[source]["logo"]}
                                    alt={`${value[source]["name"]}-logo`}
                                    className="w-28 h-28"
                                />
                            </div>
                        </a>
                        <div className="px-2 flex flex-wrap justify-center">
                            <Tooltip
                                title={title}
                                classes={{ tooltip: classes.noMaxWidth }}
                                placement="top"
                                arrow
                            >
                                <p className="truncate text-sm leading-5 py-4 text-gray-600">
                                    {title}
                                </p>
                            </Tooltip>
                            <div className="w-full flex justify-center">
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-sm"
                                >
                                    Artykuł
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                );
            }}
        </SourcesContext.Consumer>
    );
}

export default Article;
