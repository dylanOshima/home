import React, { Component } from 'react';
import Home from './endpoints/home.js';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Dillygram'/>
      </Switch>
    );
  }
}

export default App;
