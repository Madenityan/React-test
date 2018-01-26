import React from 'react';

import { Link } from 'react-router-dom';

const IconShare = () => {
    return (

        <div className="share">
            <Link to="/blog"><i className="fa fa-facebook icon-share" aria-hidden="true"></i></Link>
            <Link to="/blog"><i className="fa fa-twitter icon-share" aria-hidden="true"></i></Link>
            <Link to="/blog"><i className="fa fa-google-plus icon-share" aria-hidden="true"></i></Link>
            <Link to="/blog"><i className="fa fa-share-alt icon-share" aria-hidden="true"></i></Link>
        </div>
    );
};

export default IconShare;