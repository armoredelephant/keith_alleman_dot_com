import React from 'react';

// NavContainer - Organism
import StyledNav from '../Header-Styled/StyledNav';
import StyledNavWrapper from '../Header-Styled/StyledNavWrapper';

// HeaderNavListContainer - Molecule
import HeaderNavListContainerM from '../_molecules/00-list_container/HeaderNavListContainerM';
import HeaderListItemA from '../_atoms/01-list_items/HeaderListItemA';

// HeaderLogoContainer - Molecule
import HeaderLogoContainerM from '../_molecules/02-logo_container/HeaderLogoContainerM';
import HeaderSmLogoA from '../_atoms/02-logos/HeaderSmLogoA'
import HeaderLgLogoA from '../_atoms/02-logos/HeaderLgLogoA';

// NavSandwich - Molecule
import HeaderNavSandwichM from '../_molecules/03-nav_sandwich/HeaderNavSandwichM';

// Modal - Molecule
import ModalContainerM from '../_molecules/01-modal_container/ModalContainerM';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeModal: false,
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
            activeModal: !prevState.activeModal
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

    // function /w switch statement that checks scroll and state to determine class name for  StyledNav. This will allow removal of StyledNavWrapper.

    render() {
        return (
            <StyledNav className={this.state.scroll > this.state.top && this.state.activeModal ? 
                    'fixed-nav active' 
                : this.state.scroll > this.state.top ? 
                    'fixed-nav'
                : this.state.activeModal ?  
                    'active'
                : '' }>
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
            </StyledNav>
        )
    }
}

export default Header;