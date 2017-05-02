
import React, { Component } from 'react';
import AppHeader from './AppHeader';
import ExampleCard from './ExampleCard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <ExampleCard
          avatar="matthew" name="Matthew" joinedYear="2015" job="a musician"
          homeCity="Nashville" friendCount="22"
        />
      </div>
    );
  }
}

export default App;
