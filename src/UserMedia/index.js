import React from "react";
import styled from "styled-components";
import mediaIcon from "./media.png";
import { NavLink } from "react-router-dom";

const photos = [
  {
    alt: `preview1`,
    src: `${process.env.PUBLIC_URL}/img/media_preview/preview_1.png`
  },
  {
    alt: `preview2`,
    src: `${process.env.PUBLIC_URL}/img/media_preview/preview_2.png`
  },
  {
    alt: `preview3`,
    src: `${process.env.PUBLIC_URL}/img/media_preview/preview_3.png`
  },
  {
    alt: `preview4`,
    src: `${process.env.PUBLIC_URL}/img/media_preview/preview_4.png`
  },
  {
    alt: `preview5`,
    src: `${process.env.PUBLIC_URL}/img/media_preview/preview_5.png`
  },
  {
    alt: `preview6`,
    src: `${process.env.PUBLIC_URL}/img/media_preview/preview_6.png`
  }
];

function Gallery() {
  const content = photos.map(photo => (
    <Photo src={photo.src} alt={photo.alt} />
  ));
  return <React.Fragment>{content}</React.Fragment>;
}

const MediaIcon = styled.img``;

const Media = styled.div`
  padding-top: 30px;
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Photo = styled.img`
  margin-right: 5px;
  border-radius: 5px;
`;

const Text = styled(NavLink)`
  color: #1da1f2;
  padding-left: 12px;
  font-size: 14px;
  line-height: 16px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Rail = styled.div``;

export default function() {
  return (
    <Media>
      <Title>
        <MediaIcon src={mediaIcon} />
        <Text to="/followers_you_follow">5,571 Photos and videos</Text>
      </Title>
      <Rail>
        <Gallery photos={photos} />
      </Rail>
    </Media>
  );
}
