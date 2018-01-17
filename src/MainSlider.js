import React from 'react';

const MainSlider = () => {
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