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

export default ({ username }) => (
  <MenuNav>
    <Grid>
      <Row>
        <Col sm={6} smOffset={3}>
          <Statistics>
            <StyledLink exact to={`/${username}`}>
              <Name>
Tweets
              </Name>
              <Count>
8,058
              </Count>
            </StyledLink>

            <StyledLink exact to={`/${username}/following`}>
              <Name>
Following
              </Name>
              <Count>
721
              </Count>
            </StyledLink>

            <StyledLink exact to={`/${username}/followers`}>
              <Name>
Followers
              </Name>
              <Count>
1,815
              </Count>
            </StyledLink>

            <StyledLink exact to={`/${username}/likes`}>
              <Name>
Likes
              </Name>
              <Count>
460
              </Count>
            </StyledLink>

            <StyledLink to={`/${username}/lists`}>
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
