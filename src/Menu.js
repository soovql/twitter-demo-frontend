import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Button from './Button';
import iconMore from './icons/more.png';

const MenuNav = styled.div`
  padding-top: 9px;
  margin-bottom: 8px;
  background: #fff;
`;

const FollowNav = styled.div`
  text-align: right;
`;

const More = styled.div`
  background-image: url(${iconMore});
  background-repeat: no-repeat;
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-left: 8px;
`;

const Statistics = styled.ul`
  padding: 0;
  margin: 0;
`;

const Name = styled.div`
  display: block;
  font-size: 12px;
  line-height: 21px;
`;

const Count = styled.div`
  display: block;
  font-size: 18px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  list-style: none;
  color: #788a98;
  font-weight: bold;
  padding: 0 11px 8px;
  border-bottom: 2px solid #fff;
  text-align: center;
  &:hover {
    border-bottom: 2px solid #1da1f2;
  }
  &.active {
    border-bottom: 2px solid #1da1f2;
  }
  &.active ${Count} {
    color: #1da1f2;
  }
  &:hover ${Count} {
    color: #1da1f2;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 172px;
  width: 172px;
  position: absolute;
  z-index: 2;
  bottom: 50px;
  top: 260px;
`;

export default ({ userData }) => (
  <MenuNav>
    <Grid>
      <Row>
        <Col sm={3}>
          <Avatar src={userData.avatar} />
        </Col>
        <Col sm={6}>
          <Statistics>
            <StyledLink exact to={`/${userData.nickname}`}>
              <Name>
Tweets
              </Name>
              <Count>
8,058
              </Count>
            </StyledLink>

            <StyledLink exact to={`/${userData.nickname}/following`}>
              <Name>
Following
              </Name>
              <Count>
721
              </Count>
            </StyledLink>

            <StyledLink exact to={`/${userData.nickname}/followers`}>
              <Name>
Followers
              </Name>
              <Count>
1,815
              </Count>
            </StyledLink>

            <StyledLink exact to={`/${userData.nickname}/likes`}>
              <Name>
Likes
              </Name>
              <Count>
460
              </Count>
            </StyledLink>

            <StyledLink to={`/${userData.nickname}/lists`}>
              <Name>
Lists
              </Name>
              <Count>
2
              </Count>
            </StyledLink>
          </Statistics>
        </Col>
        <Col sm={3}>
          <FollowNav>
            <Button>
Follow
            </Button>
            <More />
          </FollowNav>
        </Col>
      </Row>
    </Grid>
  </MenuNav>
);
