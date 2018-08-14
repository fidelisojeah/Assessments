import React from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import App from './containers/App';
import Home from './containers/Home';

export default function Main() {
  return (
    <Router>
      <App>
        <Route
          path="/"
          component={Home}
        />
      </App>
    </Router>
  )
}
