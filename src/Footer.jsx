import React from 'react';


import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer-top">
                <div className="container">
                    <div className="category-footer">
                        <div className="logo-footer">
                            <img src="img/logo.png" alt="logo-footer"/>
                        </div>
                        <ul className="menu-footer">
                            <li><h3>navigation</h3></li>
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/about">about us</Link></li>
                            <li><Link to="/industry">industry</Link></li>
                            <li><Link to="/pricing">services</Link></li>
                            <li><Link to="/careers">pages</Link></li>
                            <li><Link to="/contact">contact us</Link></li>
                        </ul>
                        <ul className="menu-footer">
                            <li><h3>industary</h3></li>
                            <li><Link to="/industry">education</Link></li>
                            <li><Link to="/industry">business</Link></li>
                            <li><Link to="/industry">realestate</Link></li>
                            <li><Link to="/industry">technology</Link></li>
                            <li><Link to="/industry">banking</Link></li>
                            <li><Link to="/industry">communication</Link></li>
                            <li><Link to="/industry">much more</Link></li>
                        </ul>
                        <ul className="subscribe-footer">
                            <li><h3>News letter</h3></li>
                            <li>
                                <p className="text-section">Enter your email address to subscribe our notification of our new post & features by email.</p>
                            </li>
                            <li>
                                <form className="subscription" method="post" action="#">
                                    <input type="email" name="email" placeholder="email adress"/>
                                    <button className="btn-section btn-form">subscribe</button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <footer className="footer-bottom">
                <div className="container">
                    <div className="copyright">
                        <p className="text-section">Copyright © 2016 Consultplus theme.</p>
                    </div>
                    <div className="social">
                        <Link to="/https://www.facebook.com/" className="facebook">facebook</Link>
                        <Link to="/https://twitter.com" className="twitter">twitter</Link>
                        <Link to="/https://www.instagram.com" className="instagram">instagram</Link>
                        <Link to="/https://www.linkedin.com" className="linkedin">linkedin</Link>
                        <Link to="/https://plus.google.com" className="google">google +</Link>
                    </div>
                </div>
            </footer>
       </div>
    );
};

export default Footer;