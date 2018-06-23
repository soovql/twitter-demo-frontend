import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import { IntlProvider } from "react-intl";

class App extends Component {
  render() {
    return (
      <div className="App">
        <IntlProvider locale="en">
          <Router>
            <React.Fragment>
              <Route path="/EveryInteraction" component={ProfilePage} />
              <Redirect from="/" to="EveryInteraction" />
            </React.Fragment>
          </Router>
        </IntlProvider>
      </div>
    );
  }
}

export default App;
