import React from 'react';

const ContactCard = () => {

    const listSContact = [
        {
            titleCard: 'email',
            className: 'contact-email contact-info',
            classText: 'info@consultplus.com'
        },
        {
            titleCard: 'call us',
            className: 'contact-phone contact-info',
            classText: '+91 8879 8767 990'
        },
        {
            titleCard: 'carrer',
            className: 'contact-carrer contact-info',
            classText: 'consult@career.com'
        }
    ];

    return (

        <ul className="list-contact">

            {
                listSContact.map((item, index) => {
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

export default ContactCard;