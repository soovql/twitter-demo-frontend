import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Trends = styled.div`
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
    count: 12100
  },
  {
    name: "#BrexitAnniversary",
    description: "It’s one year since the UK voted to leave the European Union"
  },
  {
    name: "HMS Queen Elizabeth",
    count: 1036
  },
  {
    name: "Joe Budden",
    count: 1036
  },
  {
    name: "Trident",
    count: 6136
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

const Description = styled.div`
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
const Count = props => (
  <Description>
    <FormattedMessage
      id="tweets"
      defaultMessage={`{count, number} {count, plural,
                      one {Tweet}
                      other {Tweets}
                    }`}
      values={{
        count: props.count
      }}
    />
  </Description>
);

function TrendsList() {
  const content = trends.map(trend => (
    <Trend>
      <Name to={`/search?q=${trend.name}`}>{trend.name}</Name>
      {trend.count && <Count count={trend.count} />}
      {trend.description && <Description>{trend.description}</Description>}
    </Trend>
  ));

  return <List>{content}</List>;
}

export default function() {
  return (
    <Trends>
      <Title>United Kingdom Trends</Title> ·
      <Change to="">Change</Change>
      <TrendsList trends={trends} />
    </Trends>
  );
}
