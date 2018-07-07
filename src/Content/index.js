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

export default class Content extends React.Component {
  state = {
    tweetsData: [],
    tweetsWithReplies: [],
    tweetsOnlyMedia: [],
  };

  componentDidMount() {
    const { userData } = this.props;
    const hostname = 'https://twitter-demo.erodionov.ru';
    const secretCode = process.env.REACT_APP_SECRET_CODE;
    // fetch for multiple urls
    Promise.all([
      fetch(
        `${hostname}/api/v1/accounts/${userData.id}/statuses?local=true&access_token=${secretCode}`,
      ),
      // posts without comments?
      fetch(`${hostname}/api/v1/accounts/${userData.id}/statuses?access_token=${secretCode}`),
      // ALL posts
      fetch(
        `${hostname}/api/v1/accounts/${
          userData.id
        }/statuses?only_media=true&access_token=${secretCode}`,
      ),
      // posts only media
    ])
      .then(([resp1, resp2, resp3]) => Promise.all([resp1.json(), resp2.json(), resp3.json()]))
      .then(([tweets, replies, media]) => this.setState({
        tweetsData: tweets,
        tweetsWithReplies: replies,
        tweetsOnlyMedia: media,
      }));
  }

  render() {
    const { tweetsData, tweetsOnlyMedia, tweetsWithReplies } = this.state;
    const { userData } = this.props;
    return (
      <React.Fragment>
        <FeedTab>
          <Tab exact to={`/${userData.id}`}>
            Tweets
          </Tab>
          <Tab exact to={`/${userData.id}/with_replies`}>
            Tweets & Replies
          </Tab>
          <Tab exact to={`/${userData.id}/media`}>
            Media
          </Tab>
        </FeedTab>
        <Switch>
          <Route
            exact
            path={`/${userData.id}/with_replies`}
            render={() => <Feed tweetsData={tweetsWithReplies} />}
          />
          <Route
            exact
            path={`/${userData.id}/media`}
            render={() => <Feed tweetsData={tweetsOnlyMedia} />}
          />
          <Route path={`/${userData.id}`} render={() => <Feed tweetsData={tweetsData} />} />
        </Switch>
      </React.Fragment>
    );
  }
}
