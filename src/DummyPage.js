import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Text = styled.p``;
const Content = styled.div`
  position: absolute;
  top: 30%;
  left: 48%;
  text-align: center;
  color: #718290;
`;
const Header = styled.h3`
  color: #1da1f2;
`;

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
      <Button>
Go back
      </Button>
    </Content>
  );
}
