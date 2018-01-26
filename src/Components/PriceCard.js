import React from 'react';

import { Link } from 'react-router-dom';

const PriceCard = () => {
    return (

        <ul className="prising-list">
            <li>
                <div className="price-card">
                    <p><span>100$</span>/month</p>
                    <p>basic plan</p>
                </div>
                <div className="plan-description">
                    <ul className="plan-description-list text-section description">
                        <li className="fa fa-check">
                            Duis commodo mollis.
                        </li>
                        <li className="fa fa-check">
                            Nam aliquet sagittis.
                        </li>
                        <li className="fa fa-check">
                            Fusce eleifend lectus.
                        </li>
                    </ul>
                    <Link to="/testimonials" className="btn-section">choose plan</Link>
                </div>
            </li>
            <li>
                <div className="price-card price-card-silver">
                    <p><span>150$</span>/month</p>
                    <p>silver plan</p>
                </div>
                <div className="plan-description">
                    <ul className="plan-description-list text-section">
                        <li className="fa fa-check">
                            Duis commodo mollis.
                        </li>
                        <li className="fa fa-check">
                            Nam aliquet sagittis.
                        </li>
                        <li className="fa fa-check">
                            Fusce eleifend lectus.
                        </li>
                        <li className="fa fa-check">
                            Etiam pulvinar elementum.
                        </li>
                    </ul>
                    <Link to="/testimonials" className="btn-section">choose plan</Link>
                </div>
            </li>
            <li>
                <div className="price-card price-card-gold">
                    <p><span>200$</span>/month</p>
                    <p>silver plan</p>
                </div>
                <div className="plan-description">
                    <ul className="plan-description-list text-section">
                        <li className="fa fa-check">
                            Duis commodo mollis.
                        </li>
                        <li className="fa fa-check">
                            Nam aliquet sagittis.
                        </li>
                        <li className="fa fa-check">
                            Fusce eleifend lectus.
                        </li>
                        <li className="fa fa-check">
                            Etiam pulvinar elementum.
                        </li>
                    </ul>
                    <Link to="/testimonials" className="btn-section">choose plan</Link>
                </div>
            </li>
        </ul>
    );
};

export default PriceCard;