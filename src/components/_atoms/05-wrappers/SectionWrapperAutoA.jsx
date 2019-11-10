import styled from "styled-components";

const SectionWrapperAutoA = styled.section`
  display: flex;
  flex-flow: column;
  flex: 2;

  @media (max-width: 43.75em) {
    display: ${props => props.hidden && "none"};
  }
`;

export default SectionWrapperAutoA;
