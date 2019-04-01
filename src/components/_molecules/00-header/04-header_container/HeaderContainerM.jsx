import styled from 'styled-components';

const HeaderContainerM = styled.header`
    color: ${ props => props.theme.primarycolor };
    width: 100%;
    height: 70px;
    display: block;
    background-color: ${ props => props.theme.bg };
    font-family: "Arial";
    top: 0;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    font-family: "Arial";
    position: fixed;

    &.fixed-nav {
        box-shadow: ${ props => props.theme.boxshadow };
    }

    @media (max-width: 460px) {
        &.active {
            transition-delay: 0.4s;
        }
    }
`;

export default HeaderContainerM;