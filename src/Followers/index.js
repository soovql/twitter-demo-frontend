import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Col, Row } from 'react-flexbox-grid';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  margin-bottom: 10px;
  position: relative;
`;

const Header = styled.img`
  width: 100%;
  max-height: 90px;
`;

const AvatarWrap = styled(NavLink)`
  position: absolute;
  z-index: 2;
  top: -45px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  display: block;
  height: 70px;
  width: 70px;
`;

const Name = styled(NavLink)`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const UserName = styled(NavLink)`
  color: #66757f;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
`;

const Info = styled.div`
  padding: 13px 15px;
  position: relative;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class Followers extends React.Component {
  state = {
    followers: [],
  };

  componentDidMount() {
    const { userData } = this.props;
    const hostname = 'https://twitter-demo.erodionov.ru';
    const secretCode = process.env.REACT_APP_SECRET_CODE;
    // fetch followers list
    fetch(`${hostname}/api/v1/accounts/${userData.id}/followers/?access_token=${secretCode}`)
      .then(response => response.json())
      .then(list => this.setState({ followers: list }));
  }

  render() {
    const { followers } = this.state;
    const followerCard = followers.map(person => (
      <Col lg={4} md={6} sm={12}>
        <Card key={person.id}>
          <Header src={person.header_static} />
          <Info>
            <AvatarWrap to={`/${person.id}`}>
              <Avatar src={person.avatar_static} />
            </AvatarWrap>
            <Actions>
button
            </Actions>
            <About>
              <Name to={`/${person.id}`}>
                {person.display_name}
              </Name>
              <UserName to={`/${person.id}`}>
                @
                {person.username}
              </UserName>
              <Description
                dangerouslySetInnerHTML={{
                  __html: person.note,
                }}
              />
            </About>
          </Info>
        </Card>
      </Col>
    ));
    return (
      <Grid>
        <Row>
          {followerCard}
        </Row>
      </Grid>
    );
  }
}
