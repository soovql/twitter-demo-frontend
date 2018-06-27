import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import followersIcon from './icons/followers.png';

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
`;

const Title = styled.div`
  display: flex;
  padding-bottom: 8px;
`;

const users = [
  {
    id: 1,
    name: 'Chris Kew',
    nickname: '/chriskew',
    src: `${process.env.PUBLIC_URL}/img/user_avatars/follower_avatar_1.png`,
  },
  {
    id: 2,
    name: 'Adam Blakemore',
    nickname: '/adamCBlakemore',
    src: `${process.env.PUBLIC_URL}/img/user_avatars/follower_avatar_2.png`,
  },
  {
    id: 3,
    name: 'Jon Darke',
    nickname: '/darkejon',
    src: `${process.env.PUBLIC_URL}/img/user_avatars/follower_avatar_3.png`,
  },
  {
    id: 4,
    name: 'Inkbot Design',
    nickname: '/inkbotDesign',
    src: `${process.env.PUBLIC_URL}/img/user_avatars/follower_avatar_4.png`,
  },
  {
    id: 5,
    name: 'Chris Roberts',
    nickname: '/designtestlearn',
    src: `${process.env.PUBLIC_URL}/img/user_avatars/follower_avatar_5.png`,
  },
  {
    id: 6,
    name: 'Sophie Delrot',
    nickname: '/sophiedelrot',
    src: `${process.env.PUBLIC_URL}/img/user_avatars/follower_avatar_6.png`,
  },
];

function UserList() {
  const content = users.map(user => (
    <Link key={user.id} to={user.nickname}>
      <Icon src={user.src} alt={user.name} />
    </Link>
  ));
  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}

export default function ({ username }) {
  return (
    <Users>
      <Title>
        <FollowerIcon src={followersIcon} />
        <Text to={`/${username}/followers_you_follow`}>
6 Followers you know
        </Text>
      </Title>
      <CommonUsers>
        <UserList users={users} />
      </CommonUsers>
    </Users>
  );
}
