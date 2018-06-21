import React from "react";
import styled from "styled-components";
import followersIcon from "./icons/followers.png";
import { NavLink, Link } from "react-router-dom";

const FollowersWrap = styled.div`
  padding-top: 19px;
`;
const FollowerIcon = styled.img``;
const CommonUsers = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled(NavLink)`
  color: #1da1f2;
  padding-left: 12px;
  font-size: 14px;
  line-height: 16px;
  text-decoration: none;
`;
const Icon = styled.img`
  padding-left: 5px;
`;
const TitleWrap = styled.div`
  display: flex;
  padding-bottom: 8px;
`;

const users = [
  {
    name: "username1",
    src: process.env.PUBLIC_URL + "/img/user_avatars/follower_avatar_1.png"
  },
  {
    name: "username2",
    src: process.env.PUBLIC_URL + "/img/user_avatars/follower_avatar_2.png"
  },
  {
    name: "username3",
    src: process.env.PUBLIC_URL + "/img/user_avatars/follower_avatar_3.png"
  },
  {
    name: "username4",
    src: process.env.PUBLIC_URL + "/img/user_avatars/follower_avatar_4.png"
  },
  {
    name: "username5",
    src: process.env.PUBLIC_URL + "/img/user_avatars/follower_avatar_5.png"
  },
  {
    name: "username6",
    src: process.env.PUBLIC_URL + "/img/user_avatars/follower_avatar_6.png"
  }
];

function UserList() {
  const content = users.map(user => (
    <Link to={user.name}>
      <Icon src={user.src} alt={user.name} />
    </Link>
  ));
  return <div>{content}</div>;
}

export default function() {
  return (
    <FollowersWrap>
      <TitleWrap>
        <FollowerIcon src={followersIcon} />
        <Title to="/followers_you_follow">6 Followers you know</Title>
      </TitleWrap>
      <CommonUsers>
        <UserList users={users} />
      </CommonUsers>
    </FollowersWrap>
  );
}
