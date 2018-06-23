import React from "react";
import styled from "styled-components";
import followersIcon from "./icons/followers.png";
import { NavLink, Link } from "react-router-dom";

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
    name: `username1`,
    nickname: `nickname1`,
    src: `${process.env.PUBLIC_URL}/img/user_avatars/follower_avatar_1.png`
  },
  {
    name: `username2`,
    nickname: `nickname2`,
    src: `${process.env.PUBLIC_URL}/img/user_avatars/follower_avatar_2.png`
  },
  {
    name: `username3`,
    nickname: `nickname3`,
    src: `${process.env.PUBLIC_URL}/img/user_avatars/follower_avatar_3.png`
  },
  {
    name: `username4`,
    nickname: `nickname4`,
    src: `${process.env.PUBLIC_URL}/img/user_avatars/follower_avatar_4.png`
  },
  {
    name: `username5`,
    nickname: `nickname5`,
    src: `${process.env.PUBLIC_URL}/img/user_avatars/follower_avatar_5.png`
  },
  {
    name: `username6`,
    nickname: `nickname6`,
    src: `${process.env.PUBLIC_URL}/img/user_avatars/follower_avatar_6.png`
  }
];

function UserList() {
  const content = users.map(user => (
    <Link to={user.nickname} title={user.name}>
      <Icon src={user.src} alt={user.name} />
    </Link>
  ));
  return <React.Fragment>{content}</React.Fragment>;
}

export default function() {
  return (
    <Users>
      <Title>
        <FollowerIcon src={followersIcon} />
        <Text to="/followers_you_follow">6 Followers you know</Text>
      </Title>
      <CommonUsers>
        <UserList users={users} />
      </CommonUsers>
    </Users>
  );
}
