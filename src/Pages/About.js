import React from 'react';

//Components
import Header from '../Header';
import AboutUsInfo from '../Components/AboutUsInfo';
import Form from '../Components/Form';
import CardsAbout from '../Components/CardsAbout';
import  Quote from '../Components/Quote';
import Footer from '../Footer';


class About extends React.Component {
    render() {
        return (
            <div>
                <section className="wrapper-page">
                    <div className="container">
                        <Header/>
                        <div className="jumbotron jumbotron-fluid jumbotron-page">
                            <div className="container-jumbotron">
                                <h3 className="lead">About us</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-page">
                    <div className="container">
                        <AboutUsInfo />
                        <div className="sidebar">
                            <div className="video-about">
                                <img src="img/video-about-page.png" alt="video"/>
                            </div>
                            <div className="consultation-about">
                                <h3>free consultation</h3>
                                <Form />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cards-about">
                    <div className="container">
                        <CardsAbout />
                    </div>
                </section>
                <section className="testimonials">
                    <div className="container">
                        <header className="header-section">
                            <h2>Testimonials</h2>
                        </header>
                        <div className="img-testimonials">
                            <img src="img/image.png" alt="image"/>
                        </div>
                        <Quote />
                    </div>
                </section>
                <Footer />
            </div>

        );
    }
}

export default About;