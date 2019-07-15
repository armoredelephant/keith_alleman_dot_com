import React from 'react';
import styled from 'styled-components';

import FooterLinkContainerA from '@A/07-containers/FooterLinkContainerA';

const Top = styled.div`
  padding: 5px 0 0 5px;
  display: flex;
  height: 100px;
  flex-flow: row;
  justify-content: space-between;
  flex: 1 @media (min-width: 900px) {
    padding: 10px 0 0 10px;
  }
`;

const Bottom = styled.div`
  flex: 1;
`;

const Spacer = styled.div`
  flex: 3 1 80%;
`;

const ImageContainer = styled.div`
  flex: 1 3 20%;
  justify-content: center;
`;

const Image = styled.img`
  display: flex;
  border-radius: 100%;
  max-height: 120px;
  max-width: 120px;
  border: 2px solid #dfdfdf;
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
        <ImageContainer>
          <Image src="/resources/images/03.jpg" />
        </ImageContainer>
        <Spacer />
      </Top>
      {/** possibly needs a <ContactLinkContainerA /> */}
      <Bottom>
        <FooterLinkContainerA
          column // prettier-ignore
          contact
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
