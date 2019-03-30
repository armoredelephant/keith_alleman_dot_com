import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// HeaderContainer - Organism
import HeaderContainerM from '../../_molecules/00-header/04-header_container/HeaderContainerM.jsx';

// HeaderNavListContainer - Molecule
import HeaderNavListContainerM from '../../_molecules/00-header/00-list_container/HeaderNavListContainerM.jsx';
import HeaderListItemA from '../../_atoms/01-list_items/HeaderListItemA.jsx';

// HeaderLogoContainer - Molecule
import HeaderLogoContainerM from '../../_molecules/00-header/02-logo_container/HeaderLogoContainerM.jsx';
import HeaderSmLogoA from '../../_atoms/02-logos/HeaderSmLogoA.jsx'
import HeaderLgLogoA from '../../_atoms/02-logos/HeaderLgLogoA.jsx';

// NavSandwich - Molecule
import HeaderNavSandwichM from '../../_molecules/00-header/03-nav_sandwich/HeaderNavSandwichM.jsx';

// Modal - Molecule
import ModalContainerM from '../../_molecules/01-modal/01-modal_container/ModalContainerM.jsx';

const theme = {
    bg: '#594F4F',
    primarycolor: '#FFF',
    secondarycolor: '#95d5d2',
    boxshadow: '0 1px 1px 0 rgba(0, 0, 0, .1)'
}

const HeaderO = () => {
    const [activeModal, setActiveModal] = useState(false),
        [activeSandwich, setActiveSandwich] = useState(false),
        [scroll, setScroll] = useState(),
        [top, setTop] = useState(),
        [height, setHeight] = useState();
        

    const handleScroll = () => {
        setScroll(window.scrollY);
    }
    
    const handleAnimation = () => {
        setActiveModal(!activeModal);
        setActiveSandwich(!activeSandwich);
    }

    const classSwitch = () => {
        const isFixed = () => {
            return scroll > top ? 'fixed-nav' : '';
        }

        const isActive = () => {
            return activeModal ? 'active' : '';
        }

        return `${ isFixed() } ${ isActive() }`;
    }

    useEffect(() => {
        const el = document.querySelector('header');

        setTop(el.offsetTop);
        setHeight(el.offsetHeight);

        window.addEventListener('scroll', handleScroll);

        scroll > top ? 
            document.body.style.paddingTop = `${ height }px` :
            document.body.style.paddingTop = 0;
    });

    return (
        <ThemeProvider theme={theme}>
            <HeaderContainerM className={classSwitch()}>
                {/** left-side logos */}
                <HeaderLogoContainerM>
                    <HeaderSmLogoA to='/'>KA</HeaderSmLogoA>
                    <HeaderLgLogoA to='/'>Keith Alleman</HeaderLgLogoA>
                </HeaderLogoContainerM>
                {/** middle nav */}
                <HeaderNavListContainerM>
                    <HeaderListItemA name='About' />
                    <HeaderListItemA name='Projects' />
                    <HeaderListItemA name='Work' last />
                </HeaderNavListContainerM>
                {/** nav sandwich button */}
                <HeaderNavSandwichM 
                    handleAnimation={handleAnimation}
                    activeSandwich={activeSandwich} />
                <ModalContainerM handleModal={handleAnimation} />
            </HeaderContainerM>
        </ThemeProvider>
    );
}

export default HeaderO;