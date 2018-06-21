import React from "react";
import styled from "styled-components";
import followersIcon from "./icons/followers.png";
import { NavLink } from "react-router-dom";

const FollowersWrap = styled.div`
  padding-top: 19px;
`;
const FollowerIcon = styled.img``;
const CommonUsers = styled.div``;
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

const CommonUser = ({ userNickname, userPic }) => (
  <Icon src={userPic} alt={userNickname} />
);

export default function() {
  return (
    <FollowersWrap>
      <TitleWrap>
        <FollowerIcon src={followersIcon} />
        <Title to="/followers_you_follow">6 Followers you know</Title>
      </TitleWrap>
      <CommonUsers>
        <CommonUser
          userPic={
            process.env.PUBLIC_URL + "/img/user_avatars/follower_avatar_1.png"
          }
          alt="userNickname1"
        />
        <CommonUser
          userPic={
            process.env.PUBLIC_URL + "/img/user_avatars/follower_avatar_2.png"
          }
          alt="userNickname2"
        />
        <CommonUser
          userPic={
            process.env.PUBLIC_URL + "/img/user_avatars/follower_avatar_3.png"
          }
          alt="userNickname3"
        />
        <CommonUser
          userPic={
            process.env.PUBLIC_URL + "/img/user_avatars/follower_avatar_4.png"
          }
          alt="userNickname4"
        />
        <CommonUser
          userPic={
            process.env.PUBLIC_URL + "/img/user_avatars/follower_avatar_5.png"
          }
          alt="userNickname5"
        />
        <CommonUser
          userPic={
            process.env.PUBLIC_URL + "/img/user_avatars/follower_avatar_6.png"
          }
          alt="userNickname6"
        />
      </CommonUsers>
    </FollowersWrap>
  );
}
