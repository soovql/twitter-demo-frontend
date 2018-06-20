import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../Button";
import iconTick from "./tick.png";
import iconDelete from "./delete.png";

const Avatar = styled.img`
  align-self: center;
`;
const Name = styled(NavLink)`
  font-weight: bold;
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #004287;
  }
`;
const IconDelete = styled.img`
  position: absolute;
  right: 17px;
  top: 17px;
`;
const NameWrap = styled.div`
  width: 100%;
  padding-left: 2px;
`;
const NickName = styled.div`
  color: #657786;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-bottom: 9px;
`;
const ListItem = styled.div`
  padding-top: 10px;
  position: relative;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
`;
const Tick = styled.img`
  vertical-align: middle;
  padding: 0 2px 0 2px;
  align-items: center;
`;
const Wrap = styled.div`
  padding: 0 0 16px 10px;
`;

const users = [
  {
    name: "AppleInsider",
    nickname: "@appleinsider",
    src: process.env.PUBLIC_URL + "/img/user_avatars/suggestion_avatar_1.png"
  },
  {
    tick: true,
    name: "Creode",
    nickname: "@Creode",
    src: process.env.PUBLIC_URL + "/img/user_avatars/suggestion_avatar_2.png"
  },
  {
    name: "Epiphany Search",
    nickname: "@Epiphany",
    src: process.env.PUBLIC_URL + "/img/user_avatars/suggestion_avatar_3.png"
  }
];

export default function UserList() {
  const content = users.map(user => (
    <div>
      <ListItem>
        <Link to={user.name}>
          <Avatar src={user.src} />
        </Link>
        <Wrap>
          <NameWrap>
            <Name to={user.name}>{user.name}</Name>
            {user.tick && <Tick src={iconTick} />}
            <NickName>{user.nickname}</NickName>
          </NameWrap>
          <Button>Follow</Button>
        </Wrap>
        <IconDelete src={iconDelete} />
      </ListItem>
    </div>
  ));
  return <div>{content}</div>;
}
