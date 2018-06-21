import React from "react";
import styled from "styled-components";
import Card from "./TwitterCard";

const FeedWrap = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export const Feed = props => (
  <FeedWrap>
    <Card />
  </FeedWrap>
);
