import styled from 'styled-components';

const StyledNavWrapper = styled.div`
    color: #FFF;
    width: 100%;
    height: 70px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    background-color: #594F4F;
    font-family: "Arial";
    top: 0;
    position: fixed;

    @media (max-width: 460px) {
        &.active {
            transition-delat: 0.4s;
        }
    }
`;

export default StyledNavWrapper;