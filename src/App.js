import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import ProfilePage from './ProfilePage';

export default () => (
  <IntlProvider locale="en">
    <Router>
      <React.Fragment>
        <Route path="/:username" component={ProfilePage} />
        <Redirect exact from="/" to="/EveryInteraction" />
      </React.Fragment>
    </Router>
  </IntlProvider>
);
