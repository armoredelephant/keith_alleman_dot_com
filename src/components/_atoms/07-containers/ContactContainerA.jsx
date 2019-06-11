import React from 'react';
import styled from 'styled-components';

import ContactLinkA from '@A/00-links/ContactLinkA';
import FooterLinkA from '@A/00-links/FooterLinkA';

const Top = styled.div`
    height: 487px;
    min-height: 487px;
    width: 100%;
    padding-right: 60%;
`;

const Bottom = styled.div`
    height: 536px;
    min-height: 536px;
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
                {/** possibly needs a <ContactLinkContainerA /> */}
                <FooterLinkA
                    destination='mailto:keith.alleman.dev@gmail.com'
                    name='Email' />
            </Bottom>
        </React.Fragment>
    );
}

export default ContactContainerA;

/**
 * Email
 * Resume Link
 * Github
 * LinkedIN
 *
 */