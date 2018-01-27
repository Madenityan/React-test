import React from 'react';

import { Link } from 'react-router-dom';

const CardsIndustary = () => {

    const listIndustary = [
        {
            titleCard: 'business',
            classimg: 'img/industary_1.png'
        },
        {
            titleCard: 'education',
            classimg: 'img/industary_2.png'

        },
        {
            titleCard: 'technology',
            classimg: 'img/industary_3.png'
        },
        {
            titleCard: 'real estate',
            classimg: 'img/industary_4.png'
        },
        {
            titleCard: 'telecommunication',
            classimg:'img/industary_5.png'
        },
        {
            titleCard: 'BANKING & FINANCIAL',
            classimg: 'img/industary_6.png'
        },
        {
            titleCard: 'Law',
            classimg: 'img/industary_7.png'
        },
        {
            titleCard: 'construction',
            classimg:'img/industary_8.png'
        },

    ];


    return (

        <ul className="list-industary listIndustary">
            {
                listIndustary.map((item, index) => {
                    return (

                        <li className="cards-shadow"  key={index}>
                            <img src={item.classimg} alt="industary-1"/>
                            <div className="text-card-industary">
                                <h3 className="title">{item.titleCard}</h3>
                                <p className="text-section">Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                <div className="btn-about">
                                    <Link to="/blog" className="btn-section">choose your service</Link>
                                </div>
                            </div>
                        </li>
                    );
                })
            }
        </ul>

    );
};


export default CardsIndustary;