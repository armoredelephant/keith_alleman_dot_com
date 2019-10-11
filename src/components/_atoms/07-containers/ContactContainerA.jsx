import React from 'react';
import styled from 'styled-components';

import FooterLinkContainerA from '@A/07-containers/FooterLinkContainerA';

const Bottom = styled.div`
  flex: 1;
  align-self: flex-end;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 0 100%;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-self: center;
  width: 100%;
`;

const ContactContainerA = () => {
  return (
    <Container>
      <Wrapper>
        <Bottom>
          <FooterLinkContainerA
            column // prettier-ignore
            contact
          />
        </Bottom>
      </Wrapper>
    </Container>
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
