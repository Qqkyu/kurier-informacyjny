/* React */
import React, { useContext } from "react";

/* Miscellaneous */
import SourcesContext from "../SourcesContext";

/* Material-UI */
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

/* Utils */
import { getUser, getToken } from "../utils/Common";

/* axios */
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    close: {
        padding: theme.spacing(0.5),
    },
}));

function Source({ source }) {
    const { sources, setContextSources } = useContext(SourcesContext);
    const [snackPack, setSnackPack] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [messageInfo, setMessageInfo] = React.useState(undefined);

    React.useEffect(() => {
        if (snackPack.length && !messageInfo) {
            // Set a new snack when we don't have an active one
            setMessageInfo({ ...snackPack[0] });
            setSnackPack((prev) => prev.slice(1));
            setOpen(true);
        } else if (snackPack.length && messageInfo && open) {
            // Close an active snack when a new one is added
            setOpen(false);
        }
    }, [snackPack, messageInfo, open]);

    const handleClick = (message, newType) => () => {
        var curSources = sources;
        if (curSources[source]["type"] === newType) {
            message = `Źródło "${sources[source]["name"]}" jest już przypisane do kategorii ${newType}`;
        } else {
            axios
                .put(
                    "http://localhost:5000/user/change_assignment",
                    {
                        email: getUser(),
                        category_id:
                            newType === "Lewica"
                                ? 0
                                : newType === "Centrum"
                                ? 1
                                : 2,
                    },
                    {
                        headers: {
                            authorization: `Bearer ${getToken()}`,
                        },
                    }
                )
                .then(function (response) {
                    if (response.status === 200) {
                        curSources[source]["type"] = newType;
                        setContextSources(curSources);
                    }
                })
                .catch(() => {
                    message = `Nie udało się przypisać źródła "${sources[source]["name"]}" do kategorii ${newType}`;
                });
        }
        setSnackPack((prev) => [
            ...prev,
            { message, key: new Date().getTime() },
        ]);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    const handleExited = () => {
        setMessageInfo(undefined);
    };

    const classes = useStyles();

    return (
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
                <img
                    alt={`${sources[source]["name"]}-logo`}
                    className="absolute inset-0 h-full w-full object-contain object-center"
                    src={sources[source]["logo"]}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 text-center">
                    <h2 className="tracking-widest text-3xl title-font font-medium text-gray-900 mb-1">
                        {sources[source]["name"]}
                    </h2>
                    <div
                        className="flex justify-center rounded-lg text-lg my-10"
                        role="group"
                    >
                        <button
                            className="bg-white text-indigo-700 hover:bg-indigo-700 hover:text-white border border-r-0 border-indigo-700 rounded-l-lg px-4 py-2 mx-0 focus:outline-none"
                            onClick={handleClick(
                                `Źródło "${sources[source]["name"]}" przypisano do kategorii "Lewica"`,
                                "Lewica"
                            )}
                        >
                            Lewica
                        </button>
                        <button
                            className="bg-white text-indigo-700 hover:bg-indigo-700 hover:text-white border border-indigo-700  px-4 py-2 mx-0 focus:outline-none"
                            onClick={handleClick(
                                `Źródło "${sources[source]["name"]}" przypisano do kategorii "Centrum"`,
                                "Centrum"
                            )}
                        >
                            Centrum
                        </button>
                        <button
                            className="bg-white text-indigo-700 hover:bg-indigo-700 hover:text-white border border-l-0 border-indigo-700 rounded-r-lg px-4 py-2 mx-0 focus:outline-none"
                            onClick={handleClick(
                                `Źródło "${sources[source]["name"]}" przypisano do kategorii "Prawica"`,
                                "Prawica"
                            )}
                        >
                            Prawica
                        </button>
                    </div>
                </div>
            </div>
            <Snackbar
                key={messageInfo ? messageInfo.key : undefined}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                onExited={handleExited}
                message={messageInfo ? messageInfo.message : undefined}
                action={
                    <React.Fragment>
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            className={classes.close}
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
}

export default Source;
