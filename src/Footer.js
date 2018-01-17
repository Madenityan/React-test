import React from 'react';


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
                            <li><a href="#">home</a></li>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">industry</a></li>
                            <li><a href="#">services</a></li>
                            <li><a href="#">pages</a></li>
                            <li><a href="#">contact us</a></li>
                        </ul>
                        <ul className="menu-footer">
                            <li><h3>industary</h3></li>
                            <li><a href="#">education</a></li>
                            <li><a href="#">business</a></li>
                            <li><a href="#">realestate</a></li>
                            <li><a href="#">technology</a></li>
                            <li><a href="#">banking</a></li>
                            <li><a href="#">communication</a></li>
                            <li><a href="#">much more</a></li>
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
                        <a href="#" className="facebook">facebook</a>
                        <a href="#" className="twitter">twitter</a>
                        <a href="#" className="instagram">instagram</a>
                        <a href="#" className="linkedin">linkedin</a>
                        <a href="#" className="google">google +</a>
                    </div>
                </div>
            </footer>
       </div>
    );
};

export default Footer;