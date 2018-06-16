import React from "react";
import styled from "styled-components";
import iconPinned from "./img/Icon_Pinned.svg";

const BlockWrap = styled.div`
  padding: 10px 10px 10px 20px;
  border-bottom: 1px solid #e1e8ed;
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
  padding-left: 6px;
  font-size: 14px;
  color: #788a98;
`;
const Post = styled.div`
  padding-bottom: 10px;
`;
const Link = styled.a`
  color: #1da1f2;
`;
const SmallUserpic = styled.div`
  border-radius: 50%;
  height: 32px;
  width: 32px;
  margin: 20px 0 0 10px;
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
const Feed = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
`;
const Card = styled.div`
  display: flex;
`;
class TwitterCard extends React.Component {
  render() {
    return (
      <Feed>
        <Card>
          <SmallUserpic>
            <img
              src={process.env.PUBLIC_URL + "/img/profile_image_small.png"}
              alt="user picture"
            />
          </SmallUserpic>
          <BlockWrap>
            <PinnedWrap>
              <PinnedImage>
                <img src={iconPinned} alt="Pinned Tweet Icon" />
              </PinnedImage>
              <PinnedText>Pinned Tweet</PinnedText>
            </PinnedWrap>

            <Author>Every Interaction</Author>
            <AuthorNickname>@EveryInteraction</AuthorNickname>
            <Post>
              We’ve made some more resources for all you wonderful{" "}
              <Link>#design</Link> folk{" "}
              <Link>everyinteraction.com/resources/</Link>{" "}
              <Link>#webdesign</Link> <Link>#UI</Link>
            </Post>
            <img
              src={process.env.PUBLIC_URL + "/img/ImgContent.png"}
              alt="Twitter Post attachment"
              width="100%"
            />
          </BlockWrap>
        </Card>
        <Card>
          <SmallUserpic>
            <img
              src={process.env.PUBLIC_URL + "/img/profile_image_small.png"}
              alt="user picture"
            />
          </SmallUserpic>
          <BlockWrap>
            <Author>Every Interaction</Author>
            <AuthorNickname>@EveryInteraction</AuthorNickname>
            <Post>
              Our new website concept; Taking you from… @ Every Interaction{" "}
              <Link>instagram.com/p/BNFGrfhBP3M/</Link>
            </Post>
          </BlockWrap>{" "}
        </Card>
        <Card>
          <SmallUserpic>
            <img
              src={process.env.PUBLIC_URL + "/img/profile_image_small.png"}
              alt="user picture"
            />
          </SmallUserpic>
          <BlockWrap>
            <Author>Every Interaction</Author>
            <AuthorNickname>@EveryInteraction</AuthorNickname>
            <Post>
              Variable web fonts are coming, and will open a world of
              opportunities for weight use online
            </Post>
          </BlockWrap>
        </Card>
      </Feed>
    );
  }
}
export default TwitterCard;
