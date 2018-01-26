import React from 'react';

const Quote= () => {
    return (
        <div className="quote">
            <blockquote className="excerption">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specibook. It has survived not only five centuries, but also the leap into electronic typesetting.</blockquote>
            <cite className="client-name">Client Name</cite>
            <span className="designation">Designation</span>
        </div>
    );
};

export default Quote;