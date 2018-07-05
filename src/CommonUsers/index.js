import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import followersIcon from './icons/followers.png';
import userList from '../data/users';

const Users = styled.div`
  padding-top: 19px;
`;

const FollowerIcon = styled.img``;

const CommonUsers = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Text = styled(NavLink)`
  color: #1da1f2;
  padding-left: 12px;
  font-size: 14px;
  line-height: 16px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.img`
  padding-left: 5px;
  height: 48px;
  width: 48px;
`;

const Title = styled.div`
  display: flex;
  padding-bottom: 8px;
`;

const users = [userList[4], userList[5], userList[6], userList[7], userList[8], userList[9]];

function UserList() {
  const content = users.map(user => (
    <Link key={user.id} to={user.id}>
      <Icon src={user.avatar} alt={user.display_name} />
    </Link>
  ));
  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}

export default function ({ userData }) {
  return (
    <Users>
      <Title>
        <FollowerIcon src={followersIcon} />
        <Text to={`/${userData.id}/followers_you_follow`}>
6 Followers you know
        </Text>
      </Title>
      <CommonUsers>
        <UserList users={users} />
      </CommonUsers>
    </Users>
  );
}
