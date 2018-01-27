import React from 'react';

//Components
import Header from '../Header';
import Footer from '../Footer';
import CardsIndustary from '../Components/CardsIndustary';
import Quote from '../Components/Quote';



class Industry extends React.Component {
    render() {
        return (
            <div>
                <section className="wrapper-page">
                    <div className="container">
                       <Header/>
                        <div className="jumbotron jumbotron-fluid jumbotron-page">
                            <div className="container-jumbotron">
                                <h3 className="lead">industary</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="industry-page">
                    <div className="container">
                        <header className="header-section">
                            <h2 className="header-left">choose your industry</h2>
                        </header>
                        <CardsIndustary/>
                    </div>
                </section>
                <section className="testimonials">
                    <div className="container">
                        <header className="header-section">
                            <h2>Testimonials</h2>
                        </header>
                        <div className="img-testimonials">
                            <img src="img/image.png" alt="people"/>
                        </div>
                        <Quote />
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default Industry ;