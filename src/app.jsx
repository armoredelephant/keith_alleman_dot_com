import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AboutPage from './components/Sections/About';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header'
import Landing from './components/HomePage/Landing';
import ProjectsPage from './components/Sections/Projects';
import WorkPage from './components/Sections/Work';

import './sass/base.scss'

class App extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header />
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/about'component={AboutPage} />
                    <Route exact path='/projects' component={ProjectsPage} />
                    <Route exact path='/work' component={WorkPage} />
                    <Footer />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
