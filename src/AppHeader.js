
import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react'

import logo from './logo.svg';

class AppHeader extends Component {
  render() {
    return (
      <Container fluid className="App-header">
        <Image src={logo} alt="logo" centered={true} className="App-logo" />
        <Header as="h1" inverted={true} textAlign="center"
                className="App-header">
          Welcome to Jeff&apos;s React Experiment
        </Header>
      </Container>
    );
  }
}

export default AppHeader;
