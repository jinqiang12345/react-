import React from 'react';
import {
  Route,
  Router,
  Switch
} from 'react-router';
import axios from 'axios';
import history from '../history';
import App from '../App';

axios.defaults.headers.common['auth'] = 'road2018';
axios.defaults.timeout = 3000;

const router = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
);

export default router;