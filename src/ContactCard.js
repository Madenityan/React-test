import React from 'react';

const ContactCard = () => {
    return (
        <ul className="list-contact">
            <li className="contact-email contact-info">
                <h3 className="title">email</h3>
                <p>info@consultplus.com</p>
            </li>
            <li className="contact-phone contact-info">
                <h3 className="title">call us</h3>
                <a href="tel:+91 8879 8767 990">+91 8879 8767 990</a>
            </li>
            <li className="contact-carrer contact-info">
                <h3 className="title">carrer</h3>
                <p>consult@career.com</p>
            </li>
        </ul>
    );
};

export default ContactCard;