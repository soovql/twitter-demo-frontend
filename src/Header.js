import React from "react";
import styled from "styled-components";
import iconHome from "./img/Icon_Home.svg";
import iconMoments from "./img/Icon_Moments.svg";
import iconNotifications from "./img/Icon_Notifications.svg";
import iconMessages from "./img/Icon_Messages.svg";
import twitterLogo from "./img/Icon_TwitterLogo.svg";
import iconMagnifier from "./img/Icon_Magnifier.svg";
import avatarSmall from "./img/Avatar.png";

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 6px 0;
  background: #fff;
`;

const IconBox = styled.div`
  display: inline-flex;
`;
const NavIcon = styled.button`
  display: flex;
  align-items: center;
  color: #667580;
  font-size: 13px;
  font-weight: bold;
  line-height: 15px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    color: #1da1f2;
  }
`;
const NavIconTitle = styled.div`
  padding-left: 6px;
`;

const TwitterIcon = styled.div`
  display: flex;
`;

const UserBox = styled.div`
  display: flex;
`;
const SearchBoxForm = styled.form`
  display: flex;
  flex-direction: row;
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
const SearchBoxInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  type: "text";
`;

const SearchBoxButton = styled.button`
  background-image: url(${iconMagnifier});
  border: none;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center;
  background-size: contain;
  cursor: pointer;
  outline: none;
`;

const UserAvatarSmall = styled.div`
  border-radius: 50%;
  padding: 0 18px;
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

class Header extends React.Component {
  render() {
    return (
      <NavBar>
        <IconBox>
          <NavIcon>
            <img src={iconHome} alt="Icon Home" />
            <NavIconTitle>Home</NavIconTitle>
          </NavIcon>
          <NavIcon>
            <img src={iconMoments} alt="Icon Moments" />
            <NavIconTitle>Moments</NavIconTitle>
          </NavIcon>
          <NavIcon>
            <img src={iconNotifications} alt="Icon Notifications" />
            <NavIconTitle>Notifications</NavIconTitle>
          </NavIcon>
          <NavIcon>
            <img src={iconMessages} alt="Icon Messages" />
            <NavIconTitle>Messages</NavIconTitle>
          </NavIcon>
        </IconBox>
        <TwitterIcon>
          <img src={twitterLogo} alt="Twitter Logo" />
        </TwitterIcon>
        <UserBox>
          <SearchBoxForm>
            <SearchBoxInput placeholder="Search Twitter" />
            <SearchBoxButton />
          </SearchBoxForm>
          <UserAvatarSmall>
            <a href="/profile" title="Profile and Settings">
              <img src={avatarSmall} alt="Small User Avatar" />
            </a>
          </UserAvatarSmall>
          <ButtonTweet>Tweet</ButtonTweet>
        </UserBox>
      </NavBar>
    );
  }
}
export default Header;
