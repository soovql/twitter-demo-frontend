import React from "react";
import styled from "styled-components";
import { Card } from "./TwitterCard";

const FeedWrap = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export const Feed = props => (
  <React.Fragment>
    <FeedWrap>
      <Card
        pinned={true}
        userPic={process.env.PUBLIC_URL + "/img/avatar_small.png"}
        authorName="Every Interaction"
        authorNickname="@EveryInteract"
        timeTweeted="• 2 Mar 2015"
        postText="We’ve made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI"
        userImage={process.env.PUBLIC_URL + "/img/content/content_01.png"}
        countReposts="17"
        countLikes="47"
      />
      <Card
        userPic={process.env.PUBLIC_URL + "/img/avatar_small.png"}
        authorName="Every Interaction"
        authorNickname="@EveryInteract"
        timeTweeted="• 23h"
        postText="Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/"
        countComments="1"
        countReposts="4"
        countLikes="2"
      />
      <Card
        userPic={process.env.PUBLIC_URL + "/img/avatar_small.png"}
        authorName="Every Interaction"
        authorNickname="@EveryInteract"
        timeTweeted="• Nov 18"
        postText="Variable web fonts are coming, and will open a world of opportunities for weight use online"
        imgPreview={process.env.PUBLIC_URL + "/img/content/preview_01.png"}
        previewBox={true}
        titlePreview="The Future of Web Fonts"
        textPreview="We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…
vilijamis.com"
      />
    </FeedWrap>
  </React.Fragment>
);
