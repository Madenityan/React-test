import React from 'react';

import { Link } from 'react-router-dom';

    const $ = window.$;
    componentDidMount: {
        $('.slider-projects').slick({
            dots: true,
            infinite: false,
            arrows: false,
            fade: true,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 1500

        });
    }

    const SliderProjects = () => {
        return (
            <div className="slider-projects">
                <div className="slide-projects">
                    <div className="img-slide-projects">
                        <Link to="/industry" className="btn-transparent btn-section">real estate</Link>
                        <img src="img/slider-projects.png" alt="projects-1"/>
                    </div>
                    <div className="text-slide-projects">
                        <h3 className="title">Project Heading</h3>
                        <p className="text-section">Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. fact that a reader will be distracted by the readable of a page when.</p>
                    </div>
                </div>
                <div className="slide-projects">
                    <div className="img-slide-projects">
                        <Link to="/industry" className="btn-transparent btn-section">real estate</Link>
                        <img src="img/slider-projects.png" alt="projects-1"/>
                    </div>
                    <div className="text-slide-projects">
                        <h3 className="title">Project Heading</h3>
                        <p className="text-section">Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. fact that a reader will be distracted by the readable of a page when.</p>
                    </div>
                </div>
                <div className="slide-projects">
                    <div className="img-slide-projects">
                        <Link to="/industry" className="btn-transparent btn-section">real estate</Link>
                        <img src="img/slider-projects.png" alt="projects-1"/>
                    </div>
                    <div className="text-slide-projects">
                        <h3 className="title">Project Heading</h3>
                        <p className="text-section">Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. fact that a reader will be distracted by the readable of a page when.</p>
                    </div>
                </div>
            </div>
        );
    };

export default SliderProjects;