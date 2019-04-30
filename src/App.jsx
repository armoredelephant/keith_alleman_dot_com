import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Shared - Organisms
import HeaderO from '@O/00-header/HeaderO';
import FooterO from '@O/02-footer/FooterO';

// Routes - Organisms
import ProjectsPageO from '@O/01-routes/ProjectsPageO';
import AboutPageO from '@O/01-routes/AboutPageO';
import ScrollToTop from './components/_scrollfix/ScrollToTop';

import './sass/base.scss';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <HeaderO />
        <AboutPageO />
        <ProjectsPageO />
        {/* <WorkPageO /> */}
        {/* <Route exact path="/" component={LandingPageO} />
        <Route exact path="/about" component={AboutPageO} />
        <Route exact path="/projects" component={ProjectsPageO} />
        <Route exact path="/work" component={WorkPageO} /> */}
        <FooterO />
      </ScrollToTop>
    </Router>
  );
};

export default App;
