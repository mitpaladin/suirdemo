
import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react';

import logo from './logo.svg';

const HeaderLogo = () => (
  <Image src={logo} alt="logo" centered className="App-logo" />
);

const HeaderHeadline = () => (
  <Header as="h1" inverted textAlign="center" className="App-header">
    Welcome to Jeff&apos;s React Experiment
  </Header>
);

class AppHeader extends Component {
  render() {
    return (
      <Container fluid className="App-header">
        <HeaderLogo />
        <HeaderHeadline />
      </Container>
    );
  }
}

export default AppHeader;
