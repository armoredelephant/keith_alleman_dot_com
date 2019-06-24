import React from 'react';
import styled from 'styled-components';

import FooterLinkContainerA from '@A/07-containers/FooterLinkContainerA';

const Top = styled.div`
  padding: 10px 0 0 10px;
  flex: 1
`;

const Bottom = styled.div`
  flex: 1;
`;

const Image = styled.img`
  border-radius: 100%;
  max-height: 130px;
  max-width: 130px;
  border: 2px solid #dfdfdf;

  @media (max-width: 375px) {
      height: 90px;
      width: 90px;
  }

  @media (max-width: 983px) {
      height: 90px;
      width: 90px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 0 100%;
  justify-content: space-between;
`;

const ContactContainerA = () => {
  return (
    <Wrapper>
      <Top>
        <Image src="/resources/images/01.jpg" />
      </Top>
      {/** possibly needs a <ContactLinkContainerA /> */}
      <Bottom>
        <FooterLinkContainerA
          column // prettier-ignore
          contact={true}
        />
      </Bottom>
    </Wrapper>
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
