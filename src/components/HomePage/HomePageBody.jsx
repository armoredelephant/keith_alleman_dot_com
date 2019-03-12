import React from 'react';

import AboutSection from '../Sections/About.jsx'
import ProjectsSection from '../Sections/Projects.jsx'
import WorkSection from '../Sections/Work.jsx'

const HomePageBody = () => {
    return(
        <React.Fragment>
            <main role="main">
                <AboutSection />
                <ProjectsSection />
                <WorkSection />
            </main>
        </React.Fragment>
    )
}

export default HomePageBody;