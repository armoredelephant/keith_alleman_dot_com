import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.li`
  list-style: none;
  color: ${(props) => props.theme.sectionfc};
  font-family: ${(props) => props.theme.headff};
  font-size: 1em;
  letter-spacing: 0.075em;
  line-height: 1.6em;
  width: 100%;
  flex: 0 50%;
`;

const SkillsList = ({ items }) => {
  return (
    <List>
      {items.map((item) => {
        return <Item key={item}>{item}</Item>;
      })}
    </List>
  );
};

export default SkillsList;
