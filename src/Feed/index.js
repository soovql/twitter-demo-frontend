import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export default function() {
  return (
    <Feed>
      <Card />
    </Feed>
  );
}
