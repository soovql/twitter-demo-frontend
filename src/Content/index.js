import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Feed from '../Feed';

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

const FeedTab = styled.ul`
  background-color: #fff;
  padding: 20px 15px 10px;
  margin-top: 8px;
  margin: 0 auto;
  border-bottom: 1px solid lightgrey;
`;

export default ({ userData }) => (
  <FeedTab>
    <Tab exact to={`/${userData.nickname}`}>
      Tweets
    </Tab>
    <Tab exact to={`/${userData.nickname}/with_replies`}>
      Tweets & Replies
    </Tab>
    <Tab exact to={`/${userData.nickname}/media`}>
      Media
    </Tab>
    <Switch>
      <Route
        exact
        path={`/${userData.nickname}/with_replies`}
        render={() => (
          <p>
with replies
          </p>
        )}
      />
      <Route
        exact
        path={`/${userData.nickname}/media`}
        render={() => (
          <p>
media
          </p>
        )}
      />
      <Route path={`/${userData.nickname}`} render={() => <Feed userData={userData} />} />
    </Switch>
  </FeedTab>
);
