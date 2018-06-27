import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import iconHome from './icons/home.svg';
import iconMoments from './icons/moments.svg';
import iconNotifications from './icons/notifications.svg';
import iconMessages from './icons/messages.svg';
import twitterLogo from './icons/logo.svg';
import iconMagnifier from './icons/magnifier.svg';

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  background: #fff;
`;

const IconBox = styled.div`
  display: inline-flex;
`;

const StyledLink = styled(NavLink)`
  color: #667580;
  font-size: 13px;
  font-weight: bold;
  line-height: 15px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-bottom: 2px solid #fff;
  &:visited {
    color: #66757f;
  }
  &.active {
    color: #1da1f2;
    border-bottom: 2px solid #1da1f2;
  }
  &:hover {
    color: #1da1f2;
    border-bottom: 2px solid #1da1f2;
  }
`;

const TitleIcon = styled.div`
  padding: 0 15px 0 6px;
`;

const TwitterIcon = styled.div`
  display: flex;
  padding: 6px 0;
`;

const UserBox = styled.div`
  display: flex;
  padding: 6px 0;
`;

const SearchBox = styled.form`
  display: flex;
  justify-content: space-between;
  background-color: #f5f8fa;
  color: #687b8a;
  border: 1px solid #e6ecf0;
  box-sizing: border-box;
  border-radius: 100px;
  padding: 9px 132px 8px 11px;
  max-width: 220px;
  font-size: 12px;
  line-height: 14px;
  outline: none;
  &:hover {
    border: 1px solid #1da1f2;
    background-color: #fff;
  }
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
`;

const Button = styled.button`
  background-image: url(${iconMagnifier});
  border: none;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center;
  background-size: contain;
  cursor: pointer;
  outline: none;
`;

const Avatar = styled(NavLink)`
  padding: 0 18px;
`;

const Img = styled.img`
  border-radius: 50%;
`;

const ButtonTweet = styled.button`
  background-color: #4ab3f4;
  color: #fff;
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  border-radius: 100px;
  border: none;
  outline: none;
  &:hover {
    background-color: #1da1f2;
  }
`;
const Navigation = () => (
  <IconBox>
    <StyledLink exact to="/">
      <img src={iconHome} alt="Icon Home" />
      <TitleIcon>
Home
      </TitleIcon>
    </StyledLink>

    <StyledLink to="/moments">
      <img src={iconMoments} alt="Icon Home" />
      <TitleIcon>
        {' '}
Moments
      </TitleIcon>
      {' '}
    </StyledLink>

    <StyledLink to="/notifications">
      <img src={iconNotifications} alt="Icon Notifications" />
      {' '}
      <TitleIcon>
Notifications
      </TitleIcon>
      {' '}
    </StyledLink>

    <StyledLink to="/messages">
      <img src={iconMessages} alt="Icon Messages" />
      <TitleIcon>
        {' '}
Messages
      </TitleIcon>
      {' '}
    </StyledLink>
  </IconBox>
);

export default () => (
  <NavBar>
    <Navigation />
    <TwitterIcon>
      <img src={twitterLogo} alt="Twitter Logo" />
    </TwitterIcon>
    <UserBox>
      <SearchBox>
        <Input type="text" placeholder="Search Twitter" />
        <Button />
      </SearchBox>
      <Avatar to="/profile" title="Profile and Settings">
        <Img src={`${process.env.PUBLIC_URL}/img/avatar_small.png`} alt="Small User Avatar" />
      </Avatar>
      <ButtonTweet>
Tweet
      </ButtonTweet>
    </UserBox>
  </NavBar>
);
