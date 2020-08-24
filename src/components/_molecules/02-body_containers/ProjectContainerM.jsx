import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

import SectionHeaderA from "@A/04-headers/SectionHeaderA";
import SectionWrapperAutoA from "@A/05-wrappers/SectionWrapperAutoA";
import SectionWrapper40A from "@A/05-wrappers/SectionWrapper40A";
import ListWrapperA from "@A/05-wrappers/ListWrapperA";
import AnimatedListM from "@M/04-list_containers/AnimatedListM";
import ParagraphA from "@A/06-paragraphs/ParagraphA";
import GhostLinkA from "@A/00-links/GhostLinkA";
import GithubLinkA from "@A/00-links/GithubLinkA";
import SkillsList from "../04-list_containers/SkillsList";

const Container = styled.div`
  background-color: ${(props) => props.theme.bg};
  display: flex;
  flex-flow: row;
  justify-content: center;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-flow: row;
  position: relative;
  justify-content: ${(props) => (props.single ? "flex-end" : "space-around")};
  width: 18.75em;
  margin-top: 3.125em;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.primarycolor};
  letter-spacing: ${(props) => props.theme.ls};
  text-align: center;
  font-size: 1.5rem;
`;

const Used = styled.h3`
  color: ${(props) => props.theme.primarycolor};
  letter-spacing: ${(props) => props.theme.ls};
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
`;

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  max-width: 66%;
  text-align: center;
`;

const ProjectContainerM = (props) => {
  const { description, items, linkGithub, linkUrl, name, used, visit } = props;
  return (
    <Container>
      {/** Project Info below */}
      <SectionWrapperAutoA>
        <ScrollAnimation animateIn="fadeIn">
          <ContentWrapper>
            <Title>{name}</Title>
            <Used>{used}</Used>
            <ParagraphA project={true} paragraph={description} />
            {/** Skills */}
            <SkillsWrapper>
              <SectionHeaderA
                center={true}
                header="Skills" // prettier-ignore
                secondary="true"
              />
              <SkillsList items={items} />
            </SkillsWrapper>
            <LinkContainer single={!visit && true}>
              {linkGithub && <GithubLinkA url={linkGithub} />}
              {visit && <GhostLinkA url={linkUrl} />}
            </LinkContainer>
          </ContentWrapper>
        </ScrollAnimation>
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
  linkGithub: PropTypes.string,
  linkUrl: PropTypes.string,
  visit: PropTypes.bool.isRequired,
};

ProjectContainerM.defaultProps = {
  linkUrl: "https://www.keithalleman.com",
};

Container.displayName = "Container";
LinkContainer.displayName = "LinkContainer";
Title.displayName = "Title";
Used.displayName = "Used";
