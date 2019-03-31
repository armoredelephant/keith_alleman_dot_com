import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Scroll Fix
import ScrollToTop from './components/_unused/ScrollToTop.jsx';

// Shared - Organisms
import HeaderO from './components/_organisms/00-header/HeaderO.jsx';
import FooterO from './components/_organisms/02-footer/FooterO.jsx';

// Routes - Organisms
import ProjectsPageO from './components/_organisms/01-routes/ProjectsPageO.jsx';
import LandingPageO from './components/_organisms/01-routes/LandingPageO.jsx'
import WorkPageO from './components/_organisms/01-routes/WorkPageO.jsx';
import AboutPageO from './components/_organisms/01-routes/AboutPageO.jsx';

import './sass/base.scss'

class App extends React.Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <HeaderO />
                        <Route exact path='/' component={LandingPageO} />
                        <Route exact path='/about'component={AboutPageO} />
                        <Route exact path='/projects' component={ProjectsPageO} />
                        <Route exact path='/work' component={WorkPageO} />
                    <FooterO />
                </ScrollToTop>
            </Router>
        );
    }
}

export default App;
