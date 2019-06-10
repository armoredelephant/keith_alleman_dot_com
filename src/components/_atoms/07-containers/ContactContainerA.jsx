import React from 'react';
import styled from 'styled-components';

const Top = styled.div`
    height: 40%;
    width: 100%;
    padding-right: 60%;
`;

const Bottom = styled.div`
    height: 60%;
    width: 100%;
`;

const Image = styled.img`
    border-radius: 100%;
    margin: 15px 0 0 15px;
    height: 140px;
    width: 140px;
    border: 2px solid #dfdfdf;
`;

const ContactContainerA = props => {
    return (
        <React.Fragment>
            <Top>
                <Image src='/resources/images/01.jpg' />
            </Top>
            <Bottom>

            </Bottom>
        </React.Fragment>
    );
}

export default ContactContainerA;