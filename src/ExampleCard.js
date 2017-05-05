
import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class AvatarImage extends Component {
  constructor() {
    super();
    this.state = {
      basePath: 'https://react.semantic-ui.com/assets/images/avatar/large/',
      format: '.png',
    };
  }

  render() {
    const srcPath = this.state.basePath + this.props.name + this.state.format;
    return <Image src={srcPath} />;
  }
}

AvatarImage.propTypes = {
  name: PropTypes.string.isRequired,
};

class ExampleCard extends Component {
  render() {
    return (
      <Card>
        <AvatarImage name={this.props.avatar} />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>
            <span className="date">Joined in {this.props.joinedYear}</span>
          </Card.Meta>
          <Card.Description>
            {this.props.name} is {this.props.job} living in {this.props.homeCity}.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />{this.props.friendCount} Friends
          </a>
        </Card.Content>
      </Card>
    );
  }
}

ExampleCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  friendCount: PropTypes.number.isRequired,
  homeCity: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  joinedYear: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default ExampleCard;
