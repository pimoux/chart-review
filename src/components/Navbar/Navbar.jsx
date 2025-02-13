import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

export default function Navbar({ currentLabel }) {

    const links = [
        {
            path: '/eurusd',
            label: 'EURUSD',
        },
        {
            path: '/americanIndices',
            label: 'NQ & ES',
        }
    ]

    return (
        <div className="navbar">
            {links.map((item, i) => {
                return <div className={currentLabel === item.label ? "navlink active" : "navlink"} key={i}>
                    <Link to={item.path}>{item.label}</Link>
                </div>
            })}
        </div>
    );
};