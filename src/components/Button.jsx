import React, { Component, PropTypes } from 'react';

class Button extends Component {
  render() {
    return <button disabled={this.props.isDisabled}>{this.props.text}</button>;
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default Button;
