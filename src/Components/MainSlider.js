import React from 'react';

const MainSlider = () => {

    const $ = window.$;
    componentDidMount: {
        $('.slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 1000,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true

                    }
                }
            ]
        });
    }

    return (
        <div className="slider">
            <div className="slide">
                <div className="img-slide">
                    <img src="img/book.png" alt="education"/>
                    <p className="text-slider">education</p>
                </div>
            </div>
            <div className="slide">
                <div className="img-slide">
                    <img src="img/bussines.png" alt="bussines"/>
                    <p className="text-slider">bussines</p>
                </div>
            </div>
            <div className="slide">
                <div className="img-slide">
                    <img src="img/technology.png" alt="technology"/>
                    <p className="text-slider">technology</p>
                </div>
            </div>
            <div className="slide">
                <div className="img-slide">
                    <img src="img/bank.png" alt="banking"/>
                    <p className="text-slider">banking</p>
                </div>
            </div>
            <div className="slide">
                <div className="img-slide">
                    <img src="img/technology.png" alt="technology"/>
                    <p className="text-slider">technology</p>
                </div>
            </div>
        </div>
    );
};


export default MainSlider;