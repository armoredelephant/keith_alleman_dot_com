import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './components/HomePage';

import './sass/base.scss'

class App extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route exact path='/' component={HomePage} />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
