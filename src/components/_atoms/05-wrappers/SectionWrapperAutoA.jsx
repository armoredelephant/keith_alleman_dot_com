import styled from 'styled-components';

const SectionWrapperAutoA = styled.section`
  display: flex;
  flex-flow: column;
  flex: 3;

  @media (max-width: 600px) {
  }

  @media (max-width: 700px) {
    display: ${props => props.hidden && 'none'};
  }
`;

export default SectionWrapperAutoA;
