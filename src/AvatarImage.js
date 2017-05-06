
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Image } from 'semantic-ui-react';

class AvatarImage extends Component {
  constructor() {
    super();
    this.state = {
      basePath: 'https://react.semantic-ui.com/assets/images/avatar/large/',
      format: '.png',
    };
  };

  render() {
    const srcPath = () => {
      return [this.state.basePath, this.props.name, this.state.format].join('');
    };

    return <Image src={srcPath()} />;
  }
}

AvatarImage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AvatarImage;
