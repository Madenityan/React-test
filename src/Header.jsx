import React from 'react';

import { Link } from 'react-router-dom';
import Main from "./Main";

class Header extends React.Component {

    render() {

        return (
            <div>
            <header className="header-wrapper">
                <div className="header-logo">
                    <img src="img/logo.png" alt="logo"/>
                    <h1>consult plus</h1>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">about us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/industry"  className="nav-link" href="#">industry</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pricing" className="nav-link">services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/careers" className="nav-link">pages</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link">contact us</Link>
                            </li>
                        </ul>
                        <div className="phone-number">
                            <i className="fa fa-phone icon-color" aria-hidden="true"></i>
                            <a className="phone" href="tel:+9156856664555">+91 5685 6664 555</a>
                            <i className="fa fa-envelope-open-o icon-color" aria-hidden="true"></i>
                        </div>
                    </div>
                </nav>
            </header>
            </div>
        );
    }
}

export default Header;