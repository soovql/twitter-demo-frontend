// @flow
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import iconPeople from "./icons/people.png";

const Title = styled.div`
  display: flex;
  align-items: baseline;
  padding-bottom: 10px;
`;

const ContentBlock = styled.div`
  background: #fff;
  padding: 12px;
`;

const Extra = styled(NavLink)`
  font-size: 12px;
  text-decoration: none;
  color: #1c94e0;
  &:hover {
    text-decorataion: underline;
  }
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-left: 2px;
`;

const Search = styled.div`
  color: #1da1f2;
  line-height: 15px;
  padding: 23px 0 19px 0;
`;

const IconPeople = styled.img`
  vertical-align: middle;
  padding-right: 6px;
`;

export default () => (
  <ContentBlock>
    <Title>
      <Text> Who to follow&nbsp;</Text>
      ·
      <Extra to="">&nbsp;Refresh&nbsp;</Extra>
      ·
      <Extra to="/who_to_follow/suggestions">&nbsp;View All</Extra>
    </Title>

    <Card />
    <Search>
      <IconPeople src={iconPeople} />
      <Extra to="who_to_follow/import">Find people you know</Extra>
    </Search>
  </ContentBlock>
);
