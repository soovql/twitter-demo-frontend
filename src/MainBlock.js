import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import TickIcon from "./img/Tick.png";
import { Grid, Col, Row } from "react-flexbox-grid";
import TwitterCard from "./TweetCard.js";
import { Button } from "./Buttons";
import IconJoined from "./img/Icon_Joined.svg";
import IconLink from "./img/Icon_Link.svg";
import IconLocation from "./img/Icon_Location.svg";

const UserInfo = styled.div`
  margin-top: 30px;
`;
const Name = styled.div`
  color: #14171a;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  float: left;
  padding-right: 6px;
`;

const Nickname = styled.div`
  color: #697787;
  font-size: 14px;
  line-height: 21px;
`;
const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: 14171a;
`;

const ExtrasBlock = styled.ul`
  padding: 0;
`;
const ExtrasInfo = styled.li`
  list-style: none;
  font-size: 14px;
  color: #657786;
  line-height: 28px;
  display: flex;
`;

const UserInfoMoreItemContent = styled.div`
  padding-left: 6px;
`;
const TwitterFeed = styled.div`
  margin-top: 8px;
`;
const FeedTab = styled.ul`
  background-color: #fff;
  padding: 20px 20px 10px;
  margin: 0 auto;
  border-bottom: 1px solid lightgrey;
`;

const Tab = styled.li`
  display: inline-block;
  list-style: none;
  color: #1da1f2;
  font-size: 20px;
  font-weight: bold;
  padding-right: 30px;
  &.active {
    color: #000;
  }
`;

const PageContainer = props => (
  <Grid>
    <Row>
      <Col sm={3}>
        <UserInfo>
          <Name>Every Interaction</Name>
          <img
            src={TickIcon}
            title="Verified account"
            alt="Approved User Tick"
          />

          <Nickname>@EveryInteract</Nickname>
          <Description>
            UX Design studio focussed problem solving creativity. Design to us
            is how can we make things *work* amazing.
          </Description>
          <ExtrasBlock>
            <ExtrasInfo>
              <img src={IconLocation} />
              <UserInfoMoreItemContent>London, UK </UserInfoMoreItemContent>
            </ExtrasInfo>
            <ExtrasInfo>
              <img src={IconLink} />
              <UserInfoMoreItemContent>
                everyinteraction.com
              </UserInfoMoreItemContent>
            </ExtrasInfo>
            <ExtrasInfo>
              <img src={IconJoined} />
              <UserInfoMoreItemContent>Joined May 2008</UserInfoMoreItemContent>
            </ExtrasInfo>
          </ExtrasBlock>
          <Button primary>Tweet to</Button>
          <Button primary>Message</Button>
        </UserInfo>
      </Col>
      <Col sm={6}>
        <TwitterFeed>
          <FeedTab>
            <Tab>Tweets </Tab>
            <Tab>Tweets & Replies</Tab>
            <Tab>Media</Tab>
          </FeedTab>
          <TwitterCard />
        </TwitterFeed>
      </Col>
      <Col sm={3} />
    </Row>
  </Grid>
);

class MainContainer extends React.Component {
  render() {
    return <PageContainer />;
  }
}
export default MainContainer;
