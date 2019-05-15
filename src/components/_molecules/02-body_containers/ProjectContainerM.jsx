import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SectionHeaderA from '@A/04-headers/SectionHeaderA';
import SectionWrapperAutoA from '@A/05-wrappers/SectionWrapperAutoA';
import ListWrapperA from '@A/05-wrappers/ListWrapperA';
import AnimatedListM from '@M/04-list_containers/AnimatedListM';

const Container = styled.div`
  background-color: ${props => props.theme.bg};
  min-height: 100vh;
  display: flex;
  flex-flow: row;

  @media (max-width: 983px) {
    margin-top: 25%;
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.primarycolor};
  letter-spacing: ${props => props.theme.ls};
  text-align: center;
`;

const Used = styled.h3`
  color: ${props => props.theme.primarycolor};
  letter-spacing: ${props => props.theme.ls};
  margin-top: 10px;
  text-align: center;
`;

const Description = styled.p``;

const ProjectContainerM = props => {
  const { description, items, name, used } = props;
  return (
    <Container>
      {/** Project Info below */}
      <SectionWrapperAutoA margin="25% 0 0 0">
        <Title>{name}</Title>
        <Used>{used}</Used>
      </SectionWrapperAutoA>
      {/** Skills below */}
      <SectionWrapperAutoA
        hidden // prettier-ignore
        margin="25% 0 0 0"
      >
        <ListWrapperA>
          <SectionHeaderA
            margin="30px 0 0 0" // prettier-ignore
            header="Skills Built"
            secondary="true"
          />
          <AnimatedListM items={items} />
        </ListWrapperA>
      </SectionWrapperAutoA>
    </Container>
  );
};

export default ProjectContainerM;

ProjectContainerM.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  used: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};
