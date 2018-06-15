import React from "react";
import styled from "styled-components";
import avatarSmall from "./img/Avatar.png";
import iconPinned from "./img/Icon_Pinned.svg";
import ImgContent from "./img/ImgContent.png";

const TwitterBlockWrap = styled.div`
  background: #fff;
  padding: 10px 20px 20px;
`;
const TwitterPostWrap = styled.div`
  padding-left: 16px;
`;
const TwitterAuthor = styled.div`
  font-weight: bold;
  display: inline-block;
  padding-bottom: 10px;
  font-size: 16px;
`;
const TwitterAuthorNickname = styled.div`
  display: inline-block;
  padding-bottom: 10px;
  paddint-left: 6px;
  font-size: 14px;
`;
const TwitterPost = styled.div`
  padding-bottom: 10px;
`;

const IsPinnedWrap = styled.div`
  display: flex;
  align-items: center;
`;
const IsPinnedImage = styled.div``;
const IsPinnedText = styled.p`
  color: 707e88;
  font-size: 12px;
  line-height: 14px;
  padding-left: 6px;
`;

class TwitterCardItem extends React.Component {
  render() {
    return (
      <TwitterBlockWrap>
        <IsPinnedWrap>
          <IsPinnedImage>
            <img src={iconPinned} alt="Pinned Tweet Icon" />
          </IsPinnedImage>
          <IsPinnedText>Pinned Tweet</IsPinnedText>
        </IsPinnedWrap>
        <TwitterPostWrap>
          <TwitterAuthor>Every Interaction</TwitterAuthor>
          <TwitterAuthorNickname>@EveryInteraction</TwitterAuthorNickname>
          <TwitterPost>
            We’ve made some more resources for all you wonderful #design folk
            everyinteraction.com/resources/ #webdesign #UI
          </TwitterPost>
          <img src={ImgContent} alt="Twitter Post attachment" />
        </TwitterPostWrap>
      </TwitterBlockWrap>
    );
  }
}
export default TwitterCardItem;
