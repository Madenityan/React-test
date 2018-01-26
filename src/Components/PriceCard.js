import React from 'react';

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
                    <a href="#" className="btn-section">choose plan</a>
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
                    <a href="#" className="btn-section">choose plan</a>
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
                    <a href="#" className="btn-section">choose plan</a>
                </div>
            </li>
        </ul>
    );
};

export default PriceCard;