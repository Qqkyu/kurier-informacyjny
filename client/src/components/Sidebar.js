/* React */
import React from "react";
import { Link } from "react-router-dom";

/* Heroicons */
import { HomeIcon, CogIcon, CollectionIcon } from "@heroicons/react/outline";

/* Locally stored icons */
import CrossIcon from "../images/icons/Cross";
import Logo from "../images/icons/Logo";

/* Images */
import UserIcon from "../images/UserIcon.png";

function Sidebar({ show, setShow, section }) {
    return (
        <div
            className={
                show
                    ? "w-full h-full absolute z-40  transform  translate-x-0 "
                    : "   w-full h-full absolute z-40  transform -translate-x-full"
            }
        >
            <div
                className="bg-gray-800 opacity-50 inset-0 fixed w-full h-full"
                onClick={() => setShow(!show)}
            />
            <div className="w-64 z-20 absolute left-0 z-40 top-0 bg-white shadow flex-col justify-between transition duration-150 ease-in-out h-full">
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
                                <div className="flex items-center">
                                    <img
                                        alt="profile-pic"
                                        src={UserIcon}
                                        className="w-8 h-8 rounded-md"
                                    />
                                    <p className=" text-gray-800 text-base leading-4 ml-2">
                                        kulmisiu007@gmail.com
                                    </p>
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
