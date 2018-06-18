import React, { Component } from "react";
import { MainContainer } from "./MainBlock";
import { Header } from "./Header";
import { HeaderImage } from "./HeaderImage";
import { Menu } from "./Menu";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const MyApp = () => (
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

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/EveryInteraction" component={MyApp} />
          <Redirect from="/" to="EveryInteraction" />
        </Switch>
      </Router>
    );
  }
}

export default App;
