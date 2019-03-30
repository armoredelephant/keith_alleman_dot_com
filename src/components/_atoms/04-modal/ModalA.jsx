import styled from 'styled-components';

const ModalA = styled.div`
    position: fixed;
    background: #594F4F;
    color: #FFF;
    top: 0;
    left: auto;
    right: calc(-40% - 15px);
    width: 40%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition-property: all;
    transition-duration: 1.5s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.5s;  
    overflow: hidden;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-content: stretch;

    .active & {
        opacity: 1;
        visibility: visible;
        right: 0;
        z-index: 1;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1);
        transition-delay: .7s;
    }

    @media (max-width: 1199px) {
        width: 50%;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export default ModalA;