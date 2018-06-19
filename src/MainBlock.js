import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import iconTick from "./icons/tick.png";
import { Grid, Col, Row } from "react-flexbox-grid";
import { Feed } from "./TwitterFeed";
import { Button } from "./Buttons";
import iconJoined from "./icons/joined.svg";
import iconLink from "./icons/link.svg";
import iconLocation from "./icons/location.svg";

const UserInfo = styled.div`
  margin-top: 30px;
  position: relative;
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
const Avatar = styled.img`
  background-image: url(${process.env.PUBLIC_URL + "/img/avatar.png"});
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 172px;
  width: 172px;
  position: absolute;
  z-index: 2;
  left: 5%;
  top: -67%;
`;

const ExtrasInfo = styled.li`
  list-style: none;
  font-size: 14px;
  color: #657786;
  line-height: 28px;
  display: flex;
`;

const ExtrasContent = styled.div`
  padding-left: 6px;
`;

const FeedTab = styled.ul`
  background-color: #fff;
  padding: 20px 15px 10px;
  margin-top: 8px;
  margin: 0 auto;
  border-bottom: 1px solid lightgrey;
`;

const Tab = styled(NavLink)`
  display: inline-block;
  list-style: none;
  color: #1da1f2;
  font-size: 20px;
  font-weight: bold;
  padding-right: 30px;
  text-decoration: none;
  &.active {
    color: #000;
  }
  &:hover:not(.active) {
    text-decoration: underline;
  }
`;

export const MainContainer = props => (
  <Grid>
    <Row>
      <Col sm={3}>
        <UserInfo>
          <Avatar />
          <Name>Every Interaction</Name>
          <img
            src={iconTick}
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
              <img src={iconLocation} />
              <ExtrasContent>London, UK </ExtrasContent>
            </ExtrasInfo>
            <ExtrasInfo>
              <img src={iconLink} />
              <ExtrasContent>everyinteraction.com</ExtrasContent>
            </ExtrasInfo>
            <ExtrasInfo>
              <img src={iconJoined} />
              <ExtrasContent>Joined May 2008</ExtrasContent>
            </ExtrasInfo>
          </ExtrasBlock>
          <Button primary>Tweet to</Button>
          <Button primary>Message</Button>
        </UserInfo>
      </Col>
      <Col sm={6}>
        <Router>
          <FeedTab>
            <Tab to="/EveryInteraction" exact={true}>
              Tweets
            </Tab>
            <Tab to="/with_replies">Tweets & Replies</Tab>
            <Tab to="/media">Media</Tab>
          </FeedTab>
        </Router>
        <Feed />
      </Col>
    </Row>
  </Grid>
);
