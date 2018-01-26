import React from 'react';


//Components

import Header from '../Header';
import Footer from '../Footer';
import CardsBlog from '../Components/CardsBlog';
import PageNav from '../Components/PageNav';



class BlogPage extends React.Component {
    render() {
        return (
            <div>
                <section className="wrapper-page">
                    <div className="container">
                        <Header />
                        <div class="jumbotron jumbotron-fluid jumbotron-page">
                            <div class="container-jumbotron">
                                <h3 class="lead">blog</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-masonry">
                    <div className="container">
                        <header className="header-section">
                            <h2 className="header-left">blog page</h2>
                        </header>
                    <div className="masonry-container container-mix">
                        <CardsBlog/>
                    </div>
                    <PageNav />
                </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default BlogPage;