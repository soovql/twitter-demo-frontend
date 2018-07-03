import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const Text = styled.p``;

const Content = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  color: #718290;
`;

const Header = styled.h3`
  color: #1da1f2;
`;

const Back = styled(NavLink)``;

export default function ({ match }) {
  const { direction } = match.params;

  return (
    <Content>
      <Header>
        Howdy, that could be your_
        {direction}
        {' '}
page, but
      </Header>
      <Text>
here be dragons
      </Text>
      <Back to="/">
        <Button>
Go back
        </Button>
      </Back>
    </Content>
  );
}
