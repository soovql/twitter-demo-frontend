import React from "react";
import styled from "styled-components";
import iconPinned from "./icons/pinned.svg";
import commentIcon from "./icons/comments.png";
import retweetIcon from "./icons/retweet.png";
import likeIcon from "./icons/like.png";
import directMessageIcon from "./icons/envelope.png";

const BlockWrap = styled.div`
  display: flex;
`;

const Author = styled.div`
  font-weight: bold;
  display: inline-block;
  padding-bottom: 10px;
  font-size: 16px;
`;
const Nickname = styled.div`
  display: inline-block;
  padding-bottom: 10px;
  padding-left: 6px;
  font-size: 14px;
  color: #788a98;
  font-weight: bold;
`;
const Post = styled.div``;

const SmallUserpic = styled.img`
  border-radius: 50%;
  height: 32px;
  width: auto;
  margin: 5px 15px 0 0;
`;
const PinnedWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 45px;
`;
const PinnedImage = styled.div``;
const PinnedText = styled.p`
  color: #707e88;
  font-size: 12px;
  line-height: 14px;
  padding-left: 6px;
`;
const PostWrap = styled.div``;

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px 9px 9px 17px;
  border-bottom: 1px solid #e1e8ed;
`;
const TimeStamp = styled.div`
  display: inline-block;
  padding-bottom: 10px;
  padding-left: 6px;
  font-size: 14px;
  color: #788a98;
  font-weight: bold;
`;
const UploadedImage = styled.img`
  width: 100%;
`;

const PreviewImage = styled.img``;
const PreviewText = styled.p`
  text-align: left;
  font-size: 15px;
  margin-top: 2px;
`;
const PreviewBox = styled.div`
  border: 1px solid #e1e8ed;
  display: flex;
`;
const PreviewTitle = styled.p`
  margin-bottom: 0;
  font-weight: bold;
  font-size: 15px;
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px 0;
`;
const SocialIcons = styled.div`
  display: flex;
  margin: 14px 0 14px 45px;
`;
const Icon = styled.img`
  height: 100%;
`;
const Counter = styled.div`
  color: #667580;
  font-weight: bold;
  padding-left: 10px;
`;
const CountWrap = styled.div`
  margin-right: 40px;
  display: flex;
  align-items: center;
  align-self: safe center;
`;
export const Card = ({
  pinned,
  userPic,
  authorName,
  authorNickname,
  postText,
  timeTweeted,
  userImage,
  textPreview,
  previewBox,
  imgPreview,
  titlePreview,
  countComments,
  countReposts,
  countLikes
}) => (
  <CardWrap>
    {pinned && (
      <PinnedWrap>
        <PinnedImage>
          <img src={iconPinned} alt="Pinned Tweet Icon" />
        </PinnedImage>
        <PinnedText>Pinned Tweet</PinnedText>
      </PinnedWrap>
    )}
    <BlockWrap>
      <SmallUserpic src={userPic} alt="" />
      <PostWrap>
        <Author>{authorName}</Author>
        <Nickname>{authorNickname}</Nickname>
        <TimeStamp>{timeTweeted}</TimeStamp>
        <Post>{postText}</Post>
        <UploadedImage src={userImage} alt="" />
        {previewBox && (
          <PreviewBox>
            <PreviewImage src={imgPreview} alt="" />
            <TextWrap>
              <PreviewTitle>{titlePreview}</PreviewTitle>
              <PreviewText>{textPreview}</PreviewText>
            </TextWrap>
          </PreviewBox>
        )}
      </PostWrap>
    </BlockWrap>
    <SocialIcons>
      <CountWrap>
        <Icon src={commentIcon} alt="" />
        <Counter>{countComments}</Counter>
      </CountWrap>
      <CountWrap>
        <Icon src={retweetIcon} alt="" />
        <Counter>{countReposts}</Counter>
      </CountWrap>
      <CountWrap>
        <Icon src={likeIcon} alt="" />
        <Counter>{countLikes}</Counter>
      </CountWrap>
      <CountWrap>
        <Icon src={directMessageIcon} alt="" />
      </CountWrap>
    </SocialIcons>
  </CardWrap>
);
