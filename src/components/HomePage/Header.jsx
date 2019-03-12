import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

class HomePageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({ scroll: window.scrollY });
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

        return (
            <nav className={this.state.scroll > this.state.top ? 'fixed-nav' : ''}>
                <div className="left-header-wrapper">
                    <div className='header-logo'>KA</div>
                    <div className="header-external-links">
                        <Link to="https://github.com/armoredelephant" className="external-link">
                            <i className="fab fa-github-square"></i>
                        </Link>
                        <Link to="https://www.linkedin.com/in/keith-alleman-b9b14487" className="external-link">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
                <div className='nav-wrapper'>
                    <ul className='nav-list'>
                        <li>
                            <Link smooth to="/#about" className={windowHashLowerCase.includes('#about') ? 
                                'section-link-active' : 'section-link'}>
                                About
                            </Link>
                            <span>&#x2022;</span>
                        </li>
                        <li>
                            <Link smooth to="/#projects" className={windowHashLowerCase.includes('#projects') ? 
                                'section-link-active' : 'section-link'} >
                                Projects
                            </Link>
                            <span>&#x2022;</span>
                        </li>
                        <li>
                            <Link smooth to="/#work" className={windowHashLowerCase.includes('#work') ? 
                                'section-link-active' : 'section-link'} >
                                Work
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default HomePageHeader;