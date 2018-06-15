import React, { Component } from "react";

import MainContainer from "./MainBlock";
import Header from "./Header";
import HeaderImage from "./HeaderImage";
import Menu from "./Menu";
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Twitter Frontend Demo</title>
          <meta name="description" content="Я пытался!" />
        </Helmet>
        <Header />
        <HeaderImage />
        <Menu />
        <MainContainer />
      </div>
    );
  }
}

export default App;
