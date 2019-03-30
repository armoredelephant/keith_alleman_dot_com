import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AboutPage from './components/Sections/About.jsx';
import Footer from './components/Shared/Footer.jsx';
import HeaderO from './components/_organisms/00-header/HeaderO.jsx';
// import HeaderO from './components/_unused/HeaderO';
import Landing from './components/HomePage/Landing.jsx';
import ProjectsPage from './components/Sections/Projects.jsx';
import WorkPage from './components/Sections/Work.jsx';

import ScrollToTop from './components/_unused/ScrollToTop.jsx';

import './sass/base.scss'

class App extends React.Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <HeaderO />
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/about'component={AboutPage} />
                    <Route exact path='/projects' component={ProjectsPage} />
                    <Route exact path='/work' component={WorkPage} />
                    <Footer />
                </ScrollToTop>
            </Router>
        );
    }
}

export default App;
