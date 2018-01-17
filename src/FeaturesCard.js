import React from 'react';

const FeaturesCard = () => {
    return (
        <div className="features-info">
            <ul className="features-list-1">
                <li className="support icon-before">
                    <h3 className="title">24 hour support</h3>
                    <p className="text-section">containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker</p>
                </li>
                <li className="business icon-before">
                    <h3 className="title">Business boosting</h3>
                    <p className="text-section">established fact that a reader will be distracted by the readable content of a page when looking software</p>
                </li>
            </ul>
            <div className="logo-features">
                <img src="img/logo-features.png" alt="logo"/>
            </div>
            <ul className="features-list-2">
                <li className="security icon-before">
                    <h3 className="title">FUll security</h3>
                    <p className="text-section">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </li>
                <li className="creative icon-before">
                    <h3 className="title">Creative process</h3>
                    <p className="text-section">There are many variations of passages of Ipsum avail able, but the majority have suffered alteration.</p>
                </li>
            </ul>
        </div>
    );
};

export default FeaturesCard;