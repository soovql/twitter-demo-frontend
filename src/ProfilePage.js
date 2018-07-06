import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';
import Header from './Header';
import HeaderImage from './HeaderImage';
import Content from './Content';
import Info from './Info';
import Suggestions from './Suggestions';
import CommonUsers from './CommonUsers';
import Followers from './Followers';
import Trends from './Trends';
import About from './About';
import UserMedia from './UserMedia';
import Menu from './Menu';

const Profile = styled.div`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const MenuNav = styled.div`
  padding-top: 9px;
  margin-bottom: 8px;
`;
export default class ProfilePage extends React.Component {
  state = {
    userData: [],
    //    trendsData: [],  // trends (not a json object)
  };

  componentDidMount() {
    this.getUserInfo();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (prevProps.match.params.id !== match.params.id) {
      this.getUserInfo();
    }
  }

  getUserInfo = () => {
    const { match } = this.props;
    const hostname = 'https://twitter-demo.erodionov.ru';
    const secretCode = process.env.REACT_APP_SECRET_CODE;
    fetch(`${hostname}/api/v1/accounts/${match.params.id}?access_token=${secretCode}`)
      .then(response => response.json())
      .then(data => this.setState({ userData: data }));
  };

  render() {
    const { userData } = this.state;
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {`${userData.display_name} (@${userData.username}) | Twitter`}
          </title>
          <meta name="description" content={`The latest Tweets from ${userData.display_name}.`} />
        </Helmet>
        <Profile>
          <Header />
          <HeaderImage userData={userData} />
          <Menu userData={userData} />
          <MenuNav>
            <Grid>
              <Row>
                <Col sm={3}>
                  <Info userData={userData} />
                  <CommonUsers userData={userData} />
                  <UserMedia userData={userData} />
                </Col>
                <Col sm={6}>
                  <Switch>
                    <Route
                      exact
                      path={`/${userData.id}/following`}
                      render={() => (
                        <p>
following
                        </p>
                      )}
                    />
                    <Route
                      exact
                      path={`/${userData.id}/followers`}
                      render={() => <Followers userData={userData} />}
                    />
                    <Route
                      path={`/${userData.id}/likes`}
                      render={() => (
                        <p>
likes
                        </p>
                      )}
                    />
                    <Route
                      exact
                      path={`/${userData.id}/lists`}
                      render={() => (
                        <p>
lists
                        </p>
                      )}
                    />
                    <Route
                      path={`/${userData.id}`}
                      render={() => <Content userData={userData} />}
                    />
                  </Switch>
                </Col>
                <Col sm={3}>
                  <Suggestions />
                  <Trends />
                  <About />
                </Col>
              </Row>
            </Grid>
          </MenuNav>
        </Profile>
      </React.Fragment>
    );
  }
}
