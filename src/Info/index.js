import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import iconTick from './icons/tick.png';
import iconJoined from './icons/joined.svg';
import iconLink from './icons/link.svg';
import iconLocation from './icons/location.svg';
import Button from '../Button';

const UserInfo = styled.div`
  margin-top: 30px;
  position: relative;
`;

const Name = styled.div`
  color: #14171a;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  padding-right: 6px;
`;

const Nickname = styled.div`
  color: #697787;
  font-size: 14px;
  line-height: 21px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: 14171a;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;


const About = styled.ul`
  padding: 0;
`;

const Url = styled(NavLink)`
  color: #1da1f2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ExtrasInfo = styled.li`
  list-style: none;
  font-size: 14px;
  color: #657786;
  line-height: 28px;
  display: flex;
`;

const ExtrasContent = styled.div`
  padding-left: 6px;
`;

const Tick = styled.img`
  padding-left: 5px;
  vertical-align: middle;
`;
export default ({ userData }) => (
  <UserInfo>

    <Name>
      {userData.name}
      {userData.verified && (
        <Tick src={iconTick} title="Verified account" alt="Approved User Tick" />
      )}
    </Name>

    <Nickname>
      @
      {userData.nickname}
    </Nickname>
    <Description>
      {userData.about}
    </Description>
    <About>
      <ExtrasInfo>
        <img src={iconLocation} alt="" />
        <ExtrasContent>
          {userData.location}
        </ExtrasContent>
      </ExtrasInfo>
      <ExtrasInfo>
        <img src={iconLink} alt="" />
        <ExtrasContent>
          <Url to={userData.url}>
            {' '}
            {userData.url}
          </Url>
        </ExtrasContent>
      </ExtrasInfo>
      <ExtrasInfo>
        <img src={iconJoined} alt="" />
        <ExtrasContent>
          {userData.joined}
        </ExtrasContent>
      </ExtrasInfo>
    </About>
    <Buttons>
      <Button white>
Tweet to
      </Button>
      {userData.followed && (
      <Button white>
Message
      </Button>
      )}
    </Buttons>
  </UserInfo>
);
