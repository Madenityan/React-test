import React from 'react';

const FormContact = () => {
    return (
        <form className="contact-form form-write" name="contact" method="post" action="#">
            <div className="input-wrapper">
                <div className="wrapper-left">
                    <input type="text" name="name" placeholder="name" />
                    <input type="text" name="phone" placeholder="phone" />
                </div>
                <div className="wrapper-right">
                    <input type="email" name="email" placeholder="email" />
                    <input type="email" name="service" placeholder="service" />
                </div>
            </div>
            <textarea className="textarea-message" name="text" placeholder="comment"></textarea>
            <div className="btn-consultation">
                <button type="submit" className="btn-section">submit now</button>
            </div>
        </form>

    );
};

export default FormContact;