import React from 'react';

        const SliderTestimonials = () => {

            const $ = window.$;
            componentDidMount: {
                $('.slider-testimonials').slick({
                    dots: true,
                    infinite: false,
                    arrows: false,
                    fade: true,
                    adaptiveHeight: true,
                    autoplay: true,
                    autoplaySpeed: 1500
                });
            }

            return (

                <div className="slider-testimonials">
                    <div className="slide-testimonials">
                        <div className="img-slide-testimonials">
                            <img src="img/image-slide-testimon.png" alt="slide"/>
                        </div>
                        <div className="text-slide-testimonials">
                            <blockquote className="text-section">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</blockquote>
                            <cite className="client-name">Dr.Jonathan Peeter</cite>
                            <span className="designation">Designation</span>
                        </div>
                    </div>
                    <div className="slide-testimonials">
                        <div className="img-slide-testimonials">
                            <img src="img/image-slide-testimon.png" alt="slide"/>
                        </div>
                        <div className="text-slide-testimonials">
                            <blockquote className="text-section">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</blockquote>
                            <cite className="client-name">Dr.Jonathan Peeter</cite>
                            <span className="designation">Designation</span>
                        </div>
                    </div>
                    <div className="slide-testimonials">
                        <div className="img-slide-testimonials">
                            <img src="img/image-slide-testimon.png" alt="slide"/>
                        </div>
                        <div className="text-slide-testimonials">
                            <blockquote className="text-section">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</blockquote>
                            <cite className="client-name">Dr.Jonathan Peeter</cite>
                            <span className="designation">Designation</span>
                        </div>
                    </div>
                    <div className="slide-testimonials">
                        <div className="img-slide-testimonials">
                            <img src="img/image-slide-testimon.png" alt="slide"/>
                        </div>
                        <div className="text-slide-testimonials">
                            <blockquote className="text-section">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</blockquote>
                            <cite className="client-name">Dr.Jonathan Peeter</cite>
                            <span className="designation">Designation</span>
                        </div>
                    </div>
                </div>

            );
        };

        export default SliderTestimonials;