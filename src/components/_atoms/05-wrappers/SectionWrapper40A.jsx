import styled from 'styled-components';

const SectionWrapper40A = styled.div`
  width: 40.2%;
  display: flex;
  height: 100%;
  margin: ${props => (props.margin ? props.margin : '0 auto')};

  @media (max-width: 983px) {
    width: 100%;
    visibility: ${props => (props.hidden ? 'hidden' : 'visible')};
    
    &.about-l {
      height: 0;
    };
  }
`;

export default SectionWrapper40A;
