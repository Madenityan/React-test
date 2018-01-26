import React from 'react';

const AccordionFAQ = () => {
    return (

        <div id="accordion" role="tablist">
            <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne" className="icon-state">
                            Lorem Ipsum is simply dummy text of the printing ?
                        </a>
                    </h5>
                </div>
                <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body text-section">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" role="tab" id="headingTwo">
                    <h5 className="mb-0">
                        <a className="collapsed icon-state" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">
                            Readable content of a page when looking at its layout ?
                        </a>
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body text-section">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" role="tab" id="headingThree">
                    <h5 className="mb-0">
                        <a className="collapsed icon-state" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">
                            Suspendisse mattis leo non neque bibendum semper ?
                        </a>
                    </h5>
                </div>
                <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body text-section">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" role="tab" id="headingFour">
                    <h5 className="mb-0">
                        <a className="collapsed icon-state" data-toggle="collapse" href="#collapseFour" role="button" aria-expanded="false" aria-controls="collapseFour">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
                        </a>
                    </h5>
                </div>
                <div id="collapseFour" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body text-section">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" role="tab" id="headingFive">
                    <h5 className="mb-0">
                        <a className="collapsed icon-state" data-toggle="collapse" href="#collapseFive" role="button" aria-expanded="false" aria-controls="collapseFive">
                            Mauris dictum purus ac dui efficitur, sed interdum ligula blandit ?
                        </a>
                    </h5>
                </div>
                <div id="collapseFive" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body text-section">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" role="tab" id="headingSix">
                    <h5 className="mb-0">
                        <a className="collapsed icon-state" data-toggle="collapse" href="#collapseSix" role="button" aria-expanded="false" aria-controls="collapseSix">
                            Phasellus eget erat aliquet, egestas odio eget, laoreet augue ?
                        </a>
                    </h5>
                </div>
                <div id="collapseSix" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body text-section">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" role="tab" id="headingSeven">
                    <h5 className="mb-0">
                        <a className="collapsed icon-state" data-toggle="collapse" href="#collapseSeven" role="button" aria-expanded="false" aria-controls="collapseSeven">
                            Cras pharetra velit eu pretium viverra ?
                        </a>
                    </h5>
                </div>
                <div id="collapseSeven" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body text-section">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionFAQ;