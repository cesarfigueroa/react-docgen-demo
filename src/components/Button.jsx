const React = require('react');

const Button = React.createClass({
  displayName: 'Button',
  propTypes: {
    text: React.PropTypes.string.isRequired,
    isDisabled: React.PropTypes.bool.isRequired
  },
  render: function() {
    return React.createElement('button', {
      disabled: this.props.isDisabled
    }, this.props.text)
  }
});

module.exports = Button;
