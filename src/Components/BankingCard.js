import React from 'react';

import { Link } from 'react-router-dom';

const BankingCard = () => {
    return (
        <div>
            <div className="banking-card">
                <Link to="/pricing" className="btn-transparent btn-section">banking</Link>
                <img src="img/banking.png" alt="img-banking"/>
                <div className="comment-card">
                    <h3>Project Heading</h3>
                    <p>Popularised in the 1960s with the releaseLetraset sheets containing Lorem.</p>
                </div>
            </div>
        </div>
    );
};

export default BankingCard;