import React from "react";
import styled from "styled-components";
import iconTick from "./icons/tick.png";
import iconJoined from "./icons/joined.svg";
import iconLink from "./icons/link.svg";
import iconLocation from "./icons/location.svg";
import { Button } from "../Button";

const UserInfo = styled.div`
  margin-top: 30px;
  position: relative;
`;

const Name = styled.div`
  color: #14171a;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  float: left;
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

const Avatar = styled.img`
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 172px;
  width: 172px;
  position: absolute;
  z-index: 2;
  left: 5%;
  top: -67%;
`;

const About = styled.ul`
  padding: 0;
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

export default function() {
  return (
    <UserInfo>
      <Avatar src={`${process.env.PUBLIC_URL}/img/avatar.png`} />
      <Name>Every Interaction</Name>
      <img src={iconTick} title="Verified account" alt="Approved User Tick" />
      <Nickname>@EveryInteract</Nickname>
      <Description>
        UX Design studio focussed problem solving creativity. Design to us is
        how can we make things *work* amazing.
      </Description>
      <About>
        <ExtrasInfo>
          <img src={iconLocation} alt="" />
          <ExtrasContent>London, UK </ExtrasContent>
        </ExtrasInfo>
        <ExtrasInfo>
          <img src={iconLink} alt="" />
          <ExtrasContent>everyinteraction.com</ExtrasContent>
        </ExtrasInfo>
        <ExtrasInfo>
          <img src={iconJoined} alt="" />
          <ExtrasContent>Joined May 2008</ExtrasContent>
        </ExtrasInfo>
      </About>
      <Button primary>Tweet to</Button>
      <Button primary>Message</Button>
    </UserInfo>
  );
}
