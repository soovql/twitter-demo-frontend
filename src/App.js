import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ProfilePage from "./ProfilePage";

class App extends Component {
  render() {
    return (
      <div className="App">
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
