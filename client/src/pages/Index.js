import React, { useState } from "react";

/* Heroicons */
import {
    HomeIcon,
    CogIcon,
    CollectionIcon,
    LogoutIcon,
} from "@heroicons/react/outline";

/* Locally stored icons */
import CrossIcon from "../images/icons/Cross";
import Logo from "../images/icons/Logo";
import Menu from "../images/icons/Menu";

/* Images */
import UserIcon from "../images/UserIcon.png";

/* Miscellaneous */
import List from "../components/List";

export default function IndexPage() {
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);
    return (
        <>
            <div className="absolute bg-gray-200 w-full">
                {/* Navigation starts */}
                {/* Mobile */}
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
                                    <div className="flex items-center">
                                        <Logo />
                                        <p className="text-bold md:text2xl text-base pl-3 text-gray-800">
                                            Kurier Informacyjny
                                        </p>
                                    </div>
                                    <div
                                        id="cross"
                                        className=" text-gray-800"
                                        onClick={() => setShow(!show)}
                                    >
                                        <CrossIcon />
                                    </div>
                                </div>
                                <ul className="f-m-m">
                                    <a>
                                        <li className="text-white pt-8">
                                            <div className="flex items-center">
                                                <div className="md:w-6 md:h-6 w-5 h-5">
                                                    <HomeIcon className="text-indigo-500" />
                                                </div>
                                                <p className="text-indigo-500 ml-3 text-lg">
                                                    Strona Główna
                                                </p>
                                            </div>
                                        </li>
                                    </a>
                                    <a>
                                        <li className="text-gray-700 pt-8">
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <div className="md:w-6 md:h-6 w-5 h-5">
                                                        <CogIcon className="text-gray-700" />
                                                    </div>
                                                    <p className="text-gray-700 ml-3 text-lg">
                                                        Przypisania
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </a>
                                    <a>
                                        <li className="text-gray-800 pt-8">
                                            <div className="flex items-center">
                                                <div className="md:w-6 md:h-6 w-5 h-5">
                                                    <CollectionIcon className="text-gray-800" />
                                                </div>
                                                <p className="text-gray-800 ml-3 text-lg">
                                                    Źródła
                                                </p>
                                            </div>
                                        </li>
                                    </a>
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
                {/* Mobile */}
                <nav className="w-full mx-auto bg-white shadow">
                    <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
                        <div className="h-full flex items-center">
                            <div className="mr-10 flex items-center">
                                <Logo />
                                <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">
                                    Kurier Informacyjny
                                </h3>
                            </div>
                            <ul className="pr-12 xl:flex items-center h-full hidden">
                                <li className="cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal border-b-2 border-indigo-700">
                                    Strona Główna
                                </li>
                                <li className="cursor-pointer h-full flex items-center text-sm text-gry-800 mx-10 tracking-normal">
                                    Przypisania
                                </li>
                                <li className="cursor-pointer h-full flex items-center text-sm text-gry-800 mr-10 tracking-normal">
                                    Źródła
                                </li>
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
                                                    <span className="ml-2">
                                                        Logout
                                                    </span>
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
                {/* Navigation ends */}
                {/* Page title starts */}
                <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
                    <h1>*BIG SLIDER HERE*</h1>
                </div>
                {/* Page title ends */}
                <div className="container mx-auto px-6">
                    <div className="w-full">
                        <List />
                    </div>
                </div>
            </div>
        </>
    );
}
