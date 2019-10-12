import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

import SectionHeaderA from '@A/04-headers/SectionHeaderA';
import SectionWrapperAutoA from '@A/05-wrappers/SectionWrapperAutoA';
import SectionWrapper40A from '@A/05-wrappers/SectionWrapper40A';
import ListWrapperA from '@A/05-wrappers/ListWrapperA';
import AnimatedListM from '@M/04-list_containers/AnimatedListM';
import ParagraphA from '@A/06-paragraphs/ParagraphA';
import GhostLinkA from '@A/00-links/GhostLinkA';
import GithubLinkA from '@A/00-links/GithubLinkA';

const Container = styled.div`
  background-color: ${props => props.theme.bg};
  display: flex;
  flex-flow: row;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-flow: row;
  position: relative;
  justify-content: ${props => (props.single ? 'flex-end' : 'space-around')};
  align-self: flex-end;
  width: 18.750em;
  margin-top: 3.125em;
`;

const Title = styled.h1`
  color: ${props => props.theme.primarycolor};
  letter-spacing: ${props => props.theme.ls};
  text-align: center;
`;

const Used = styled.h3`
  color: ${props => props.theme.primarycolor};
  letter-spacing: ${props => props.theme.ls};
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
`;

const ProjectContainerM = props => {
  const { description, items, linkGithub, linkUrl, name, used, visit } = props;
  return (
    <Container>
      {/** Project Info below */}
      <SectionWrapperAutoA>
        <ScrollAnimation animateIn="fadeIn">
          <ContentWrapper>
            <Title>{name}</Title>
            <Used>{used}</Used>
            <ParagraphA paragraph={description} />
            <LinkContainer single={!visit && true}>
              <GithubLinkA url={linkGithub} />
              {visit && <GhostLinkA url={linkUrl} />}
            </LinkContainer>
          </ContentWrapper>
        </ScrollAnimation>
      </SectionWrapperAutoA>
      {/** Skills below */}
      <SectionWrapper40A
        hidden // prettier-ignore
      >
        <ScrollAnimation animateIn="fadeIn">
          <ListWrapperA>
            <SectionHeaderA
              header="Skills Built" // prettier-ignore
              secondary="true"
            />
            <AnimatedListM items={items} />
          </ListWrapperA>
        </ScrollAnimation>
      </SectionWrapper40A>
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
