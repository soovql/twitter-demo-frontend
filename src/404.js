// @flow
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Content = styled.div`
  background-color: #1da1f2;
  color: #fff;
  text-align: center;
  padding: 100px;
`;

const Header = styled.h1``;

const SubHeader = styled.h3``;

const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <Content>
    <Header>Sorry, that page doesn’t exist!</Header>
    <SubHeader>
      You can search Twitter using the search box below or return to the{" "}
      <StyledLink to="/">homepage</StyledLink>
      .
    </SubHeader>
  </Content>
);
