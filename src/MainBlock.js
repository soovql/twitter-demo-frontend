import React from "react";
import styled from "styled-components";
import tick from "./img/Tick.png";
import { Grid, Col, Row } from "react-flexbox-grid";

/*export const PageContainer = styled.div`
  background: #e6ecf0;
`;
*/

const UserInfo = styled.div``;
const UserInfoName = styled.div`
  color: #14171a;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
`;

const UserInfoNickname = styled.div`
  color: #697787;
  font-size: 14px;
  line-height: 21px;
`;
const UserInfoDescription = styled.p``;

const UserInfoMore = styled.ul``;
const UserInfoMoreItem = styled.li``;

const PageContainer = props => (
  <Grid>
    <Row>
      <Col sm={3} md={2} lg={1}>
        <UserInfo>
          <UserInfoName>Every Interaction</UserInfoName>
          <img src={tick} title="Verified account" alt="Approved User Tick" />

          <UserInfoNickname>
            <a href="https://twitter.com/EveryInteract">@EveryInteract</a>
          </UserInfoNickname>
        </UserInfo>
      </Col>
      <Col sm={3} md={2} lg={1} />
      <Col sm={3} md={2} lg={1}>
        Conent3
      </Col>
    </Row>
  </Grid>
);

class MainContainer extends React.Component {
  render() {
    return <PageContainer />;
  }
}
export default MainContainer;
