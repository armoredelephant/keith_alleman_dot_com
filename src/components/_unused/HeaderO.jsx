import React from 'react';
import { ThemeProvider } from 'styled-components';

// HeaderContainer - Organism
import HeaderContainerM from '../_molecules/00-header/04-header_container/HeaderContainerM.jsx';

// HeaderNavListContainer - Molecule
import HeaderNavListContainerM from '../_molecules/00-header/00-list_container/HeaderNavListContainerM.jsx';
import HeaderListItemA from '../_atoms/01-list_items/HeaderListItemA.jsx';

// HeaderLogoContainer - Molecule
import HeaderLogoContainerM from '../_molecules/00-header/02-logo_container/HeaderLogoContainerM.jsx';
import HeaderSmLogoA from '../_atoms/02-logos/HeaderSmLogoA.jsx'
import HeaderLgLogoA from '../_atoms/02-logos/HeaderLgLogoA.jsx';

// NavSandwich - Molecule
import HeaderNavSandwichM from '../_molecules/00-header/03-nav_sandwich/HeaderNavSandwichM.jsx';

// Modal - Molecule
import ModalContainerM from '../_molecules/01-modal/01-modal_container/ModalContainerM.jsx';

const theme = {
    bg: '#594F4F',
    primarycolor: '#FFF',
    secondarycolor: '#95d5d2',
    boxshadow: '0 1px 1px 0 rgba(0, 0, 0, .1)'
}


class HeaderO extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeModal: false,
            activeSandwich: false
        };
        
        this.handleScroll = this.handleScroll.bind(this);
        this.handleAnimation = this.handleAnimation.bind(this);
        this.classSwitch = this.classSwitch.bind(this);
    }

    handleScroll() {
        this.setState({ scroll: window.scrollY });
    }

    handleAnimation() {
        this.setState(prevState => ({
            activeSandwich: !prevState.activeSandwich,
            activeModal: !prevState.activeModal
        }));
    }

    componentDidMount() {
        const el = document.querySelector('header');

        this.setState({
            top: el.offsetTop,
            height: el.offsetHeight
        });

        window.addEventListener('scroll', this.handleScroll)
    }

    componentDidUpdate() {
        this.state.scroll > this.state.top ?
            document.body.style.paddingTop = `${ this.state.height }px` :
            document.body.style.paddingTop = 0;
    }

    classSwitch() {
        const { scroll, top, activeModal } = this.state;
        
        const isFixed = () => {
            return scroll > top ? 'fixed-nav' : '';
        }

        const isActive = () => {
            return activeModal ? 'active' : '';
        }

        return `${ isFixed() } ${ isActive() }`
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <HeaderContainerM className={this.classSwitch()}>
                    {/** left-side logos */}
                    <HeaderLogoContainerM>
                        <HeaderSmLogoA to='/'>KA</HeaderSmLogoA>
                        <HeaderLgLogoA to='/'>Keith Alleman</HeaderLgLogoA>
                    </HeaderLogoContainerM>
                    {/** middle nav */}
                    <HeaderNavListContainerM>
                        <HeaderListItemA name="About" />
                        <HeaderListItemA name="Projects" />
                        <HeaderListItemA name="Work" last/>
                    </HeaderNavListContainerM>
                    {/** nav sandwich button */}
                    <HeaderNavSandwichM 
                        handleAnimation={this.handleAnimation}
                        activeSandwich={this.state.activeSandwich} />
                    <ModalContainerM handleModal={this.handleAnimation} />
                </HeaderContainerM>
            </ThemeProvider>
        )
    }
}

export default HeaderO;