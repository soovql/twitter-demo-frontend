import React from "react";
import styled from "styled-components";
import { Button } from "./Buttons";

const MenuBar = styled.div`
  background-color: #fff;
  padding: 8px 0;
`;
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

const StatisticsItemName = styled.div`
  display: block;
  font-size: 12px;
  line-height: 21px;
`;
const StatisticsItemCount = styled.div`
  display: block;
  font-size: 18px;
`;
const StatisticsItem = styled.li`
  display: inline-block;
  list-style: none;
  color: #788a98;
  font-weight: bold;
  padding: 0 18px;

  &:hover {
    border-bottom: 2px solid #1da1f2;
  }
  &:active {
    border-bottom: 2px solid #1da1f2;
  }
  &:hover ${StatisticsItemCount} {
    color: #1da1f2;
  }
`;

class Menu extends React.Component {
  render() {
    return (
      <MenuBar>
        <MenuNav>
          <StatisticsNav>
            <StatisticsItem hover={true}>
              <StatisticsItemName>Tweets</StatisticsItemName>
              <StatisticsItemCount>8,058</StatisticsItemCount>
            </StatisticsItem>
            <StatisticsItem>
              <StatisticsItemName>Following</StatisticsItemName>
              <StatisticsItemCount>721</StatisticsItemCount>
            </StatisticsItem>
            <StatisticsItem>
              <StatisticsItemName>Followers</StatisticsItemName>
              <StatisticsItemCount>1,815</StatisticsItemCount>
            </StatisticsItem>
            <StatisticsItem>
              <StatisticsItemName>Likes</StatisticsItemName>
              <StatisticsItemCount>460</StatisticsItemCount>
            </StatisticsItem>
            <StatisticsItem>
              <StatisticsItemName>Lists</StatisticsItemName>
              <StatisticsItemCount>2</StatisticsItemCount>
            </StatisticsItem>
          </StatisticsNav>
          <FollowNav>
            <Button>Follow</Button>
            <NavMenuMore />
          </FollowNav>
        </MenuNav>
      </MenuBar>
    );
  }
}
export default Menu;
