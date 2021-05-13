import React, { useState } from "react";
import {
    HomeIcon,
    CogIcon,
    CollectionIcon,
    LogoutIcon,
} from "@heroicons/react/outline";
import CrossIcon from "../icons/Cross";
import Logo from "../icons/Logo";
import Menu from "../icons/Menu";
import UserIcon from "../images/UserIcon.png";

export default function IndexPage() {
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);
    return (
        <>
            <div className="absolute bg-gray-200 w-full h-full">
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
                    <div>
                        <h4 className="text-2xl font-bold leading-tight text-gray-800">
                            User Profile
                        </h4>
                        <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-600 text-sm mt-3">
                            <li className="flex items-center mr-3 mt-3 md:mt-0">
                                <span className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-paperclip"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5" />
                                    </svg>
                                </span>
                                <span>Active</span>
                            </li>
                            <li className="flex items-center mr-3 mt-3 md:mt-0">
                                <span className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-trending-up"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="3 17 9 11 13 15 21 7" />
                                        <polyline points="14 7 21 7 21 14" />
                                    </svg>
                                </span>
                                <span> Trending</span>
                            </li>
                            <li className="flex items-center mt-3 md:mt-0">
                                <span className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-plane-departure"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path
                                            d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z"
                                            transform="rotate(-15 12 12) translate(0 -1)"
                                        />
                                        <line x1={3} y1={21} x2={21} y2={21} />
                                    </svg>
                                </span>
                                <span>Started on 29 Jan 2020</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none hover:bg-gray-100 rounded text-indigo-700 px-6 py-2 text-sm">
                            Back
                        </button>
                        <button className="transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none border bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                            Edit Profile
                        </button>
                    </div>
                </div>
                {/* Page title ends */}
                <div className="container mx-auto px-6">
                    {/* Remove class [ h-64 ] when adding a card block */}
                    {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                    <div className="w-full h-64 rounded border-dashed border-2 border-gray-300">
                        {/* Place your content here */}
                    </div>
                </div>
            </div>
        </>
    );
}
