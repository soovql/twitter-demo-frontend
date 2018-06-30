import React from 'react';
import styled from 'styled-components';

export default function ({ userData }) {
  const Header = styled.div`
    background-image: url(${userData.header});
    background-position: center;
    background-size: cover;
    min-height: 300px;
    background-color: ${userData.theme};
  `;
  return <Header />;
}
