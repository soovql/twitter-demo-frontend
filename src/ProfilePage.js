import React from "react";
import { MainContainer } from "./MainBlock";
import { Helmet } from "react-helmet";
import { Header } from "./Header";
import { HeaderImage } from "./HeaderImage";
import { Menu } from "./Menu";

const ProfilePage = () => (
  <div>
    <Helmet>
      <title>Every Interaction </title>
      <meta
        name="description"
        content="The latest Tweets from Every Interaction (@EveryInteract)."
      />
    </Helmet>
    <Header />

    <HeaderImage />
    <Menu />
    <MainContainer />
  </div>
);

export default ProfilePage;