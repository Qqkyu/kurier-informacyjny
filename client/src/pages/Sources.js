/* React */
import React, { useState } from "react";

/* Components */
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Source from "../components/Source";

const sources = [
    "KrytykaPolityczna",
    "OkoPress",
    "Tvn24",
    "Interia",
    "PolsatNews",
    "DoRzeczy",
    "Wprost",
];

function SourcesPage() {
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);

    return (
        <>
            <div className="absolute bg-gray-200 w-full">
                {/* Navigation starts */}
                {/* Mobile */}
                <Sidebar show={show} setShow={setShow} />
                {/* Mobile */}
                <Navbar
                    profile={profile}
                    setProfile={setProfile}
                    show={show}
                    setShow={setShow}
                />
                {/* Navigation ends */}
                <div className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto ">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
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
                        <div className="flex flex-wrap -m-4">
                            {sources.map((source) => (
                                <Source source={source} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SourcesPage;
