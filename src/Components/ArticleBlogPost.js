import React from 'react';

import { Link } from 'react-router-dom';

const ArticleBlogPost = () => {
    return (

        <article className="blog-main">
            <i className="fa fa-picture-o icon-blog" aria-hidden="true"></i>
            <Link to="/blog" className="btn-section">business</Link>
            <img src="img/blog-post-1.png" alt="image-blog"/>
            <div className="blog-main-text">
                <h3 className="title">Blog Heading Here</h3>
                <p className="text-section">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <ul className="list-text">
                <li className="fa fa-check" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li className="fa fa-check">
                    Proin tempus ipsum vitae velit convallis venenatis.
                </li>
                <li className="fa fa-check">
                    Curabitur vel felis pretium, blandit arcu in, sollicitudin ipsum.
                </li>
            </ul>
            <div className="blog-main-bottom">
                <img src="img/blog-post-2.png" alt="image-blog"/>
                <p className="text-section">Printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
        </article>
    );
};

export default ArticleBlogPost;