import React from 'react';

//Components
import Header from '../Header';
import ArticleBlogPost from '../Components/ArticleBlogPost';
import IconShare from '../Components/IconShare';
import Footer from '../Footer';
import  RelatedPost from '../Components/RelatedPost';
import CommentsBlogPost from '../Components/CommentsBlogPost';
import FormBlog from '../Components/FormBlog';


class BlogPost extends React.Component {
    render() {
        return (
            <div>
                <section className="wrapper-page">
                    <div className="container">
                        <Header/>
                        <div class="jumbotron jumbotron-fluid jumbotron-page">
                            <div class="container-jumbotron">
                                <h3 class="lead">blog post</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-post">
                    <div className="container">
                        <header className="header-section">
                            <h2 className="header-left">blog post</h2>
                        </header>
                        <ArticleBlogPost />
                        <div className="clearfix">
                            <IconShare />
                        </div>
                        <RelatedPost />
                    </div>
                </section>
                <section className="comments-visitors">
                    <div className="comments">
                        <div className="wrapper-left-comments">
                            <header className="header-section">
                                <h2 className="header-left">Comments</h2>
                            </header>
                            <CommentsBlogPost />
                        </div>
                    </div>
                    <div className="form-comments">
                        <div className="wrapper-right-comments">
                        <header className="header-section">
                            <h2 className="header-left">leave message</h2>
                        </header>
                      <FormBlog />
                </div>
            </div>
            </section>
            <Footer />
        </div>

        );
    }
}

export default BlogPost;