import React from "react";
import styled from "styled-components";
import followersIcon from "./followers.png";
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
          userPic={process.env.PUBLIC_URL + "/img/user_avatars/follower_1.png"}
          alt="userNickname"
        />
        <CommonUser
          userPic={process.env.PUBLIC_URL + "/img/user_avatars/follower_2.png"}
          alt="userNickname"
        />
        <CommonUser
          userPic={process.env.PUBLIC_URL + "/img/user_avatars/follower_3.png"}
          alt="userNickname"
        />
        <CommonUser
          userPic={process.env.PUBLIC_URL + "/img/user_avatars/follower_4.png"}
          alt="userNickname"
        />
        <CommonUser
          userPic={process.env.PUBLIC_URL + "/img/user_avatars/follower_5.png"}
          alt="userNickname"
        />
        <CommonUser
          userPic={process.env.PUBLIC_URL + "/img/user_avatars/follower_6.png"}
          alt="userNickname"
        />
      </CommonUsers>
    </FollowersWrap>
  );
}
