const React = require('react');

const TextField = React.createClass({
  displayName: 'TextField',
  propTypes: {
    placeholder: React.PropTypes.string
  },
  render: function() {
    return React.createElement('input', {
      placeholder: this.props.placeholder
    })
  }
});

module.exports = TextField;
