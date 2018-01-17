import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Jumbotron from './Jumbotron';
import MainSlider from './MainSlider';
import SliderLogo from './SliderLogo';
import FeaturesCard from './FeaturesCard';
import SliderProjects from './SliderProjects';
import ServicesCard from './ServicesCard';
import Blog from './Blog';
import ContactCard from './ContactCard';
import BankingCard from './BankingCard';
import Quote from './Quote';


class App extends React.Component {
    render() {
        return (
            <div>
                <section className="wrapper-section">
                    <div className="container">
                        <Header/>
                        <Jumbotron />
                        <MainSlider />
                    </div>
                </section>
                <section className="about">
                    <div className="container">
                        <header className="header-section">
                            <h2>About us</h2>
                        </header>
                        <div className="info">
                            <p className="text-section">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                        </div>
                        <div className="wrapper-btn">
                            <a href="about-page.html" className="btn-section">read more</a>
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
                            <a href="#" className="btn-section">Boost your business</a>
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
                            <a href="#" className="btn-section">full project</a>
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
                            <a href="#" className="btn-section">full services</a>
                        </div>
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
                <section className="blog">
                    <div className="container">
                        <header className="header-section">
                            <h2>Our blog</h2>
                        </header>
                        <Blog />
                        <div className="btn-blog">
                            <a href="#" className="btn-section">full blog</a>
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

export default App;