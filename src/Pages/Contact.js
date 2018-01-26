import React from 'react';

//Components
import Header from '../Header';
import Jumbotron from '../Components/Jumbotron';
import Footer from '../Footer';
import Location from '../Components/Location';
import FormContact from '../Components/FormContact';


class Contact extends React.Component {
    render() {
        return (
            <div>
                <section className="wrapper-page">
                    <div className="container">
                        <Header />
                        <div class="jumbotron jumbotron-fluid jumbotron-page">
                            <div class="container-jumbotron">
                                <h3 class="lead">concact us</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="location">
                    <div className="container">
                        <div className="information-contact">
                            <div className="connect">
                                <header className="header-section">
                                    <h2 className="header-left">connect us</h2>
                                </header>
                                <Location/>
                            </div>
                            <div className="map-responsive">
                            </div>
                        </div>
                    </div>
                </section>
                <section className="write-to-us">
                    <div className="container">
                        <header className="header-section">
                            <h2>write to us</h2>
                        </header>
                        <FormContact/>
                     </div>
                </section>
                <Footer/>
            </div>

        );
    }
}

export default  Contact ;