import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/Doane-Tigers-logo.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/">
                HOME
            </Link>
            <Link className="option" to="/recruitment-page">
                APPLY NOW
            </Link>
            {
                currentUser ?
                (<Link className="option" to="/recruit-view">VIEW RECRUITS</Link>)
                :
                (<div></div>)
            }
            {
                currentUser ? 
                (<Link className="option" to="/" onClick={ () => auth.signOut() }>SIGN OUT</Link>)
                :
                (<Link className="option" to="/coach-sign-in" >SIGN IN</Link>)
            }
        </div>
    </div>
);

export default Header;