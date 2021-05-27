/* React */
import React from "react";
import { Link } from "react-router-dom";

/* Locally stored icons */
import Logo from "../images/icons/Logo";
import Menu from "../images/icons/Menu";

/* Utils */
import { getUser, removeUserSession } from "../utils/Common";

function Navbar({ show, setShow, section, setUser }) {
    var user = getUser();

    return (
        <nav className="w-full mx-auto bg-white shadow">
            <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
                <div className="h-full flex items-center">
                    <Link to="/">
                        <div className="mr-10 flex items-center">
                            <Logo
                                width="43"
                                height="43"
                                viewBox="0 0 210.63 250.24"
                            />
                            <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">
                                Kurier Informacyjny
                            </h3>
                        </div>
                    </Link>
                    <ul className="pr-12 xl:flex items-center h-full hidden">
                        <Link
                            to="/"
                            className={
                                section === "index"
                                    ? "cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal border-b-2 border-indigo-700"
                                    : "cursor-pointer h-full flex items-center text-sm text-gry-800 tracking-normal"
                            }
                        >
                            <li>Strona Główna</li>
                        </Link>
                        <Link
                            to="/assignments/"
                            className={
                                section === "assignments"
                                    ? "cursor-pointer h-full flex items-center text-sm text-indigo-700 mx-10 tracking-normal border-b-2 border-indigo-700"
                                    : "cursor-pointer h-full flex items-center text-sm text-gry-800 mx-10 tracking-normal"
                            }
                        >
                            <li>Przypisania</li>
                        </Link>
                        <Link
                            to="/sources/"
                            className={
                                section === "sources"
                                    ? "cursor-pointer h-full flex items-center text-sm text-indigo-700 mr-10 tracking-normal border-b-2 border-indigo-700"
                                    : "cursor-pointer h-full flex items-center text-sm text-gry-800 mr-10 tracking-normal"
                            }
                        >
                            <li>Źródła</li>
                        </Link>
                    </ul>
                </div>
                <div className="h-full xl:flex items-center justify-end hidden">
                    <div className="w-full h-full flex items-center">
                        <div className="w-full h-full flex">
                            <div
                                aria-haspopup="true"
                                className="cursor-pointer w-full flex items-center justify-end relative"
                            >
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
                                        <Link to="/login/">
                                            <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 hover:bg-gray-100 rounded border border-indigo-700 text-indigo-700 px-6 py-2 text-sm">
                                                Logowanie
                                            </button>
                                        </Link>
                                        <Link to="/register/">
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
                <div className="visible xl:hidden flex items-center relative">
                    <Menu show={show} setShow={setShow} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
