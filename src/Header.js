import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import styled from "styled-components";
import iconHome from "./img/Icon_Home.svg";
import iconMoments from "./img/Icon_Moments.svg";
import iconNotifications from "./img/Icon_Notifications.svg";
import iconMessages from "./img/Icon_Messages.svg";
import twitterLogo from "./img/Icon_TwitterLogo.svg";
import iconMagnifier from "./img/Icon_Magnifier.svg";

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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

const IconTitle = styled.div`
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
const Navigation = () => (
  <Router>
    <IconBox>
      <StyledLink to="/EveryInteraction" exact={true}>
        <img src={iconHome} alt="Icon Home" />
        <IconTitle>Home</IconTitle>
      </StyledLink>

      <StyledLink to="/moments">
        <img src={iconMoments} alt="Icon Home" />
        <IconTitle> Moments</IconTitle>{" "}
      </StyledLink>

      <StyledLink to="/notifications">
        <img src={iconNotifications} alt="Icon Notifications" />{" "}
        <IconTitle>Notifications</IconTitle>{" "}
      </StyledLink>

      <StyledLink to="/messages">
        <img src={iconMessages} alt="Icon Messages" />
        <IconTitle> Messages</IconTitle>{" "}
      </StyledLink>
    </IconBox>
  </Router>
);

class Header extends React.Component {
  render() {
    return (
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
          <UserAvatarSmall>
            <a href="/profile" title="Profile and Settings">
              <img
                src={process.env.PUBLIC_URL + "/img/profile_image_small.png"}
                alt="Small User Avatar"
              />
            </a>
          </UserAvatarSmall>
          <ButtonTweet>Tweet</ButtonTweet>
        </UserBox>
      </NavBar>
    );
  }
}
export default Header;
