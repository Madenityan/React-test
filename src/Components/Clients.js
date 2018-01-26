import React from 'react';

const Clients = () => {
    return (
        <ul className="list-clients">
            <li>
                <div className="img-clients">
                    <img src="img/client-1.png" alt="client-1"/>
                </div>
                <div className="quote-clients">
                    <blockquote className="text-section">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    </blockquote>
                    <cite className="client-name">client name</cite>
                    <span className="designation">Designation</span>
                </div>
            </li>
            <li>
                <div className="img-clients">
                    <img src="img/client-2.png" alt="client-2"/>
                </div>
                <div className="quote-clients">
                    <blockquote className="text-section">
                        Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites obscure Latin words.
                    </blockquote>
                    <cite className="client-name">client name</cite>
                    <span className="designation">Designation</span>
                </div>
            </li>
            <li>
                <div className="img-clients">
                    <img src="img/client-3.png" alt="client-3"/>
                </div>
                <div className="quote-clients">
                    <blockquote className="text-section">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                    </blockquote>
                    <cite className="client-name">client name</cite>
                    <span className="designation">Designation</span>
                </div>
            </li>
            <li>
                <div className="img-clients">
                    <img src="img/client-4.png" alt="client-4"/>
                </div>
                <div className="quote-clients">
                    <blockquote className="text-section">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
                    </blockquote>
                    <cite className="client-name">client name</cite>
                    <span className="designation">Designation</span>
                </div>
            </li>
        </ul>
    );
};

export default Clients;