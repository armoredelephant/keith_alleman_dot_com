import styled from 'styled-components';

const BackdropA = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    width: 0;
    opacity: 0;
    visibility: hidden;
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.5s;  

    .active & {
        width: 100%;
        visibility: visible;
        opacity: 1;
        transition-property: all;
        transition-duration: 2s;
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        transition-delay: 0.5s; 
    }
`;

export default BackdropA;