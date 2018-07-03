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
    const hostname = 'https://twitter-demo.erodionov.ru';
    const secretCode = process.env.REACT_APP_SECRET_CODE;

    // fetch for multiple urls
    Promise.all([
      fetch(`${hostname}/api/v1/accounts/1/statuses?local=true&access_token=${secretCode}`),
      // posts data
      fetch(`${hostname}/api/v1/accounts/1/statuses?access_token=${secretCode}`),
      // posts data only media
      fetch(`${hostname}/api/v1/accounts/1/statuses?only_media=true&access_token=${secretCode}`),
      // posts data only media
    ])
      .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
      .then(([data1, data2, data3]) => this.setState({
        tweetsData: data1,
        tweetsWithReplies: data2,
        tweetsOnlyMedia: data3,
      }));
  }

  render() {
    const { tweetsData, tweetsOnlyMedia, tweetsWithReplies } = this.state;
    const { userData } = this.props;
    return (
      <React.Fragment>
        <FeedTab>
          <Tab exact to={`/${userData.username}`}>
            Tweets
          </Tab>
          <Tab exact to={`/${userData.username}/with_replies`}>
            Tweets & Replies
          </Tab>
          <Tab exact to={`/${userData.username}/media`}>
            Media
          </Tab>
        </FeedTab>
        <Switch>
          <Route
            exact
            path={`/${userData.username}/with_replies`}
            render={() => <Feed tweetsData={tweetsWithReplies} />}
          />
          <Route
            exact
            path={`/${userData.username}/media`}
            render={() => <Feed tweetsData={tweetsOnlyMedia} />}
          />
          <Route path={`/${userData.username}`} render={() => <Feed tweetsData={tweetsData} />} />
        </Switch>
      </React.Fragment>
    );
  }
}
