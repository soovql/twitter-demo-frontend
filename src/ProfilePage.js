import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header } from "./Header";
import { HeaderImage } from "./HeaderImage";
import { Menu } from "./Menu";
import { Grid, Col, Row } from "react-flexbox-grid";
import TwitterFeed from "./Feed";
import Info from "./Info";
import Suggestions from "./Suggestions";
import CommonUsers from "./CommonUsers";
import Trends from "./Trends";
import About from "./About";

const Profile = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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

const ProfilePage = () => (
  <React.Fragment>
    <Helmet>
      <title>Every Interaction </title>
      <meta
        name="description"
        content="The latest Tweets from Every Interaction (@EveryInteract)."
      />
    </Helmet>
    <Profile>
      <Header />

      <HeaderImage />
      <Menu />
      <Grid>
        <Row>
          <Col sm={3}>
            <Info />
            <CommonUsers />
          </Col>
          <Col sm={6}>
            <FeedTab>
              <Tab to="/EveryInteraction" exact={true}>
                Tweets
              </Tab>
              <Tab to="/with_replies">Tweets & Replies</Tab>
              <Tab to="/media">Media</Tab>
            </FeedTab>

            <TwitterFeed />
          </Col>
          <Col sm={3}>
            <Suggestions />
            <Trends />
            <About />
          </Col>
        </Row>
      </Grid>
    </Profile>
  </React.Fragment>
);

export default ProfilePage;
