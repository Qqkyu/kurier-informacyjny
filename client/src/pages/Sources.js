/* React */
import React, { useContext, useState } from "react";

/* Components */
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Source from "../components/Source";

/* Miscellaneous */
import SourcesContext from "../SourcesContext";

function SourcesPage({ setUser }) {
    const { sources } = useContext(SourcesContext);
    const section = "sources";
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);

    return (
        <>
            <div className="absolute bg-gray-200 w-full">
                {/* Navigation starts */}
                {/* Mobile */}
                <Sidebar
                    show={show}
                    setShow={setShow}
                    section={section}
                    setUser={setUser}
                />
                {/* Mobile */}
                <Navbar
                    profile={profile}
                    setProfile={setProfile}
                    show={show}
                    setShow={setShow}
                    section={section}
                    setUser={setUser}
                />
                {/* Navigation ends */}
                <div className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto ">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">
                                Dostępne Źródła
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                Źródła z których aktualnie pobieramy informacje.
                                Każde z nich jest domyślnie przypisane do jednej
                                z trzech kategorii, tj. orientacji, której dane
                                źródło jest najbliżej - lewica, centrum lub
                                prawica. Najważniejszym czynnikiem wpływającem
                                na każde dopasowanie jest to, jaki charakter
                                według tego źródła ono posiada.
                            </p>
                        </div>
                        <div className="flex flex-col text-center w-full my-20">
                            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
                                Lewica
                            </h1>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {Object.keys(sources)
                                .filter(
                                    (src) => sources[src]["type"] === "Lewica"
                                )
                                .map((src) => (
                                    <Source source={src} key={src} />
                                ))}
                        </div>
                        <div className="flex flex-col text-center w-full my-20">
                            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
                                Centrum
                            </h1>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {Object.keys(sources)
                                .filter(
                                    (src) => sources[src]["type"] === "Centrum"
                                )
                                .map((src) => (
                                    <Source source={src} key={src} />
                                ))}
                        </div>
                        <div className="flex flex-col text-center w-full my-20">
                            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
                                Prawica
                            </h1>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {Object.keys(sources)
                                .filter(
                                    (src) => sources[src]["type"] === "Prawica"
                                )
                                .map((src) => (
                                    <Source source={src} key={src} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SourcesPage;
