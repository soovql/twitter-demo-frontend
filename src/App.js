import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import ProfilePage from './ProfilePage';
import DummyPage from './DummyPage';

export default () => (
  <IntlProvider locale="en">
    <Router>
      <Switch>
        <Route
          exact
          path="/:direction(profile|about|support|tos|privacy|cookies|ads|moments|notifications|messages|search)"
          component={DummyPage}
        />
        <Route path="/:id" component={ProfilePage} />
        <Redirect from="/" to="/1" />
      </Switch>
    </Router>
  </IntlProvider>
);
