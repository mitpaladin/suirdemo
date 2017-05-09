
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import AppHeader from './AppHeader';
import ExampleCard from './ExampleCard';

import './App.css';

const DemoCard = () => (
  <ExampleCard
    avatar="matthew" name="Matthew" joinedYear={2015} job="a musician"
    homeCity="Nashville" friendCount={22}
  />
)

const NotFound = () => (
  <div>
    <h1>To infinity, and beyond!</h1>
    <p>You are in a maze of twisty little passages, all alike. Go back, while
    you still can. Try <code>/card</code> to see something else.</p>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Switch>
          <Route path="/card" component={DemoCard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
