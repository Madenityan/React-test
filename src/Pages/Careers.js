import React from 'react';

//Components
import Header from '../Header';
import Footer from '../Footer';
import Vacancy from '../Components/Vacancy';
import Quote from '../Components/Quote';


class Careers extends React.Component {
    render() {
        return (
            <div>
                <section className="wrapper-page">
                    <div className="container">
                        <Header/>
                        <div className="jumbotron jumbotron-fluid jumbotron-page">
                            <div className="container-jumbotron">
                                <h3 className="lead">careers</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="jobs">
                    <div className="container">
                        <header className="header-section">
                            <h2 className="header-left">new jobs</h2>
                        </header>
                        <Vacancy/>
                    </div>
                </section>
                <section className="testimonials">
                    <div className="container">
                        <header className="header-section">
                            <h2>Testimonials</h2>
                        </header>
                        <div className="img-testimonials">
                            <img src="img/image.png" alt="careers"/>
                        </div>
                       <Quote />
                    </div>
                </section>
                <Footer />
            </div>

        );
    }
}

export default Careers;
    
    
    







          