import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Doane-Tigers-logo.svg";

import "./header.styles.scss";

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/">
                HOME
            </Link>
            <Link className="option" to="/recruitmentPage">
                APPLY NOW
            </Link>
            <Link className="option" to="/recruitView">
                VIEW PROSPECTS
            </Link>
        </div>
    </div>
);

export default Header;