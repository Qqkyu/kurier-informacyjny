/* React */
import React, { useState } from "react";

/* Components */
import Sidebar from "../components/Sidebar";
import Source from "../components/AdjustableSource";
import Navbar from "../components/Navbar";

/* Miscellaneous */
import SourcesContext from "../SourcesContext";

function AssignmentsPage() {
    const section = "assignments";
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);

    return (
        <>
            <div className="absolute bg-gray-200 w-full">
                {/* Navigation starts */}
                {/* Mobile */}
                <Sidebar show={show} setShow={setShow} section={section} />
                {/* Mobile */}
                <Navbar
                    profile={profile}
                    setProfile={setProfile}
                    show={show}
                    setShow={setShow}
                    section={section}
                />
                <div className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto ">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">
                                Modyfikacja przypisań
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                Zalogowani użytkownicy mają możliwość
                                modyfikacji domyślnych przypisań w dowolny
                                sposób, wystarczy wybrać jedną z trzech
                                dostępnych poniżej opcji a kategoria danego
                                źródła zostanie automatycznie zaktualizowana.
                            </p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <SourcesContext.Consumer>
                                {(value) =>
                                    Object.keys(value).map((src) => (
                                        <Source source={src} key={src} />
                                    ))
                                }
                            </SourcesContext.Consumer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AssignmentsPage;
