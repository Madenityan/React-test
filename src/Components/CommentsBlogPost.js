import React from 'react';

import { Link } from 'react-router-dom';

const CommentsBlogPost = () => {
    return (

        <ul className="list-comments">
            <li>
                <img src="img/visitor-1.png" alt="visitor-1"/>
                <div className="comment-visitor">
                    <div className="wrapper-comment">
                        <h3 className="title">visitor name</h3>
                        <Link to="/blog" className="btn-section">reply</Link>
                    </div>
                    <p className="text-section">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first</p>
                </div>
            </li>
            <li>
                <img src="img/visitor-2.png" alt="visitor-2"/>
                <div className="comment-visitor">
                    <div className="wrapper-comment">
                        <h3 className="title">visitor name</h3>
                        <Link to="/blog" className="btn-section">reply</Link>
                    </div>
                    <p className="text-section">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first</p>
                </div>
            </li>
            <li>
                <img src="img/visitor-3.png" alt="visitor-3"/>
                <div className="comment-visitor">
                    <div className="wrapper-comment">
                        <h3 className="title">visitor name</h3>
                        <Link to="/blog" className="btn-section">reply</Link>
                    </div>
                    <p className="text-section">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first</p>
                </div>
            </li>
        </ul>

    );
};

export default CommentsBlogPost;