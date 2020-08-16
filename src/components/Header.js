import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/new-logo.svg";

const Header = () =>(
    <header className="header">
        <Link to="/" className="header-link">
            <img src={logo} alt="" className="header-logo"/>
        </Link>
    </header>
);

export default Header;