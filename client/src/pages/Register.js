/* React */
import React, { useRef } from "react";
import { Link } from "react-router-dom";

/* Locally stored icons */
import Logo from "../images/icons/Logo";

function RegisterPage() {
    let form = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form_data = new FormData(form.current);
        let payload = {};
        form_data.forEach(function (value, key) {
            payload[key] = value;
        });
        //   console.log("payload", payload);
        // Place your API call here to submit your payload.
    };
    return (
        <section className="bg-indigo-600 {-- h-screen --}">
            <div className="mx-auto flex justify-center lg:items-center h-full">
                <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 text-white py-12 px-2 sm:px-0"
                >
                    <div className="pt-0 px-2 flex flex-col items-center justify-center">
                        <Link to="/">
                            <Logo
                                width={43}
                                height={44}
                                viewBox="0 0 300 300"
                                enableBackground="new 0 0 300 300"
                                className="w-24 h-24"
                            />
                        </Link>
                        <h2 className="text-4xl leading-tight pt-8">
                            Kurier Informacyjny
                        </h2>
                    </div>
                    <div className="pt-16 px-2 flex flex-col items-center justify-center">
                        <h3 className="text-2xl sm:text-3xl xl:text-2xl font-bold leading-tight">
                            Zarejestruj się
                        </h3>
                    </div>
                    <div className="mt-12 w-full px-2 sm:px-6">
                        <div className="flex flex-col mt-5">
                            <label
                                htmlFor="email"
                                className="text-lg font-semibold leading-tight"
                            >
                                Email
                            </label>
                            <input
                                required
                                id="email"
                                name="email"
                                className="h-10 px-2 w-full text-white bg-indigo-700 rounded mt-2 focus:outline-none shadow"
                                type="email"
                            />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label
                                htmlFor="password"
                                className="text-lg font-semibold fleading-tight"
                            >
                                Hasło
                            </label>
                            <input
                                required
                                id="password"
                                name="password"
                                className="h-10 px-2 w-full text-white bg-indigo-700 rounded mt-2 focus:outline-none shadow"
                                type="password"
                            />
                        </div>
                    </div>
                    <div className="pt-6 w-full flex justify-between px-2 sm:px-6">
                        <div className="flex items-center">
                            <input
                                id="rememberme"
                                className="w-3 h-3 mr-2"
                                type="checkbox"
                            />
                            <label htmlFor="rememberme" className="text-xs">
                                Zapamiętaj mnie
                            </label>
                        </div>
                    </div>
                    <div className="px-2 sm:px-6">
                        <button className="focus:outline-none w-full bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded text-indigo-600 px-8 py-3 text-sm mt-6">
                            Zarejestruj się
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default RegisterPage;
