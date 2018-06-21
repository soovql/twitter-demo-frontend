import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ProfilePage from "./ProfilePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Twitter Frontend Demo</title>
          <meta name="description" content="Я пытался!" />
        </Helmet>
        <Router>
          <React.Fragment>
            <Route path="/EveryInteraction" component={ProfilePage} />
            <Redirect from="/" to="EveryInteraction" />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
