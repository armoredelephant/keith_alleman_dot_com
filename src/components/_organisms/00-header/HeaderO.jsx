import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// HeaderContainer - Molecule
import HeaderContainerM from '@M/00-header/HeaderContainerM';

// HeaderNavListContainer - Molecule
import HeaderNavListContainerM from '@M/00-header/HeaderNavListContainerM';
import HeaderListItemA from '@A/01-list_items/HeaderListItemA';

// HeaderLogoContainer - Molecule
import HeaderLogoContainerM from '@M/00-header/HeaderLogoContainerM';
import HeaderLgLogoA from '@A/02-logos/HeaderLgLogoA';
import HeaderSmLogoA from '@A/02-logos/HeaderSmLogoA';

// NavSandwich - Molecule
import HeaderNavSandwichM from '@M/00-header/HeaderNavSandwichM';

// Modal - Molecule
import ModalContainerM from '@M/01-modal/ModalContainerM';

const theme = {
  bg: '#252627',
  primarycolor: '#eaeaea',
  secondarycolor: '#95d5d2',
  boxshadow: '0 1px 1px 0 rgba(0, 0, 0, .1)',
  clr: '#252627',
  fs: '20px',
  iconsize: '18px',
  ml: '15px',
  mt: '45px',
  ff: 'Montserrat, sans-serif',
  linkfs: '50px',
  fw: '500',
  linkflow: 'column'
};

const HeaderO = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [activeSandwich, setActiveSandwich] = useState(false);
  const [scroll, setScroll] = useState(0);
  const links = ['About', 'Projects'];

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleAnimation = () => {
    setActiveModal(!activeModal);
    setActiveSandwich(!activeSandwich);
  };

  const classSwitch = () => {
    const isFixed = () => {
      return scroll ? 'fixed-nav' : '';
    };

    const isActive = () => {
      return activeModal ? 'active' : '';
    };

    return `${isFixed()} ${isActive()}`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <ThemeProvider theme={theme}>
      <HeaderContainerM className={classSwitch()}>
        {/** left-side logos */}
        <HeaderLogoContainerM>
          <HeaderSmLogoA smooth to="/#about">
            KA
          </HeaderSmLogoA>
          <HeaderLgLogoA smooth to="/#about">
            Keith Alleman
          </HeaderLgLogoA>
        </HeaderLogoContainerM>
        {/** middle nav */}
        <HeaderNavListContainerM>
          {links.map((link, index) => {
            const count = index + 1;
            return (
              <HeaderListItemA
                key={count}
                name={link}
                last={index === links.length - 1 && true}
              />
            );
          })}
        </HeaderNavListContainerM>
        {/** nav sandwich button */}
        <HeaderNavSandwichM
          data-testid="animation"
          handleAnimation={handleAnimation}
          activeSandwich={activeSandwich}
        />
        <ModalContainerM />
      </HeaderContainerM>
    </ThemeProvider>
  );
};

export default HeaderO;
