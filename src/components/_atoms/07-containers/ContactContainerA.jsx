import React from 'react';
import styled from 'styled-components';

import FooterLinkContainerA from '@A/07-containers/FooterLinkContainerA';

const Top = styled.div`
  min-height: fit-content;
  width: 100%;
  padding-right: 60%;
  flex-shrink: 2;
`;

const Bottom = styled.div`
  height: 536px;
  min-height: fit-content;
  width: 100%;
  margin-bottom: 8%;
`;

const Image = styled.img`
  border-radius: 100%;
  margin: 10px 0 0 10px;
  height: 130px;
  width: 130px;
  border: 2px solid #dfdfdf;

  @media (max-width: 375px) {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 415px) {
    height: 100px;
    width: 100px;
  }
`;

const ContactContainerA = () => {
  return (
    <React.Fragment>
      <Top>
        <Image src="/resources/images/01.jpg" />
      </Top>
      <Bottom>
        {/** possibly needs a <ContactLinkContainerA /> */}
        <FooterLinkContainerA
          column // prettier-ignore
          contact
        />
      </Bottom>
    </React.Fragment>
  );
};

export default ContactContainerA;

/**
 * Email
 * Resume Link
 * Github
 * LinkedIN
 *
 */
