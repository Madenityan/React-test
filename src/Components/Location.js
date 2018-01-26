import React from 'react';

const Location = () => {
    return (

        <ul className="list-location">
            <li>
                <i className="fa fa-phone icon-location" aria-hidden="true"></i>
                <div className="wrapper-location">
                    <h3>call us</h3>
                    <a className="text-section" href="tel:+885 6586 5554">+885 6586 5554</a>
                </div>
            </li>
            <li>
                <i className="fa fa-envelope-open-o icon-location" aria-hidden="true"></i>
                <div className="wrapper-location">
                    <h3>email</h3>
                    <p className="text-section">info@consultplus.com</p>
                </div>
            </li>
            <li>
                <i className="fa fa-map-marker icon-location  fa-2x" aria-hidden="true"></i>
                <div className="wrapper-location">
                    <h3>address</h3>
                    <address className="text-section">Department 98 44-46 Morningside Road Edinburgh, Scotland </address>
                </div>
            </li>
        </ul>

    );
};

export default Location;