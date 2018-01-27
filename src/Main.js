import React from 'react';

import { Route } from 'react-router-dom';

//Components

import About from './Pages/About';
import Home from './Pages/Home';
import Careers from './Pages/Careers';
import Contact from './Pages/Contact';
import Industry from './Pages/Industry';
import Pricing from './Pages/Pricing';
import Blog from './Pages/Blog';
import BlogPost from './Pages/BlogPost';
import Testimonials from './Pages/Testimonials';


class Main extends React.Component {
    render() {

        return (
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/industry" component={Industry}/>
                    <Route path="/pricing" component={Pricing}/>
                    <Route path="/careers" component={Careers}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/blogpost" component={BlogPost}/>
                    <Route path="/testimonials" component={Testimonials}/>
                </div>
        );
    }
}

export default Main;



