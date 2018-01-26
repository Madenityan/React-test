import React from 'react';

const SliderLogo = () => {
    const $ = window.$;
    componentDidMount: {
        $('.slider-logo').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    return (
        <div className="slider-logo">
            <div className="slide-logo">
                <img src="img/codecanyon.png" alt="logo-1"/>
            </div>
            <div className="slide-logo">
                <img src="img/video.png" alt="logo-2"/>
            </div>
            <div className="slide-logo">
                <img src="img/audio.png" alt="logo-3"/>
            </div>
            <div className="slide-logo">
                <img src="img/grap.png" alt="logo-4"/>
            </div>
            <div className="slide-logo">
                <img src="img/photo.png" alt="logo-5"/>
            </div>
            <div className="slide-logo">
                <img src="img/video.png" alt="logo-3"/>
            </div>
        </div>
    );
};

export default SliderLogo;