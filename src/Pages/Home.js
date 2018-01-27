import React from 'react';

import { Link } from 'react-router-dom';


//Components
import Footer from '../Footer';
import Header from '../Header';
import Jumbotron from '../Components/Jumbotron';
import MainSlider from '../Components/MainSlider';
import SliderLogo from '../Components/SliderLogo';
import FeaturesCard from '../Components/FeaturesCard';
import SliderProjects from '../Components/SliderProjects';
import ServicesCard from '../Components/ServicesCard';
import Blog from '../Components/Blog';
import ContactCard from '../Components/ContactCard';
import BankingCard from '../Components/BankingCard';
import Quote from '../Components/Quote';


class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="App"><section className="wrapper-section">
                    <div className="container">
                        <Header/>
                        <Jumbotron />
                        <MainSlider />
                    </div>
                </section></div>
                <section className="about">
                    <div className="container">
                        <header className="header-section">
                            <h2>About us</h2>
                        </header>
                        <div className="info">
                            <p className="text-section">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                        </div>
                        <div className="wrapper-btn">
                            <Link to="/about" className="btn-section">read more</Link>
                        </div>
                        <SliderLogo />
                    </div>
                </section>
                <section className="features">
                    <div className="container">
                        <header className="header-section">
                            <h2>Our features</h2>
                        </header>
                        <FeaturesCard />
                        <div className="boost-business">
                            <p>If you want to boost your business Contact us</p>
                            <Link to="/industry" className="btn-section">Boost your business</Link>
                        </div>
                    </div>
                </section>
                <section className="projects">
                    <div className="container">
                        <header className="header-section">
                            <h2>Projects</h2>
                        </header>
                        <div className="wrapper-projects">
                            <BankingCard />
                            <SliderProjects />
                        </div>
                        <div className="btn-projects">
                            <Link to="/pricing" className="btn-section">full project</Link>
                        </div>
                    </div>
                </section>
                <section className="services">
                    <div className="container">
                        <header className="header-section">
                            <h2>Services</h2>
                        </header>
                        <ServicesCard />
                        <div className="btn-services">
                            <Link to="/pricing" className="btn-section">full services</Link>
                        </div>
                    </div>
                </section>
                <section className="testimonials">
                    <div className="container">
                        <header className="header-section">
                            <h2>Testimonials</h2>
                        </header>
                        <div className="img-testimonials">
                            <img src="img/image.png" alt="testimonials"/>
                        </div>
                        <Quote />
                    </div>
                </section>
                <section className="blog">
                    <div className="container">
                        <header className="header-section">
                            <h2>Our blog</h2>
                        </header>
                        <Blog/>
                        <div className="btn-blog">
                            <Link to="/blog" className="btn-section">full blog</Link>
                        </div>
                    </div>
                </section>
                <section className="contact">
                    <div className="container">
                        <header className="header-section">
                            <h2>Quick contact</h2>
                        </header>
                        <ContactCard />
                    </div>
                </section>
                <Footer />
            </div>

        );
    }
}

export default Home;