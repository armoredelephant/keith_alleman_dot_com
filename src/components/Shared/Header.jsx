import React from 'react';

import FadeInSmallLogo from '../Header-Styled/FadeInSmallLogo'
import FadeInLargeLogo from '../Header-Styled/FadeInLargeLogo';
import FadeInNavList from '../Header-Styled/FadeInNavList';
import HeaderListItem from '../HomePage/HeaderChildren/HeaderListItem';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSandwich: false,
            showModal: false
        };
        
        this.handleScroll = this.handleScroll.bind(this);
        this.handleAnimation = this.handleAnimation.bind(this);
    }

    handleScroll() {
        this.setState({ scroll: window.scrollY });
    }

    handleAnimation() {
        this.setState(prevState => ({
            activeSandwich: !prevState.activeSandwich,
            showModal: !prevState.showModal
        }));
    }

    componentDidMount() {
        const el = document.querySelector('nav');

        this.setState({
            top: el.offsetTop,
            height: el.offsetHeight
        });

        window.addEventListener('scroll', this.handleScroll)
    }

    componentDidUpdate() {
        this.state.scroll > this.state.top ?
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }

    render() {
        return (
            <nav className={this.state.scroll > this.state.top ? 'fixed-nav' : ''}>
                {/** left-side logos */}
                <div className="left-header-wrapper">
                    <FadeInSmallLogo to='/'>KA</FadeInSmallLogo>
                    <FadeInLargeLogo to='/'>Keith Alleman</FadeInLargeLogo>
                </div>
                {/** middle nav */}
                <div className='center-header-wrapper'>
                    <FadeInNavList>
                        <HeaderListItem name="About" />
                        <HeaderListItem name="Projects" />
                        <HeaderListItem name="Work" />
                    </FadeInNavList>
                </div>
                {/** nav sandwich button */}
                <a onClick={this.handleAnimation} className={this.state.activeSandwich ? "nav-bar-active" : "nav-bar-animation"}>
                    <div className="bar-one"></div>
                    <div className="bar-two"></div>
                    <div id="bar-three" className="bar-three"></div>
                </a>
            </nav>
        )
    }
}

export default Header;