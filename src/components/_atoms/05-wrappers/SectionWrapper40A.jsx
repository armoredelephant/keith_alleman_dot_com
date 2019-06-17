import styled from 'styled-components';

const SectionWrapper40A = styled.div`
  display: flex;
  flex: 2;
  align-self: center;

  @media (max-width: 983px) {
    display: ${props => props.hidden && 'none'};
  }
`;

export default SectionWrapper40A;
