import styled from 'styled-components';

const SectionWrapperAutoA = styled.section`
  width: 50%;
  margin: ${props => (props.margin ? props.margin : 'auto')};
  display: flex;
  flex-flow: column;

  @media (max-width: 983px) {
    margin: 0;
    width: 100%;
  }
`;

export default SectionWrapperAutoA;
