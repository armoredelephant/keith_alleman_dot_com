import React from 'react';

import HomePageFooter from './HomePage/Footer';
import HomePageHeader from './HomePage/Header';
import HomePageBody from './HomePage/HomePageBody';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            placeHolder: null
        }
    }

    componentDidMount() {
        this.setState({
            placeHolder: true
        })
    }

    render() {
        if (!this.state.placeHolder) {
            return null
        }

        return (
            <React.Fragment>
                <HomePageHeader />
                <HomePageBody />
                <HomePageFooter />
            </React.Fragment>
            
        )
    }
}

export default HomePage

