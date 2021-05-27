/* React */
import React from "react";
import { Link } from "react-router-dom";

/* Heroicons */
import { HomeIcon, CogIcon, CollectionIcon } from "@heroicons/react/outline";

/* Locally stored icons */
import CrossIcon from "../images/icons/Cross";
import Logo from "../images/icons/Logo";

/* Utils */
import { getUser, removeUserSession } from "../utils/Common";

function Sidebar({ show, setShow, section, setUser }) {
    const user = getUser();

    return (
        <div
            className={
                show
                    ? "w-full h-full absolute z-40  transform  translate-x-0 "
                    : "w-full h-full absolute z-40  transform -translate-x-full"
            }
        >
            <div
                className="bg-gray-800 opacity-50 inset-0 fixed w-full h-full"
                onClick={() => setShow(!show)}
            />
            <div className="sticky w-64 z-20 absolute left-0 z-40 top-0 bg-white shadow flex-col justify-between transition duration-150 ease-in-out h-screen">
                <div className="flex flex-col justify-between h-full">
                    <div className="px-6 pt-4">
                        <div className="flex items-center justify-between">
                            <Link to="/">
                                <div className="flex items-center">
                                    <Logo
                                        width="43"
                                        height="43"
                                        viewBox="0 0 210.63 250.24"
                                    />
                                    <p className="text-bold md:text2xl text-base pl-3 text-gray-800">
                                        Kurier Informacyjny
                                    </p>
                                </div>
                            </Link>
                            <div
                                id="cross"
                                className=" text-gray-800"
                                onClick={() => setShow(!show)}
                            >
                                <CrossIcon />
                            </div>
                        </div>
                        <ul className="f-m-m">
                            <Link to="/">
                                <li className="text-white pt-8">
                                    <div className="flex items-center">
                                        <div className="md:w-6 md:h-6 w-5 h-5">
                                            <HomeIcon
                                                className={
                                                    section === "index"
                                                        ? "text-indigo-500"
                                                        : "text-gray-800"
                                                }
                                            />
                                        </div>
                                        <p
                                            className={
                                                section === "index"
                                                    ? "text-indigo-500 ml-3 text-lg"
                                                    : "text-gray-800 ml-3 text-lg"
                                            }
                                        >
                                            Strona Główna
                                        </p>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/assignments/">
                                <li className="text-gray-700 pt-8">
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <div className="md:w-6 md:h-6 w-5 h-5">
                                                <CogIcon
                                                    className={
                                                        section ===
                                                        "assignments"
                                                            ? "text-indigo-500"
                                                            : "text-gray-800"
                                                    }
                                                />
                                            </div>
                                            <p
                                                className={
                                                    section === "assignments"
                                                        ? "text-indigo-500 ml-3 text-lg"
                                                        : "text-gray-800 ml-3 text-lg"
                                                }
                                            >
                                                Przypisania
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/sources/">
                                <li className="text-gray-800 pt-8">
                                    <div className="flex items-center">
                                        <div className="md:w-6 md:h-6 w-5 h-5">
                                            <CollectionIcon
                                                className={
                                                    section === "sources"
                                                        ? "text-indigo-500"
                                                        : "text-gray-800"
                                                }
                                            />
                                        </div>
                                        <p
                                            className={
                                                section === "sources"
                                                    ? "text-indigo-500 ml-3 text-lg"
                                                    : "text-gray-800 ml-3 text-lg"
                                            }
                                        >
                                            Źródła
                                        </p>
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="w-full">
                        <div className="border-t border-gray-300">
                            <div className="w-full flex items-center justify-between px-6 pt-1">
                                <div className="flex flex-wrap justify-center items-center">
                                    {user ? (
                                        <a href="/">
                                            <button
                                                onClick={() => {
                                                    removeUserSession();
                                                    setUser(null);
                                                }}
                                                className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 hover:bg-gray-100 rounded border border-indigo-700 text-indigo-700 px-6 py-2 text-sm"
                                            >
                                                Wyloguj się
                                            </button>
                                        </a>
                                    ) : (
                                        <>
                                            <Link
                                                to="/login/"
                                                state={{ setUser }}
                                            >
                                                <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 hover:bg-gray-100 rounded border border-indigo-700 text-indigo-700 px-6 py-2 text-sm">
                                                    Logowanie
                                                </button>
                                            </Link>
                                            <Link
                                                to="/register/"
                                                state={{ setUser }}
                                            >
                                                <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-sm">
                                                    Rejestracja
                                                </button>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
