import styled from "styled-components";

const SectionWrapper40A = styled.div`
  display: flex;
  flex-flow: column;
  height: 25em;
  flex: 2;
  align-self: ${props => props.align && "flex-start"};
  align-items: center;
  justify-content: center;

  @media (max-width: 43.75em) {
    display: ${props => props.hidden && "none"};
  }
`;

export default SectionWrapper40A;
