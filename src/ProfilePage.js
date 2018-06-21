import React from "react";
import styled from "styled-components";
import { MainContainer } from "./MainBlock";
import { Helmet } from "react-helmet";
import { Header } from "./Header";
import { HeaderImage } from "./HeaderImage";
import { Menu } from "./Menu";
const Profile = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;
const ProfilePage = () => (
  <React.Fragment>
    <Helmet>
      <title>Every Interaction </title>
      <meta
        name="description"
        content="The latest Tweets from Every Interaction (@EveryInteract)."
      />
    </Helmet>{" "}
    <Profile>
      <Header />

      <HeaderImage />
      <Menu />
      <MainContainer />
    </Profile>
  </React.Fragment>
);

export default ProfilePage;
