import React from "react";

import { Link } from 'react-router-dom';


//Components
import Header from '../Header';
import Footer from '../Footer';
import Clients from '../Components/Clients';
import SliderTestimonials from '../Components/SliderTestimonials';
import BankingCard from '../Components/BankingCard';
import SliderProjects from '../Components/SliderProjects';



class Testimonials extends React.Component {
    render() {
        return (
            <div>
                <section className="wrapper-page">
                    <div className="container">
                        <Header/>
                        <div className="jumbotron jumbotron-fluid jumbotron-page">
                            <div className="container-jumbotron">
                                <h3 className="lead">testimonials</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="clients">
                    <div className="container">
                        <header className="header-section">
                            <h2 className="header-left">happy clients</h2>
                        </header>
                        <Clients/>
                     </div>
                </section>
                <section className="slider-quote">
                    <SliderTestimonials/>
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
                            <Link to="/industry"> className="btn-section">full project</Link>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Testimonials;