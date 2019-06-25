import styled from 'styled-components';

const SectionWrapper40A = styled.div`
  display: flex;
  height: 400px;
  flex: 2;
  align-self: ${props => props.align && 'flex-start'};
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    display: ${props => props.hidden && 'none'};
  }
`;

export default SectionWrapper40A;
