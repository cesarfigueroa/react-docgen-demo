import React, { Component, PropTypes } from 'react';

class TextField extends Component {
  render() {
    return <input placeholder={this.props.placeholder} />;
  }
}

TextField.propTypes = {
  placeholder: PropTypes.string
};

export default TextField;
