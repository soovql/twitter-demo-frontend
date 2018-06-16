import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Button } from "./Buttons";
import avatarHuge from "./img/EIAvatar.png";

const MenuNav = styled.div`
  max-width: 1190px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

const FollowNav = styled.div``;
const NavMenuMore = styled.button`
  outline: none;
  border: none;
`;
const StatisticsNav = styled.ul`
  text-align: center;
  padding: 0;
  margin: 0;
`;

const Name = styled.div`
  display: block;
  font-size: 12px;
  line-height: 21px;
`;
const Count = styled.div`
  display: block;
  font-size: 18px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  list-style: none;
  color: #788a98;
  font-weight: bold;
  padding: 0 18px;
  border-bottom: 2px solid #fff;

  &:hover {
    border-bottom: 2px solid #1da1f2;
  }
  &.active {
    border-bottom: 2px solid #1da1f2;
  }
`;

const Menu = () => (
  <Router>
    <MenuNav>
      <StatisticsNav>
        <StyledLink to="/" exact={true}>
          <Name>Tweets</Name>
          <Count>8,058</Count>
        </StyledLink>

        <StyledLink to="/">
          <Name>Following</Name>
          <Count>721</Count>
        </StyledLink>

        <StyledLink to="/">
          <Name>Followers</Name>
          <Count>1,815</Count>
        </StyledLink>

        <StyledLink to="/">
          <Name>Likes</Name>
          <Count>460</Count>
        </StyledLink>

        <StyledLink to="/">
          <Name>Lists</Name>
          <Count>2</Count>
        </StyledLink>
      </StatisticsNav>
    </MenuNav>
  </Router>
);

export default Menu;
