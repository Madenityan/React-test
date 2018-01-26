import React from 'react';

import { Link } from 'react-router-dom';

const CardsAbout = () => {

    const listAbout = [
        {
            titleCard: 'our team',
            classText: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since',
            classbatton: 'our team',
            classimg:'img/team.png'
        },
        {
            titleCard: 'careers',
            classText:  'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since',
            classbatton:  'careers',
            classimg:'img/career-2.png'

        },
        {
            titleCard: 'services',
            classText: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since',
            classbatton:  'services',
            classimg:'img/servis.png'
        }
    ];


    return (

        <ul className="list-cards-about listAbout">
            {
                listAbout.map((item, index) => {
                    return (
                        <li className="cards-shadow" key={index}>
                            <img src={item.classimg} alt="team"/>
                            <div className="text-card-about">
                                <h3 className="title title-about">{item.titleCard}</h3>
                                <p className="text-section">{item.classText}</p>
                                <div className="btn-about">
                                    <Link to="/careers" className="btn-section btn-cards">{item.classbatton}</Link>
                                </div>
                            </div>
                        </li>
                    );
                })
            }
        </ul>

    );
};

export default CardsAbout;