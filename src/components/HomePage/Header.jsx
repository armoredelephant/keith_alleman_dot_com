import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import FadeInSmallLogo from '../Header-Styled/FadeInSmallLogo';
import FadeInLargeLogo from '../Header-Styled/FadeInLargeLogo';
import FadeInNavList from '../Header-Styled/FadeInNavList';
import HeaderListItem from './HeaderListItem';


class HomePageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSandwich: false
        };
        
        this.handleScroll = this.handleScroll.bind(this);
        this.handleAnimation = this.handleAnimation.bind(this);
    }

    handleScroll() {
        this.setState({ scroll: window.scrollY });
    }

    handleAnimation() {
        const { activeSandwich } = this.state;
        this.setState(prevState => ({
            activeSandwich: !prevState.activeSandwich 
        }));
    }

    componentDidMount() {
        const el = document.querySelector('nav');
        this.setState({
            top: el.offsetTop,
            height: el.offsetHeight,
        });
        window.addEventListener('scroll', this.handleScroll)
    }

    componentDidUpdate() {
        this.state.scroll > this.state.top ?
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }

    render() {
        const windowHashLowerCase = window.location.hash.toLowerCase();
        console.log(this.state.activeSandwich)
        return (
            <nav className={this.state.scroll > this.state.top ? 'fixed-nav' : ''}>
                <div className="left-header-wrapper">
                    <FadeInSmallLogo>KA</FadeInSmallLogo>
                    <FadeInLargeLogo>Keith Alleman</FadeInLargeLogo>
                </div>
                <div className='center-header-wrapper'>
                    <FadeInNavList>
                        <HeaderListItem name="About" />
                        <HeaderListItem name="Projects" />
                        <HeaderListItem name="Work" />
                    </FadeInNavList>
                </div>
                {/** onClick that sets state to active */}
                <a onClick={this.handleAnimation} className={this.state.activeSandwich ? "nav-bar-active" : "nav-bar-animation"}>
                    <div className="bar-one"></div>
                    <div className="bar-two"></div>
                    <div id="bar-three" className="bar-three"></div>
                </a>
            </nav>
        )
    }
}

export default HomePageHeader;