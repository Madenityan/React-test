import React from 'react';

class Vacancy extends React.Component {
    constructor() {
        super();

        this.state = {
            isOpended: false
        }
    }

    toggleClick = () => {
        this.setState({
            isOpended: !this.state.isOpended
        });
    };
    render() {
        console.log (this.state.isOpended);

        let DropdownForm;
        if (this.state.isOpended) {
            DropdownForm = (
                <div className="slide-toggle">
                    <form className="contact-form form-write form-jobs" name="contact" method="post" action="#">
                        <div className="input-wrapper">
                            <div className="wrapper-left">
                                <input type="text" name="fname" placeholder="first name" />
                                <input type="text" name="phone" placeholder="phone number" />
                                <input type="hidden" name="vacancy" />
                            </div>
                            <div className="wrapper-center">
                                <input type="text" name="lname" placeholder="last name" />
                                <input type="text" name="location" placeholder="location (city)" />
                                <input type="hidden" name="city" />
                            </div>
                            <div className="wrapper-right">
                                <input type="email" name="email" placeholder="email" />
                                <input type="text" name="resume" placeholder="resume/cv attach, dropbox" />
                            </div>
                        </div>
                        <textarea className="textarea-message" name="text" placeholder="Write your self / copy paste your Resume"></textarea>
                        <div className="btn-career">
                            <button type="submit" className="btn-section">submit application</button>
                        </div>
                    </form>
                </div>
            )
        }

        return (
        <ul className="list-jobs">
            <li>
                <div className="title-jobs">
                    <div className="vacancy">
                        <h3 className="bold-text">accountant manager</h3>
                        <span className="text-section">full time</span>
                    </div>
                    <div className="location-job">
                        <i className="fa fa-map-marker icon-location fa-2x" aria-hidden="true"></i>
                        <p className="text-section"><span className="bold-text">Location</span> : San francisco</p>
                    </div>
                    <div className="btn-job">
                        <a onClick={this.toggleClick} href="#" className="btn-section button-apply">apply now</a>
                    </div>
                </div>
                {DropdownForm}
            </li>
            <li>
                <div className="title-jobs">
                    <div className="vacancy">
                        <h3 className="bold-text">Computer & information systam manager</h3>
                        <span className="text-section">full time</span>
                    </div>
                    <div className="location-job">
                        <i className="fa fa-map-marker icon-location fa-2x" aria-hidden="true"></i>
                        <p className="text-section"><span className="bold-text">Location</span> : San francisco</p>
                    </div>
                    <div className="btn-job">
                        <a href="#" className="btn-section button-apply">apply now</a>
                    </div>
                </div>
                <div className="slide-toggle">
                    <form className="contact-form form-write form-jobs" name="contact" method="post" action="#" >
                        <div className="input-wrapper">
                            <div className="wrapper-left">
                                <input type="text" name="fname" placeholder="first name" />
                                <input type="text" name="phone" placeholder="phone number" />
                                <input type="hidden" name="vacancy" />
                            </div>
                            <div className="wrapper-center">
                                <input type="text" name="lname" placeholder="last name" />
                                <input type="text" name="location" placeholder="location (city)" />
                                <input type="hidden" name="city" />
                            </div>
                            <div className="wrapper-right">
                                <input type="email" name="email" placeholder="email" />
                                <input type="text" name="resume" placeholder="resume/cv attach, dropbox" />
                            </div>
                        </div>
                        <textarea className="textarea-message" name="text" placeholder="Write your self / copy paste your Resume"></textarea>
                        <div className="btn-career">
                            <button type="submit" className="btn-section">submit application</button>
                        </div>
                    </form>
                </div>
            </li>
            <li>
                <div className="title-jobs">
                    <div className="vacancy">
                        <h3 className="bold-text">sales executive</h3>
                        <span className="text-section">full time</span>
                    </div>
                    <div className="location-job">
                        <i className="fa fa-map-marker icon-location fa-2x" aria-hidden="true"></i>
                        <p className="text-section"><span className="bold-text">Location</span> : San francisco</p>
                    </div>
                    <div className="btn-job">
                        <a href="#" className="btn-section button-apply">apply now</a>
                    </div>
                </div>
                <div className="slide-toggle">
                    <form className="contact-form form-write form-jobs" name="contact" method="post" action="#" >
                        <div className="input-wrapper">
                            <div className="wrapper-left">
                                <input type="text" name="fname" placeholder="first name" />
                                <input type="text" name="phone" placeholder="phone number" />
                                <input type="hidden" name="vacancy" />
                            </div>
                            <div className="wrapper-center">
                                <input type="text" name="lname" placeholder="last name" />
                                <input type="text" name="location" placeholder="location (city)" />
                                <input type="hidden" name="city" />
                            </div>
                            <div className="wrapper-right">
                                <input type="email" name="email" placeholder="email" />
                                <input type="text" name="resume" placeholder="resume/cv attach, dropbox" />
                            </div>
                        </div>
                        <textarea className="textarea-message" name="text" placeholder="Write your self / copy paste your Resume"></textarea>
                        <div className="btn-career">
                            <button type="submit" className="btn-section">submit application</button>
                        </div>
                    </form>
                </div>
            </li>
            <li>
                <div className="title-jobs">
                    <div className="vacancy">
                        <h3 className="bold-text">education consultants</h3>
                        <span className="text-section">full time</span>
                    </div>
                    <div className="location-job">
                        <i className="fa fa-map-marker icon-location fa-2x" aria-hidden="true"></i>
                        <p className="text-section"><span className="bold-text">Location</span> : San francisco</p>
                    </div>
                    <div className="btn-job">
                        <a href="#" className="btn-section button-apply">apply now</a>
                    </div>
                </div>
                <div className="slide-toggle">
                    <form className="contact-form form-write form-jobs" name="contact" method="post" action="#" >
                        <div className="input-wrapper">
                            <div className="wrapper-left">
                                <input type="text" name="fname" placeholder="first name" />
                                <input type="text" name="phone" placeholder="phone number" />
                                <input type="hidden" name="vacancy" />
                            </div>
                            <div className="wrapper-center">
                                <input type="text" name="lname" placeholder="last name" />
                                <input type="text" name="location" placeholder="location (city)" />
                                <input type="hidden" name="city" />
                            </div>
                            <div className="wrapper-right">
                                <input type="email" name="email" placeholder="email" />
                                <input type="text" name="resume" placeholder="resume/cv attach, dropbox" />
                            </div>
                        </div>
                        <textarea className="textarea-message" name="text" placeholder="Write your self / copy paste your Resume"></textarea>
                        <div className="btn-career">
                            <button type="submit" className="btn-section">submit application</button>
                        </div>
                    </form>
                </div>
            </li>
        </ul>

        );
    }
}


export default Vacancy;