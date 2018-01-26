import React from 'react';

import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

//Components

import About from './Pages/About';
import Home from './Pages/Home';
import Careers from './Pages/Careers';
import Contact from './Pages/Contact';
import Industry from './Pages/Industry';
import Pricing from './Pages/Pricing';


class Main extends React.Component {
    render() {

        const BrowserHistory = createBrowserHistory();

        return (
            <Router history={BrowserHistory}>
                <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/industry" component={Industry}/>
                <Route path="/pricing" component={Pricing}/>
                <Route path="/careers" component={Careers}/>
                <Route path="/contact" component={Contact}/>
                </div>
            </Router>
        );
    }
}

export default Main;



