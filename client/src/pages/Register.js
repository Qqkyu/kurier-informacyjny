/* React */
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

/* axios */
import axios from "axios";

/* Locally stored icons */
import Logo from "../images/icons/Logo";

/* Utils */
import { setUserSession } from "../utils/Common";

function RegisterPage() {
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
                .post("http://localhost:5000/signup", payload)
                .then(function (response) {
                    if (response.status === 200) {
                        /* Successful request - login user and set user data */
                        axios
                            .post("http://localhost:5000/login", payload)
                            .then((response) => {
                                setUserSession(
                                    response.data.token,
                                    response.data.email
                                );
                                setRedirect(true);
                            });
                    }
                })
                .catch(() => {
                    alert("Użytkownik o podanym mailu i haśle już istnieje");
                });
        }
    };

    /* If user registered, they get redirected to the main page */
    return redirect ? (
        <Redirect to="/" />
    ) : (
        <section className="bg-indigo-600 {-- h-screen --}">
            <div className="mx-auto flex justify-center lg:items-center h-full">
                <form
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
                        <h2 className="text-4xl leading-tight pt-8 text-center">
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
                                autoFocus
                                required
                                id="email"
                                name="email"
                                className="h-10 px-2 w-full text-white bg-indigo-700 rounded mt-2 focus:outline-none shadow"
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
                                className="h-10 px-2 w-full text-white bg-indigo-700 rounded mt-2 focus:outline-none shadow"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="px-2 sm:px-6">
                        <button
                            type="submit"
                            className="focus:outline-none w-full bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded text-indigo-600 px-8 py-3 text-sm mt-6"
                        >
                            Zarejestruj się
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default RegisterPage;
