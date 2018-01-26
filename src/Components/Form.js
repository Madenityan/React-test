import React from 'react';

const Form = () => {
    return (
        <form className="contact-form" name="contact" method="post" action="#">
            <input type="text" name="name" placeholder="name" />
            <input type="email" name="email" placeholder="email" />
            <textarea className="textarea-message" name="text" placeholder="comment"></textarea>
            <div className="btn-consultation">
                <button type="submit" className="btn-section">submit now</button>
            </div>
        </form>
    );
};

export default Form;