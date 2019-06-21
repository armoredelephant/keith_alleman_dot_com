import styled from 'styled-components';

const SectionWrapper40A = styled.div`
  display: flex;
  flex: 2;
  align-self: ${props => props.center && 'center'};
  justify-content: center;

  @media (max-width: 700px) {
    display: ${props => props.hidden && 'none'};
  }
`;

export default SectionWrapper40A;
