import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import iconMore from "./icons/more.png";

const MenuWrap = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-around;
  margin-bottom: 8px;
`;
const MenuNav = styled.div`
  padding-top: 9px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-left: 21%;
`;

const FollowNav = styled.div``;
const ActionButton = styled.div`
  background-image: url(${iconMore});
  background-repeat: no-repeat;
  width: 14px;
  height: 14px;
  display: inline-block;
`;
const Wrap = styled.ul`
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
  padding: 0 11px 8px;
  border-bottom: 2px solid #fff;

  &:hover {
    border-bottom: 2px solid #1da1f2;
  }
  &.active {
    border-bottom: 2px solid #1da1f2;
  }
  &.active ${Count} {
    color: #1da1f2;
  }
  &:hover ${Count} {
    color: #1da1f2;
  }
`;

const StatisticsNav = () => (
  <Wrap>
    <StyledLink to="/EveryInteraction" exact={true}>
      <Name>Tweets</Name>
      <Count>8,058</Count>
    </StyledLink>

    <StyledLink to="/following">
      <Name>Following</Name>
      <Count>721</Count>
    </StyledLink>

    <StyledLink to="/followers">
      <Name>Followers</Name>
      <Count>1,815</Count>
    </StyledLink>

    <StyledLink to="/likes">
      <Name>Likes</Name>
      <Count>460</Count>
    </StyledLink>

    <StyledLink to="/lists">
      <Name>Lists</Name>
      <Count>2</Count>
    </StyledLink>
  </Wrap>
);

export const Menu = () => (
  <MenuWrap>
    <MenuNav>
      <StatisticsNav />
      <FollowNav>
        <Button>Follow</Button>
        <ActionButton />
      </FollowNav>
    </MenuNav>
  </MenuWrap>
);
