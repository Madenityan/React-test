import React from 'react';

import { Link } from 'react-router-dom';

const CardsBlog = () => {

    return (
        <div className="masonry-container container-mix">
            <div className="row">
                <div className="item mix masonry-cards">
                    <div className="icon-blog-masonry">
                        <i className="fa fa-quote-left icon-blog" aria-hidden="true"></i>
                        <Link to="/blogpost" className="btn-section">health</Link>
                    </div>
                    <div className="text-card-masonry">
                        <h3 className="title">Blog Heading Here</h3>
                        <p className="text-section">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                    </div>
                    <div className="icon-masonry-wrapper">
                        <div className="icon-masonry-left">
                            <i className="fa fa-clock-o icon-masonry" aria-hidden="true"></i>
                            <span>5-12-2016</span>
                        </div>
                        <div className="icon-masonry-right">
                            <Link to="/blogpost"><i className="fa fa-share-alt icon-masonry" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="item mix masonry-cards cards-img">
                    <i className="fa fa-picture-o icon-blog" aria-hidden="true"></i>
                    <Link to="/blogpost" className="btn-section">business</Link>
                    <div className="masonry-cards-img">
                        <img src="img/blog_masonry_1.png" alt="blog-masonry"/>
                    </div>
                    <div className="wrapper-card-masonry">
                        <div className="text-card-masonry">
                            <h3 className="title">Blog Heading Here</h3>
                            <p className="text-section">Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                        </div>
                        <div className="icon-masonry-wrapper">
                            <div className="icon-masonry-left">
                                <i className="fa fa-clock-o icon-masonry" aria-hidden="true"></i>
                                <span>5-12-2016</span>
                            </div>
                            <div className="icon-masonry-right">
                                <Link to="/blogpost"><i className="fa fa-share-alt icon-masonry" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item mix masonry-cards">
                    <div className="icon-blog-masonry">
                        <i className="fa fa-quote-left icon-blog" aria-hidden="true"></i>
                        <Link to="/blogpost" className="btn-section">health</Link>
                    </div>
                    <div className="text-card-masonry">
                        <h3 className="title">Blog Heading Here</h3>
                        <p className="text-section">Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                    </div>
                    <div className="icon-masonry-wrapper">
                        <div className="icon-masonry-left">
                            <i className="fa fa-clock-o icon-masonry" aria-hidden="true"></i>
                            <span>5-12-2016</span>
                        </div>
                        <div className="icon-masonry-right">
                            <Link to="/blogpost"><i className="fa fa-share-alt icon-masonry" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="item mix masonry-cards cards-img masonry-img">
                    <i className="fa fa-picture-o icon-blog" aria-hidden="true"></i>
                    <Link to="/blogpost" className="btn-section">business</Link>
                    <div className="masonry-cards-img">
                        <img src="img/blog_masonry_2.png" alt="blog-masonry"/>
                        <div className="icon-masonry-wrapper">
                            <div className="icon-masonry-left">
                                <i className="fa fa-clock-o icon-masonry" aria-hidden="true"></i>
                                <span>5-12-2016</span>
                            </div>
                            <div className="icon-masonry-right">
                                <Link to="/blogpost"><i className="fa fa-share-alt icon-masonry" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item mix masonry-cards cards-masonry-color">
                    <div className="icon-blog-masonry">
                        <i className="fa fa-link icon-blog" aria-hidden="true"></i>
                        <Link to="/blogpost" className="btn-section">health</Link>
                    </div>
                    <div className="text-card-masonry">
                        <h3 className="title">Blog Heading Here</h3>
                        <p className="text-section">Industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                    </div>
                    <div className="icon-masonry-wrapper">
                        <div className="icon-masonry-left">
                            <i className="fa fa-clock-o icon-masonry" aria-hidden="true"></i>
                            <span>5-12-2016</span>
                        </div>
                        <div className="icon-masonry-right">
                            <Link to="/blogpost"><i className="fa fa-share-alt icon-masonry" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="item mix masonry-cards">
                    <div className="icon-blog-masonry">
                        <i className="fa fa-link icon-blog icon-large" aria-hidden="true"></i>
                        <Link to="/blogpost" className="btn-section">education</Link>
                    </div>
                    <div className="text-card-masonry">
                        <h3 className="title">Blog Heading Here</h3>
                        <p className="text-section">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                    </div>
                    <div className="icon-masonry-wrapper">
                        <div className="icon-masonry-left">
                            <i className="fa fa-clock-o icon-masonry" aria-hidden="true"></i>
                            <span>5-12-2016</span>
                        </div>
                        <div className="icon-masonry-right">
                            <Link to="/blogpost"><i className="fa fa-share-alt icon-masonry" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="item mix masonry-cards cards-img">
                    <i className="fa fa-youtube-play icon-blog" aria-hidden="true"></i>
                    <Link to="/blogpost" className="btn-section">business</Link>
                    <div className="masonry-cards-img">
                        <img src="img/blog_masonry_3.png" alt="blog-masonry"/>
                    </div>
                    <div className="wrapper-card-masonry">
                        <div className="text-card-masonry">
                            <h3 className="title">Blog Heading Here</h3>
                            <p className="text-section">Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                        </div>
                        <div className="icon-masonry-wrapper">
                            <div className="icon-masonry-left">
                                <i className="fa fa-clock-o icon-masonry" aria-hidden="true"></i>
                                <span>5-12-2016</span>
                            </div>
                            <div className="icon-masonry-right">
                                <Link to="/blogpost"><i className="fa fa-share-alt icon-masonry" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item mix masonry-cards cards-masonry-color">
                    <div className="icon-blog-masonry">
                        <i className="fa fa-link icon-blog" aria-hidden="true"></i>
                        <Link to="/blogpost" className="btn-section">health</Link>
                    </div>
                    <div className="text-card-masonry">
                        <h3 className="title">Blog Heading Here</h3>
                        <p className="text-section">Industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                    </div>
                    <div className="icon-masonry-wrapper">
                        <div className="icon-masonry-left">
                            <i className="fa fa-clock-o icon-masonry" aria-hidden="true"></i>
                            <span>5-12-2016</span>
                        </div>
                        <div className="icon-masonry-right">
                            <Link to="/blogpost"><i className="fa fa-share-alt icon-masonry" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="item mix masonry-cards cards-img">
                    <i className="fa fa-picture-o icon-blog icon-large-2" aria-hidden="true"></i>
                    <Link to="/blogpost"className="btn-section">technology</Link>
                    <div className="masonry-cards-img">
                        <img src="img/blog_masonry_4.png" alt="blog-masonry"/>
                    </div>
                    <div className="wrapper-card-masonry">
                        <div className="text-card-masonry">
                            <h3 className="title">Blog Heading Here</h3>
                            <p className="text-section">Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                        </div>
                        <div className="icon-masonry-wrapper">
                            <div className="icon-masonry-left">
                                <i className="fa fa-clock-o icon-masonry" aria-hidden="true"></i>
                                <span>5-12-2016</span>
                            </div>
                            <div className="icon-masonry-right">
                                <Link to="/blogpost"><i className="fa fa-share-alt icon-masonry" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardsBlog;