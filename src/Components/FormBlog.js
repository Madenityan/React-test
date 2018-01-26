import React from 'react';

const FormBlog = () => {
    return (
        <form className="contact-form form-comment" name="contact" method="post" action="#">
            <input type="text" name="name" placeholder="name" />
            <input type="email" name="email" placeholder="email" />
            <textarea className="textarea-message" name="text" placeholder="comment"></textarea>
            <div className="btn-consultation">
                <button type="submit" className="btn-section">submit comment</button>
            </div>
        </form>
    );
};

export default FormBlog;