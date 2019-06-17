import styled from 'styled-components';

const SectionWrapperAutoA = styled.section`
  width: 50%;
  height: auto;
  margin: ${props => (props.margin ? props.margin : 'auto')};
  padding: ${props => (props.padding ? props.padding : '')};
  display: flex;
  flex-flow: column;
  overflow: hidden;

  @media (max-width: 600px) {
    margin: ${props => (props.margin ? props.margin : '0')};
    width: ${props => (props.hidden ? '0' : '100%')};
  }

  @media (max-width: 983px) {
    margin: 0;
    visibility: ${props => (props.hidden ? 'hidden' : 'visible')};
  }
`;

export default SectionWrapperAutoA;
