import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import twitterLogo from '../icons/logo.svg';

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const Footer = styled.div`
  background: #fff;
  padding: 15px 50px;
  justify-content: center;
  display: flex;
`;
const Logo = styled.img`
  filter: grayscale(1) brightness(0);
`;

export default ({ tweetsData }) => (
  <React.Fragment>
    <Feed>
      <Card tweetsData={tweetsData} />
    </Feed>
    <Footer>
      <Logo src={twitterLogo} alt="" />
    </Footer>
  </React.Fragment>
);
