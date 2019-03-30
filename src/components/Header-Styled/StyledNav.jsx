import styled from 'styled-components';

const StyledNav = styled.nav`
    color: #FFF;
    width: 100%;
    height: 70px;
    display: block;
    background-color: #594F4F;
    font-family: "Arial";
    top: 0;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    background-color: #594F4F;
    font-family: "Arial";

    &.fixed-nav {
        position: fixed;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1)
    }

    @media (max-width: 460px) {
        &.active {
            transition-delay: 0.4s;
        }
    }
`;

export default StyledNav;