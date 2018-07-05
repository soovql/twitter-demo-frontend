import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import mediaIcon from './media.png';

const photos = [
  {
    id: 1,
    alt: 'preview1',
    src: `${process.env.PUBLIC_URL}/img/media_preview/preview_1.png`,
  },
  {
    id: 2,
    alt: 'preview2',
    src: `${process.env.PUBLIC_URL}/img/media_preview/preview_2.png`,
  },
  {
    id: 3,
    alt: 'preview3',
    src: `${process.env.PUBLIC_URL}/img/media_preview/preview_3.png`,
  },
  {
    id: 4,
    alt: 'preview4',
    src: `${process.env.PUBLIC_URL}/img/media_preview/preview_4.png`,
  },
  {
    id: 5,
    alt: 'preview5',
    src: `${process.env.PUBLIC_URL}/img/media_preview/preview_5.png`,
  },
  {
    id: 6,
    alt: 'preview6',
    src: `${process.env.PUBLIC_URL}/img/media_preview/preview_6.png`,
  },
];

function Gallery() {
  const content = photos.map(photo => <Photo key={photo.id} src={photo.src} alt={photo.alt} />);
  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
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

export default function ({ userData }) {
  return (
    <Media>
      <Title>
        <MediaIcon src={mediaIcon} />
        <Text to={`/${userData.id}/media`}>
5,571 Photos and videos
        </Text>
      </Title>
      <Rail>
        <Gallery photos={photos} />
      </Rail>
    </Media>
  );
}
