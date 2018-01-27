import React from 'react';

//Components
import Header from '../Header';
import Footer from '../Footer';
import PriceCard from '../Components/PriceCard';
import AccordionFAQ from '../Components/AccordionFAQ';


    const accordionData = [
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        }
    ];


    class Pricing extends React.Component {
        render() {
            return (
                <div>
                    <section className="wrapper-page">
                        <div className="container">
                            <Header/>
                            <div className="jumbotron jumbotron-fluid jumbotron-page">
                                <div className="container-jumbotron">
                                    <h3 className="lead">pricing</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="prising">
                        <div className="container">
                            <header className="header-section">
                                <h2 className="header-left">pricing plans</h2>
                            </header>
                            <PriceCard/>
                        </div>
                    </section>
                    <section className="questions">
                        <div className="container">
                            <header className="header-section">
                                <h2 className="header-left">frequently asked questions</h2>
                            </header>
                            <AccordionFAQ data={ accordionData }/>
                         </div>
                    </section>
                    <Footer/>
                </div>
            );
        }
    }

    export default Pricing;