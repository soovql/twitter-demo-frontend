import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Block = styled.div`
  margin: 23px 0 50px 0;
  font-size: 13px;
  line-height: 18px;
  display: flex;
  flex-wrap: wrap;
`;

const StyledLink = styled(NavLink)`
  color: #718290;
  padding-left: 5px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.span`
  color: #718290;
`;

export default function() {
  return (
    <Block>
      <Copyright>© 2018 Twitter</Copyright>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/support">Help Center</StyledLink>
      <StyledLink to="/tos">Terms</StyledLink>
      <StyledLink to="/privacy">Privacy policy</StyledLink>
      <StyledLink to="/cookies">Cookies</StyledLink>
      <StyledLink to="/ads">Ads info</StyledLink>
    </Block>
  );
}
