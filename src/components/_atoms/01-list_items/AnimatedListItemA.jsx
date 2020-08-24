import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AnimatedListItem = styled.li`
  @keyframes fade-in-left {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }

  opacity: 0;
  list-style: none;
  color: ${(props) => props.theme.sectionfc};
  font-family: ${(props) => props.theme.headff};
  font-size: 1em;
  letter-spacing: 0.075em;
  line-height: 1.6em;
  animation: 0.7s fade-in-left ${(props) => `${props.count}s`};
  animation-fill-mode: forwards;
  width: 100%;
  flex: 0 50%;
`;

const AnimatedListItemA = (props) => {
  const { item } = props;
  return (
    <React.Fragment>
      {/** Icon here somehow? */}
      <AnimatedListItem {...props}>{item}</AnimatedListItem>
    </React.Fragment>
  );
};

export default AnimatedListItemA;

AnimatedListItemA.propTypes = { item: PropTypes.string };
AnimatedListItemA.defaultProps = { item: "coding" };
