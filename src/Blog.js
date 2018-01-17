import React from 'react';

const Blog = () => {
    return (
        <div className="wrapper-blog">
            <div className="blog-1">
                <div className="blog-img">
                    <img src="img/photo-blog.png" alt="photo-blog"/>
                </div>
                <div className="blog-text">
                    <span>February 22, 2016 </span>
                    <h3 className="title">Blog Heading here</h3>
                    <p className="text-section">Established fact that a reader will be distracted by the readable of a page when looking at its layout...</p>
                </div>
            </div>
            <div className="blog-2">
                <div className="blog-text">
                    <span>February 22, 2016 </span>
                    <h3 className="title">Blog Heading here</h3>
                    <p className="text-section">Popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages. fact that a reader will be distracted by the readable of a page when...</p>
                </div>
            </div>
        </div>

    );
};

export default Blog;