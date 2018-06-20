import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Grid, Col, Row } from "react-flexbox-grid";
import { Feed } from "./Feed/TwitterFeed";
import Profile from "./Profile";
import Suggestions from "./Suggestions";

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
        <Profile />
      </Col>
      <Col sm={6}>
        <FeedTab>
          <Tab to="/EveryInteraction" exact={true}>
            Tweets
          </Tab>
          <Tab to="/with_replies">Tweets & Replies</Tab>
          <Tab to="/media">Media</Tab>
        </FeedTab>

        <Feed />
      </Col>
      <Col sm={3}>
        <Suggestions />
      </Col>
    </Row>
  </Grid>
);
