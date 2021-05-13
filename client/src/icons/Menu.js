import React from "react";

function Menu({ show, setShow }) {
    return (
        <svg
            onClick={() => setShow(!show)}
            aria-label="Main Menu"
            aria-haspopup="true"
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1={4} y1={8} x2={20} y2={8} />
            <line x1={4} y1={16} x2={20} y2={16} />
        </svg>
    );
}

export default Menu;
