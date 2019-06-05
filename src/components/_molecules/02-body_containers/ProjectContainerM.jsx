import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SectionHeaderA from '@A/04-headers/SectionHeaderA';
import SectionWrapperAutoA from '@A/05-wrappers/SectionWrapperAutoA';
import ListWrapperA from '@A/05-wrappers/ListWrapperA';
import AnimatedListM from '@M/04-list_containers/AnimatedListM';
import ParagraphA from '@A/06-paragraphs/ParagraphA';
import GhostLinkA from '@A/00-links/GhostLinkA';
import GithubLinkA from '@A/00-links/GithubLinkA';

const Container = styled.div`
  background-color: ${props => props.theme.bg};
  min-height: 100%;
  display: flex;
  flex-flow: row;
  padding-bottom: 100px;

  @media (max-width: 600px) {
    margin-top: 25%;
  }
`;

export const LinkContainer = styled.div`
  height: 75px;
  display: flex;
  flex-flow: row;
  margin-top: 30px;
  position: relative;
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

const ProjectContainerM = props => {
  const { description, items, linkGithub, linkUrl, name, used, visit } = props;
  return (
    <Container>
      {/** Project Info below */}
      <SectionWrapperAutoA margin="70px 0 0 100px">
        <Title>{name}</Title>
        <Used>{used}</Used>
        <ParagraphA paragraph={description} />
        <LinkContainer>
          <GithubLinkA url={linkGithub} />
          {visit ? <GhostLinkA url={linkUrl} /> : ''}
        </LinkContainer>
      </SectionWrapperAutoA>
      {/** Skills below */}
      <SectionWrapperAutoA
        hidden // prettier-ignore
        margin="70px 0 0 0"
      >
        <ListWrapperA>
          <SectionHeaderA
            margin="10px 0 0 0" // prettier-ignore
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
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  linkGithub: PropTypes.string.isRequired,
  linkUrl: PropTypes.string,
  visit: PropTypes.bool.isRequired
};

ProjectContainerM.defaultProps = {
  linkUrl: 'https://www.keithalleman.com'
};

Container.displayName = 'Container';
LinkContainer.displayName = 'LinkContainer';
Title.displayName = 'Title';
Used.displayName = 'Used';
