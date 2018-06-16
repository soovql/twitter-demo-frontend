import React from "react";
import styled from "styled-components";
import avatarSmall from "./img/Avatar.png";
import iconPinned from "./img/Icon_Pinned.svg";
import ImgContent from "./img/ImgContent.png";

const BlockWrap = styled.div`
  background: #fff;
  padding: 10px 20px 20px;
`;
const PostWrap = styled.div`
  padding-left: 16px;
`;
const Author = styled.div`
  font-weight: bold;
  display: inline-block;
  padding-bottom: 10px;
  font-size: 16px;
`;
const AuthorNickname = styled.div`
  display: inline-block;
  padding-bottom: 10px;
  paddint-left: 6px;
  font-size: 14px;
`;
const Post = styled.div`
  padding-bottom: 10px;
`;

const PinnedWrap = styled.div`
  display: flex;
  align-items: center;
`;
const PinnedImage = styled.div``;
const PinnedText = styled.p`
  color: 707e88;
  font-size: 12px;
  line-height: 14px;
  padding-left: 6px;
`;

class TwitterCard extends React.Component {
  render() {
    return (
      <BlockWrap>
        <PinnedWrap>
          <PinnedImage>
            <img src={iconPinned} alt="Pinned Tweet Icon" />
          </PinnedImage>
          <PinnedText>Pinned Tweet</PinnedText>
        </PinnedWrap>
        <PostWrap>
          <Author>Every Interaction</Author>
          <AuthorNickname>@EveryInteraction</AuthorNickname>
          <Post>
            We’ve made some more resources for all you wonderful #design folk
            everyinteraction.com/resources/ #webdesign #UI
          </Post>
          <img src={ImgContent} alt="Twitter Post attachment" />
        </PostWrap>
      </BlockWrap>
    );
  }
}
export default TwitterCard;
