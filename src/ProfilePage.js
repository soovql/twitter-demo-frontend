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
    const hostname = 'https://twitter-demo.erodionov.ru';
    const secretCode = process.env.REACT_APP_SECRET_CODE;

    // fetch user profile data
    fetch(`${hostname}/api/v1/accounts/1?access_token=${secretCode}`)
      .then(response => response.json())
      .then(data => this.setState({ userData: data }));
  }

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
                      path={`/${userData.username}/following`}
                      render={() => (
                        <p>
following
                        </p>
                      )}
                    />
                    <Route
                      exact
                      path={`/${userData.username}/followers`}
                      render={() => (
                        <p>
followers
                        </p>
                      )}
                    />
                    <Route
                      path={`/${userData.username}/likes`}
                      render={() => (
                        <p>
likes
                        </p>
                      )}
                    />
                    <Route
                      exact
                      path={`/${userData.username}/lists`}
                      render={() => (
                        <p>
lists
                        </p>
                      )}
                    />
                    <Route
                      path={`/${userData.username}`}
                      render={() => (
                        <Content
                          userData={userData}
                        />
                      )}
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
