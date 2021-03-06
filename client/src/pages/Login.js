/* React */
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

/* Locally stored icons */
import Logo from "../images/icons/Logo";

/* Axios */
import axios from "axios";

/* Utils */
import { setUserSession } from "../utils/Common";

function LoginPage() {
    const [redirect, setRedirect] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email.length && password.length) {
            const payload = {
                email: email,
                password: password,
            };
            axios
                .post("http://localhost:5000/login", payload)
                .then(function (response) {
                    if (response.status === 200) {
                        /* Successful request - set user data */
                        setUserSession(
                            response.data.token,
                            response.data.email
                        );
                        setRedirect(true);
                    }
                })
                .catch(() => {
                    alert("Nieprawidłowy login lub hasło");
                });
        }
    };

    /* If user logged-in, they get redirected to the main page */
    return redirect ? (
        <Redirect to="/" />
    ) : (
        <section className="bg-white {-- h-screen --}">
            <div className="mx-auto flex justify-center h-full flex-col lg:flex-row">
                <form
                    onSubmit={handleSubmit}
                    className="w-full lg:w-1/2 flex justify-center bg-white dark:bg-gray-900"
                >
                    <div className="w-full sm:w-4/6 md:w-3/6 lg:w-2/3 text-gray-800 dark:text-gray-100 mb-12 sm:mb-0 flex flex-col justify-center px-2 sm:px-0">
                        <div className="px-2 flex flex-col items-center justify-center pt-12 lg:pt-0">
                            <Link to="/">
                                <Logo
                                    width={43}
                                    height={44}
                                    viewBox="0 0 300 300"
                                    enableBackground="new 0 0 300 300"
                                    className="w-32 h-32"
                                />
                            </Link>
                            <h2 className="text-4xl leading-tight pt-8">
                                Kurier Informacyjny
                            </h2>
                        </div>
                        <div className="mt-8 w-full px-2 sm:px-6">
                            <div className="flex flex-col mt-8">
                                <label
                                    htmlFor="email"
                                    className="text-lg font-semibold leading-tight"
                                >
                                    Email
                                </label>
                                <input
                                    autoFocus
                                    required
                                    id="email"
                                    name="email"
                                    className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="px-2 sm:mb-16 sm:px-6">
                            <button
                                type="submit"
                                className="focus:outline-none w-full sm:w-auto bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm mt-6"
                            >
                                Zaloguj się
                            </button>
                            <p className="mt-6 text-xs">
                                Nie masz konta?&nbsp;&nbsp;
                                <Link
                                    to="/register/"
                                    className="underline text-indigo-600"
                                >
                                    Zarejestruj się
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
                <div
                    className="w-full lg:w-1/2 bg-indigo-600 px-2 py-40 sm:py-48 sm:px-12 flex flex-col justify-center relative bg-no-repeat bg-center bg-cover h-full"
                    style={{
                        backgroundImage:
                            "url(https://i.lensdump.com/i/Ih3RZ3.png)",
                    }}
                >
                    <div className="absolute top-0 right-0 pt-3 pr-3 text-white">
                        <svg
                            width={199}
                            height={131}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                transform="rotate(-90 65.5 65)"
                                fill="#F7FAFC"
                                fillRule="evenodd"
                            >
                                <rect width="6.002" height="6.005" rx="3.001" />
                                <rect
                                    x="31.002"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    y="24.015"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="31.002"
                                    y="24.015"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    y="24.015"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    y="24.015"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    y="24.015"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    y="48.029"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="31.002"
                                    y="48.029"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    y="48.029"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    y="48.029"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    y="48.029"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    y="72.044"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="31.002"
                                    y="72.044"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    y="72.044"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    y="72.044"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    y="72.044"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    y="96.059"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="31.002"
                                    y="96.059"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    y="96.059"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    y="96.059"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    y="96.059"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    y="120.073"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="31.002"
                                    y="120.073"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    y="120.073"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    y="120.073"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    y="120.073"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    y="144.088"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="31.002"
                                    y="144.088"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    y="144.088"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    y="144.088"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    y="144.088"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    y="168.103"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="31.002"
                                    y="168.103"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    y="168.103"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    y="168.103"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    y="168.103"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    y="192.117"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="31.002"
                                    y="192.117"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    y="192.117"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    y="192.117"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    y="192.117"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                            </g>
                        </svg>
                    </div>
                    <div className="flex relative z-30 flex-col justify-center pl-4 md:pr-12 xl:pr-12 md:pl-24">
                        <h3 className="text-4xl font-extrabold leading-tight text-white">
                            Jednoczesne przeglądanie informacji ze źródeł o
                            różnych charakterach
                        </h3>
                        <p className="text-xl text-white leading-normal pt-3 xl:w-10/12">
                            Kurier informacyjny umożliwia łatwe przeglądanie
                            informacji pogrupowanych w zależności od aktualnie
                            wybranych poglądów.
                        </p>
                    </div>
                    <div className="z-20 absolute bottom-0 left-0 pb-3 pl-3 text-white">
                        <svg
                            width={199}
                            height={131}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                transform="rotate(-90 65.5 65)"
                                fill="#F7FAFC"
                                fillRule="evenodd"
                            >
                                <rect width="6.002" height="6.005" rx="3.001" />
                                <rect
                                    x="31.002"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    y="24.015"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="31.002"
                                    y="24.015"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    y="24.015"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    y="24.015"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    y="24.015"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    y="48.029"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="31.002"
                                    y="48.029"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    y="48.029"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    y="48.029"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    y="48.029"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    y="72.044"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="31.002"
                                    y="72.044"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    y="72.044"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    y="72.044"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    y="72.044"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    y="96.059"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="31.002"
                                    y="96.059"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    y="96.059"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    y="96.059"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    y="96.059"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    y="120.073"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="31.002"
                                    y="120.073"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    y="120.073"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    y="120.073"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    y="120.073"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    y="144.088"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="31.002"
                                    y="144.088"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    y="144.088"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    y="144.088"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    y="144.088"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    y="168.103"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="31.002"
                                    y="168.103"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    y="168.103"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    y="168.103"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    y="168.103"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    y="192.117"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="31.002"
                                    y="192.117"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="62.003"
                                    y="192.117"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="93.005"
                                    y="192.117"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                                <rect
                                    x="124.007"
                                    y="192.117"
                                    width="6.002"
                                    height="6.005"
                                    rx="3.001"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;
