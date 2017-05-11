
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import ExampleCard from './ExampleCard';

import './App.css';

const DemoCard = () => (
  <ExampleCard
    avatar="matthew" name="Matthew" joinedYear={2015} job="a musician"
    homeCity="Nashville" friendCount={22}
  />
);

const NotFound = () => (
  <div className="not-found">
    <h1>To infinity, and beyond!</h1>
    <p>You are in a maze of twisty little passages, all alike. Go back, while
      you still can. Try <code>/card</code> to see something else.</p>
  </div>
);

class AppFooter extends Component {
  render() {
    const rawStyles = {
      position: 'fixed',
      bottom: '0rem',
      width: '100%',
      marginBottom: '0rem',
      borderTop: '1px solid black',
      color: 'white',
      backgroundColor: 'black',
      padding: '1rem 0rem',
    };
    return (
      <div className="ui footer menu inverted" style={rawStyles}>
        <Link className="item" to="/">
          Copyright &copy; {this.props.copyrightYear}, {this.props.copyrightHolder}
        </Link>
        <div className="right menu">
          <Link to="/mission" className="item">Mission</Link>
          <Link to="/join" className="item">Membership</Link>
          <Link to="/contact" className="item">Contact</Link>
          <Link to="/faq" className="item">FAQ</Link>
        </div>
      </div>
    );
  }
}

AppFooter.propTypes = {
  copyrightHolder: PropTypes.string.isRequired,
  copyrightYear: PropTypes.number.isRequired,
};

const TopMenu = () => (
  <div className="ui menu inverted">
    <Link to="/" className="header item">Acme Blawg</Link>
    <div className="right menu">
      <div className="item">
        <img className="ui avatar image" alt="Guest User avatar" src="http://lorempixel.com/320/320/cats/10" />
        <span className="text">Guest User</span>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <p>We&apos;ll have a Contact Us page here soon. Really.</p>
);

const FaqPage = () => (
  <p>The only frequently-asked question is: <em>Is it done yet?!?</em> Nope.</p>
);

const HomePage = () => (
  <p>This is the home page. Nothing to see here. Yet.</p>
);

const JoinPage = () => (
  <p>This is the Join page. Nothing here yet either.</p>
);

const MissionPage = () => (
  <p>We have a mission. We <em>do.</em> Honest.</p>
);

const RoutingSwitch = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/card" component={DemoCard} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/faq" component={FaqPage} />
    <Route path="/join" component={JoinPage} />
    <Route path="/mission" component={MissionPage} />
    <Route path="*" component={NotFound} />
  </Switch>
);

class AppChrome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyrightHolder: props.copyrightHolder,
      copyrightYear: props.copyrightYear,
    };
  }

  render() {
    return (
      <div>
        <TopMenu />
        <AppFooter
          copyrightHolder={this.state.copyrightHolder}
          copyrightYear={this.state.copyrightYear}
        />
      </div>
    );
  }
}

AppChrome.propTypes = {
  copyrightHolder: PropTypes.string.isRequired,
  copyrightYear: PropTypes.number.isRequired,
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <AppFooter copyrightHolder="The Publisher" copyrightYear={2017} />
        <RoutingSwitch />
      </div>
    );
  }
}

export default App;
