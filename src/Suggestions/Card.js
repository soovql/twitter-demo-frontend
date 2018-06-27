import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import Button from '../Button';
import iconTick from './icons/tick.png';
import iconDelete from './icons/delete.png';

const Avatar = styled.img`
  align-self: center;
`;

const Name = styled(NavLink)`
  font-weight: bold;
  color: #333;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
    color: #004287;
  }
`;

const IconDelete = styled.img`
  position: absolute;
  right: 0;
`;

const User = styled.div`
  padding: 0 20px 9px 2px;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
`;

const NickName = styled.div`
  color: #657786;
  overflow: hidden;
  padding-left: 2px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Suggestion = styled.div`
  position: relative;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  padding: 10px 0 16px 10px;
`;

const Tick = styled.img`
  vertical-align: middle;
  padding: 0 2px 0 2px;
  align-self: center;
`;

const Block = styled.div`
  padding-left: 10px;
  overflow: hidden;
`;

const users = [
  {
    id: 1,
    name: 'AppleInsider',
    nickname: '/appleinsider',
    src: `${process.env.PUBLIC_URL}/img/user_avatars/suggestion_avatar_1.png`,
  },
  {
    id: 2,
    tick: true,
    name: 'Creode',
    nickname: '/Creode',
    src: `${process.env.PUBLIC_URL}/img/user_avatars/suggestion_avatar_2.png`,
  },
  {
    id: 3,
    name: 'Epiphany Search',
    nickname: '/Epiphany',
    src: `${process.env.PUBLIC_URL}/img/user_avatars/suggestion_avatar_3.png`,
  },
];

export default function UserList() {
  const content = users.map(user => (
    <Suggestion key={user.id}>
      <Link to={user.nickname}>
        <Avatar src={user.src} />
      </Link>
      <Block>
        <User>
          <Name to={user.nickname}>
            {user.name}
          </Name>
          {user.tick && <Tick src={iconTick} />}
          <NickName>
            {user.nickname}
          </NickName>
        </User>
        <Button>
Follow
        </Button>
      </Block>
      <IconDelete src={iconDelete} />
    </Suggestion>
  ));
  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}
