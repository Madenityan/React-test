import React from 'react';

const ServicesCard = () => {

    const listServices = [
        {
            titleCard: 'business consultation',
            className: 'consultation',
            classText: 'Many variations of passages of Lorem available, but the majority have suffered alteration in some form, by injected humour'
        },
        {
            titleCard: 'boost local business',
            className: 'local-business',
            classText: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some'
        },
        {
            titleCard: 'accounting',
            className: 'accounting',
            classText: 'Professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur'
        }
    ];

    return (

        <ul className="list-services">
            {
                listServices.map((item, index) => {
                    return (
                        <li className={item.className} key={index}>
                            <h3 className="title">{item.titleCard}</h3>
                            <p className="text-section">{item.classText}</p>
                        </li>
                    );
                })
            }

        </ul>

    );
};

export default ServicesCard;