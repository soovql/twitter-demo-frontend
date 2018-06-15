import React from "react";
import styled from "styled-components";
import tick from "./img/Tick.png";
import { Grid, Col, Row } from "react-flexbox-grid";
import TwitterCardItem from "./TweetCard.js";
import { Button } from "./Buttons";
import IconJoined from "./img/Icon_Joined.svg";
import IconLink from "./img/Icon_Link.svg";
import IconLocation from "./img/Icon_Location.svg";

const UserInfo = styled.div`
  margin-top: 30px;
`;
const UserInfoName = styled.div`
  color: #14171a;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  float: left;
  padding-right: 6px;
`;

const UserInfoNickname = styled.div`
  color: #697787;
  font-size: 14px;
  line-height: 21px;
`;
const UserInfoDescription = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: 14171a;
`;

const UserInfoMore = styled.ul`
  padding: 0;
`;
const UserInfoMoreItem = styled.li`
  list-style: none;
  font-size: 14px;
  color: #657786;
  line-height: 28px;
  display: flex;
`;

const UserInfoMoreItemContent = styled.div`
  padding-left: 6px;
`;
const TwitterFeed = styled.div`
  margin-top: 8px;
`;
const FeedTabs = styled.ul`
  background-color: #fff;
  padding: 20px 20px 10px;
  margin: 0 auto;
  border-bottom: 1px solid lightgrey;
`;

const FeedTabsItem = styled.li`
  display: inline-block;
  list-style: none;
  color: #1da1f2;
  font-size: 20px;
  font-weight: bold;
  padding-right: 30px;
  &:active {
    font-size: #000;
  }
`;

const PageContainer = props => (
  <Grid>
    <Row>
      <Col sm={3}>
        <UserInfo>
          <UserInfoName>Every Interaction</UserInfoName>
          <img src={tick} title="Verified account" alt="Approved User Tick" />

          <UserInfoNickname>
            <a href="https://twitter.com/EveryInteract">@EveryInteract</a>
          </UserInfoNickname>
          <UserInfoDescription>
            UX Design studio focussed problem solving creativity. Design to us
            is how can we make things *work* amazing.{" "}
          </UserInfoDescription>
          <UserInfoMore>
            <UserInfoMoreItem>
              <img src={IconLocation} />
              <UserInfoMoreItemContent>London, UK </UserInfoMoreItemContent>
            </UserInfoMoreItem>
            <UserInfoMoreItem>
              <img src={IconLink} />
              <UserInfoMoreItemContent>
                everyinteraction.com{" "}
              </UserInfoMoreItemContent>
            </UserInfoMoreItem>
            <UserInfoMoreItem>
              <img src={IconJoined} />
              <UserInfoMoreItemContent>
                Joined May 2008{" "}
              </UserInfoMoreItemContent>
            </UserInfoMoreItem>
          </UserInfoMore>
          <Button primary>Tweet to</Button>
          <Button primary>Message</Button>
        </UserInfo>
      </Col>
      <Col sm={6}>
        <TwitterFeed>
          <FeedTabs>
            <FeedTabsItem>Tweets </FeedTabsItem>
            <FeedTabsItem>Tweets & Replies</FeedTabsItem>
            <FeedTabsItem>Media</FeedTabsItem>
          </FeedTabs>
          <TwitterCardItem />
        </TwitterFeed>
      </Col>
      <Col sm={3} />
    </Row>
  </Grid>
);

class MainContainer extends React.Component {
  render() {
    return <PageContainer />;
  }
}
export default MainContainer;
