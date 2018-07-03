import React from 'react';
import styled from 'styled-components';
import { distanceInWordsToNow } from 'date-fns';
import iconPinned from './icons/pinned.svg';
import commentIcon from './icons/comments.png';
import retweetIcon from './icons/retweet.png';
import likeIcon from './icons/like.png';
import directMessageIcon from './icons/envelope.png';

const Box = styled.div`
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

const Post = styled.div`
  font-size: 25px;
  line-height: 30px;
  font-weight: lighter;
  p {
    margin: 0;
  }
`;

const SmallUserpic = styled.img`
  border-radius: 50%;
  height: 32px;
  width: auto;
  margin: 0 15px 0 0;
`;

const Pinned = styled.div`
  display: flex;
  align-items: center;
  margin-left: 45px;
`;

const PinnedIcon = styled.img``;

const Text = styled.p`
  color: #707e88;
  font-size: 12px;
  line-height: 14px;
  padding-left: 6px;
`;

const Content = styled.div``;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e1e8ed;
  padding: 9px 11px 9px 17px;
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
  padding-top: 17px;
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
  font-size: 16px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px 0;
`;

const Social = styled.div`
  display: flex;
  margin: 14px 0 0 45px;
`;

const Icon = styled.img`
  height: 100%;
`;

const Counter = styled.div`
  color: #667580;
  font-weight: bold;
  padding-left: 10px;
`;

const Action = styled.div`
  margin-right: 40px;
  display: flex;
  align-items: center;
  align-self: safe center;
`;

class ExternalCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      card: [],
    };
  }

  componentDidMount() {
    const hostname = 'https://twitter-demo.erodionov.ru';
    const secretCode = process.env.REACT_APP_SECRET_CODE;
    const { id } = this.props;

    fetch(`${hostname}/api/v1/statuses/${id}/card?access_token=${secretCode}`)
      .then(response => response.json())
      .then(data => this.setState({ card: data }));
  }

  render() {
    const { card } = this.state;
    return (
      <React.Fragment>
        {card.url && (
          <PreviewBox>
            <PreviewImage src={card.image} alt="" />
            <TextWrap>
              <PreviewTitle>
                {card.title}
              </PreviewTitle>
              <PreviewText>
                {card.description}
              </PreviewText>
            </TextWrap>
          </PreviewBox>
        )}
      </React.Fragment>
    );
  }
}

export default function Tweets({ tweetsData }) {
  const content = tweetsData.map(tweet => (
    <Card key={tweet.id}>
      {tweet.pinned && (
        <Pinned>
          <PinnedIcon src={iconPinned} alt="Pinned Tweet Icon" />
          <Text>
Pinned Tweet
          </Text>
        </Pinned>
      )}
      <Box>
        <SmallUserpic src={tweet.account.avatar} alt="" />
        <Content>
          <Author>
            {tweet.account.display_name}
          </Author>
          <Nickname>
            @
            {tweet.account.username}
          </Nickname>
          <TimeStamp>
            {`• ${distanceInWordsToNow(tweet.created_at)} ago`}
          </TimeStamp>
          {tweet.content && (
            <Post
              dangerouslySetInnerHTML={{
                __html: tweet.content,
              }}
            />
          )}
          {tweet.media_attachments.map(image => (
            <UploadedImage key={image.id} src={image.url} alt="" />
          ))}
          <ExternalCard id={tweet.id} />
        </Content>
      </Box>
      <Social>
        <Action>
          <Icon src={commentIcon} alt="" />
          <Counter>
            {tweet.comments}
          </Counter>
        </Action>
        <Action>
          <Icon src={retweetIcon} alt="" />
          <Counter>
            {tweet.reposts}
          </Counter>
        </Action>
        <Action>
          <Icon src={likeIcon} alt="" />
          <Counter>
            {tweet.likes}
          </Counter>
        </Action>
        <Action>
          <Icon src={directMessageIcon} alt="" />
        </Action>
      </Social>
    </Card>
  ));
  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}
