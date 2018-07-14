
import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import iconTick from "./icons/tick.png";
import iconJoined from "./icons/joined.svg";
import iconLink from "./icons/link.svg";
import iconLocation from "./icons/location.svg";
import Button from "../Button";

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
  color: #14171a;
  p {
    margin: 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const About = styled.ul`
  padding: 0;
`;

const Url = styled.a`
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

interface User {
  userData: {
    display_name: string,
    verified: boolean,
    username: string,
    note: string,
    location: string,
    url: boolean,
    created_at: string,
    followed: boolean
  };
}

export default (param: User) => (
  <UserInfo>
    <Name>
      {param.userData.display_name}
      {param.userData.verified && (
        <Tick
          src={iconTick}
          title="Verified account"
          alt="Approved User Tick"
        />
      )}
    </Name>
    <Nickname>@{param.userData.username}</Nickname>
    <Description
      dangerouslySetInnerHTML={{
        __html: param.userData.note
      }}
    />
    <About>
      {param.userData.location && (
        <ExtrasInfo>
          <img src={iconLocation} alt="" />
          <ExtrasContent>{param.userData.location}</ExtrasContent>
        </ExtrasInfo>
      )}
      <ExtrasInfo>
        <img src={iconLink} alt="" />
        <ExtrasContent>
          <Url href={param.userData.url}>{param.userData.url}</Url>
        </ExtrasContent>
      </ExtrasInfo>
      <ExtrasInfo>
        <img src={iconJoined} alt="" />
        <ExtrasContent>
          Joined
          {format(param.userData.created_at, " MMMM YYYY ")}
        </ExtrasContent>
      </ExtrasInfo>
    </About>
    <Buttons>
      <Button white>Tweet to</Button>
      {param.userData.followed && <Button white>Message</Button>}
    </Buttons>
  </UserInfo>
);
