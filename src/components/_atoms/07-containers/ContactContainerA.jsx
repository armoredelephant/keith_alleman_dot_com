import React from 'react';
import styled from 'styled-components';

import FooterLinkContainerA from '@A/07-containers/FooterLinkContainerA';

const Top = styled.div`
    min-height: fit-content;
    width: 100%;
    padding-right: 60%;
    flex-shrink: 2
`;

const Bottom = styled.div`
    height: 536px;
    min-height: fit-content;
    width: 100%;
    margin-bottom: 8%;
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
                <FooterLinkContainerA
                    column={true} // prettier-ignore
                    contact={true}
                />
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