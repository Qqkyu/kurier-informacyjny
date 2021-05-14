/* React */
import React from "react";
import { Link } from "react-router-dom";

/* Heroicons */
import { CogIcon, LogoutIcon } from "@heroicons/react/outline";

/* Locally stored icons */
import Logo from "../images/icons/Logo";
import Menu from "../images/icons/Menu";

/* Images */
import UserIcon from "../images/UserIcon.png";

function Navbar({ show, setShow, profile, setProfile }) {
    return (
        <nav className="w-full mx-auto bg-white shadow">
            <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
                <div className="h-full flex items-center">
                    <Link to="/">
                        <div className="mr-10 flex items-center">
                            <Logo />
                            <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">
                                Kurier Informacyjny
                            </h3>
                        </div>
                    </Link>
                    <ul className="pr-12 xl:flex items-center h-full hidden">
                        <Link
                            to="/"
                            className="cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal border-b-2 border-indigo-700"
                        >
                            <li>Strona Główna</li>
                        </Link>
                        <Link
                            to="/assignments/"
                            className="cursor-pointer h-full flex items-center text-sm text-gry-800 mx-10 tracking-normal"
                        >
                            <li>Przypisania</li>
                        </Link>
                        <Link
                            to="/sources/"
                            className="cursor-pointer h-full flex items-center text-sm text-gry-800 mr-10 tracking-normal"
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
                                onClick={() => setProfile(!profile)}
                            >
                                {profile ? (
                                    <ul className="p-2 w-40 border-r bg-white absolute rounded z-40 left-0 shadow mt-44 ">
                                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                            <CogIcon className="h-5 w-5" />
                                            <span className="ml-2">
                                                Ustawienia konta
                                            </span>
                                        </li>
                                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                            <LogoutIcon className="h-5 w-5" />
                                            <span className="ml-2">Logout</span>
                                        </li>
                                    </ul>
                                ) : (
                                    ""
                                )}
                                <img
                                    className="rounded h-10 w-10 object-cover"
                                    src={UserIcon}
                                    alt="logo"
                                />
                                <p className="text-gray-800 text-sm ml-2">
                                    kulmisiu007@gmail.com
                                </p>
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
