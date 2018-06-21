import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrap = styled.div`
  background: #fff;
  margin-top: 15px;
  padding: 0 0 47px 16px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  padding-top: 15px;
  display: inline-block;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
`;
const trends = [
  {
    name: "#BringYourDogToWorkDay"
  },
  {
    name: "#FridayFeeling",
    count: "12.1K Tweets"
  },
  {
    name: "#BrexitAnniversary",
    count: "It’s one year since the UK voted to leave the European Union"
  },
  {
    name: "HMS Queen Elizabeth",
    count: "1,036 Tweets"
  },
  {
    name: "Joe Budden",
    count: "1,036 Tweets"
  },
  {
    name: "Trident",
    count: "6,136 Tweets"
  }
];

const Name = styled(NavLink)`
  color: #1da1f2;
  text-decoration: none;
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
const Trend = styled.div`
  padding-top: 11px;
`;
const Count = styled.div`
  color: #718290;
  font-size: 12px;
`;
const Change = styled(NavLink)`
  color: #1da1f2;
  text-decoration: none;
  font-size: 12px;
  padding-left: 5px;
  padding-right: 20px;

  &:hover {
    text-decoration: underline;
  }
`;
function TrendsList() {
  const content = trends.map(trend => (
    <Trend>
      <Name to={`/search?q=${trend.name}`}>{trend.name}</Name>
      {trend.count && <Count>{trend.count}</Count>}
    </Trend>
  ));

  return <List>{content}</List>;
}

export default function() {
  return (
    <Wrap>
      <Title>United Kingdom Trends</Title> ·
      <Change to="">Change</Change>
      <TrendsList trends={trends} />
    </Wrap>
  );
}
