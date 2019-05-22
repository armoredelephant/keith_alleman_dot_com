import styled from 'styled-components';

const SectionWrapperAutoA = styled.section`
  width: 50%;
  height: 100%;
  margin: ${props => (props.margin ? props.margin : 'auto')};
  display: flex;
  flex-flow: column;
  overflow: auto;

  @media (max-width: 600px) {
    margin: ${props => (props.margin ? props.margin : '0')};
    width: ${props => (props.hidden ? '0' : '100%')};
  }
  
  @media (max-width: 983px) {
    margin: ${props => (props.margin ? props.margin : '0')};
    visibility: ${props => (props.hidden ? 'hidden' : 'visible')};
  }
`;

export default SectionWrapperAutoA;
