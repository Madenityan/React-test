import React from 'react';


const RelatedPost = () => {
    return (

        <div className="related-post">
            <header className="header-section">
                <h2 className="header-left">blog post</h2>
            </header>
            <ul className="list-blog-page">
                <li>
                    <a href="blog-page.html"><img src="img/blog-post-3.png" alt="image-blog"/></a>
                    <h3 className="title">Blog Heading Here</h3>
                    <span>11-feb-2016</span>
                </li>
                <li>
                    <a href="blog-page.html"><img src="img/blog-post-4.png" alt="image-blog"/></a>
                    <h3 className="title">Blog Heading Here</h3>
                    <span>11-feb-2016</span>
                </li>
                <li>
                    <a href="blog-page.html"><img src="img/blog-post-5.png" alt="image-blog"/></a>
                    <h3 className="title">Blog Heading Here</h3>
                    <span>11-feb-2016</span>
                </li>
                <li>
                    <a href="blog-page.html"><img src="img/blog-post-6.png" alt="image-blog"/></a>
                    <h3 className="title">Blog Heading Here</h3>
                    <span>11-feb-2016</span>
                </li>
            </ul>
        </div>

    );
};

export default RelatedPost;