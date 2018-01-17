import React from 'react';

const Header = () => {
    return (
        <header className="header-wrapper">
            <div className="header-logo">
                <img src="img/logo.png" alt="logo"/>
                <h1>consult plus</h1>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">about us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">industry</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">contact us</a>
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
    );
};

export default Header;