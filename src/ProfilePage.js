import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

export default ({ match }) => {
  const { username } = match.params;
  return (
    <React.Fragment>
      <Helmet>
        <title>
Every Interaction
        </title>
        <meta
          name="description"
          content="The latest Tweets from Every Interaction (@EveryInteract)."
        />
      </Helmet>
      <Profile>
        <Header />
        <HeaderImage />
        <Menu username={username} />
        <MenuNav>
          <Grid>
            <Row>
              <Col sm={3}>
                <Info username={username} />
                <CommonUsers username={username} />
                <UserMedia username={username} />
              </Col>
              <Router>
                <Col sm={6}>
                  <Router>
                    <React.Fragment>
                      <Route path={`/${username}`} render={() => <Content username={username} />} />
                      <Route
                        exact
                        path={`/${username}/following`}
                        render={() => (
                          <p>
following
                          </p>
                        )}
                      />
                      <Route
                        exact
                        path={`/${username}/followers`}
                        render={() => (
                          <p>
followers
                          </p>
                        )}
                      />
                      <Route
                        exact
                        path={`/${username}/likes`}
                        render={() => (
                          <p>
likes
                          </p>
                        )}
                      />
                      <Route
                        exact
                        path={`/${username}/lists`}
                        render={() => (
                          <p>
lists
                          </p>
                        )}
                      />
                    </React.Fragment>
                  </Router>
                </Col>
              </Router>
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
};
