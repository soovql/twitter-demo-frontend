import React from "react";
import styled from "styled-components";
import avatarSmall from "./img/Avatar.png";

const TwitterPostWrap = styled.div`
  background: #fff;
  padding: 10px 20px 20px;
`;
const TwitterAuthor = styled.div``;
const TwitterAuthorNickname = styled.div``;
const TwitterPost = styled.div``;

class TwitterCardItem extends React.Component {
  render() {
    return (
      <TwitterPostWrap>
        <TwitterAuthor>Every Interaction</TwitterAuthor>
      </TwitterPostWrap>
    );
  }
}
export default TwitterCardItem;
