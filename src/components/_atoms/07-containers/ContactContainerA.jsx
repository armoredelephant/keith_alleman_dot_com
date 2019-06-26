import React from 'react';
import styled from 'styled-components';

import FooterLinkContainerA from '@A/07-containers/FooterLinkContainerA';

const Top = styled.div`
  padding: 10px 0 0 10px;
  display: flex;
  height: 100px;
  flex-flow: row;
  justify-content: space-between;
  flex: 1
`;

const Bottom = styled.div`
  flex: 1;
`;

const Spacer = styled.div`
  flex: 3;
`;

const ImageContainer = styled.div`
  flex: 1;
  justify-content: center;
`;

const Image = styled.img`
  display: flex;
  border-radius: 100%;
  max-height: 130px;
  max-width: 130px;
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
          <Image src="/resources/images/01.jpg" />
        </ImageContainer>
        <Spacer />
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
