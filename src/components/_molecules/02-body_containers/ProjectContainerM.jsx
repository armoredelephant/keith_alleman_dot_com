import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SectionHeaderA from '@A/04-headers/SectionHeaderA';
import SectionWrapperAutoA from '@A/05-wrappers/SectionWrapperAutoA';
import ListWrapperA from '@A/05-wrappers/ListWrapperA';
import AnimatedListM from '@M/04-list_containers/AnimatedListM';

const Container = styled.div`
  background-color: ${props => props.theme.bg};
  height: 100%;
  display: flex;
  flex-flow: row;
`;

const ProjectContainerM = props => {
  const { description, items, name, used } = props;
  return (
    <Container>
      {/** Project Info below */}
      <SectionWrapperAutoA>
        {/** One vomponent that displays all the project info? */}
        <SectionHeaderA 
          margin="auto 0"
        center="true"
          header={name}
        />
      </SectionWrapperAutoA>
      {/** Skills below */}
      <SectionWrapperAutoA>
        <ListWrapperA>
          <SectionHeaderA
            margin="30px 0 0 0"
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

