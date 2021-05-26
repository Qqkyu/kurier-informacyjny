/* React */
import React, { useState } from "react";

/* Components */
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import List from "../components/List";

function IndexPage() {
    const section = "index";
    const [value, setValue] = useState(50);
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
                {/* Navigation ends */}
                {/* Page title starts */}
                <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
                    <Slider setValue={setValue} />
                </div>
                {/* Page title ends */}
                <div className="container mx-auto px-6">
                    <div className="w-full">
                        <List
                            type={
                                value === 0
                                    ? "Lewica"
                                    : value === 50
                                    ? "Centrum"
                                    : "Prawica"
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
