import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import ProfilePage from './ProfilePage';

export default () => (
  <IntlProvider locale="en">
    <Router>
      <React.Fragment>
        <Redirect from="/" to="/EveryInteraction" />
        <Route path="/:username" component={ProfilePage} />
      </React.Fragment>
    </Router>
  </IntlProvider>
);
