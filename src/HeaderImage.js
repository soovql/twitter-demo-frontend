import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 172px;
  width: 172px;
  position: absolute;
  z-index: 2;
  top: 265px;
  left: 102px;
`;

export default function ({ userData }) {
  const Header = styled.div`
    background-image: url(${userData.header});
    background-position: center;
    background-size: cover;
    min-height: 300px;
    background-color: ${userData.theme};
  `;
  return (
    <React.Fragment>
      <Avatar src={userData.avatar} />
      <Header />
    </React.Fragment>
  );
}
