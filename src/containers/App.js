import React, { Component } from 'react';
import Login from './Login';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={Login} />
      </Router>
    );
  }
}

export default App;
