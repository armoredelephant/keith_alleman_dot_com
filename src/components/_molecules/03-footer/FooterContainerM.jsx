import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    width: 100%;
    height: 200px;
    background: black;
    color: #FFF;
    font-size: 20px;
`;

const FooterContainerM = ( props ) => {
    return (
        <FooterContainer>
            {props.children}
        </FooterContainer>
    );
}

export default FooterContainerM;