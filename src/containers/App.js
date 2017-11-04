import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Login from './Login'

class App extends Component {
  render() {
    return (
      <div className="">
        <Route exact path='/' component={Login} />
      </div>
    );
  }
}

export default App;
