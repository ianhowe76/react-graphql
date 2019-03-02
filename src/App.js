import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import './App.css';

const App = ({ routes }) => (
  <div className="App">
    <header className="App-header">
      <p>Demo GraphQL Client App</p>
    </header>
    <div>
      {
        routes.map(route => <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />)
      }
    </div>
  </div>
);

App.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};

export default App;
