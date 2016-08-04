const React = require('react');
const ReactDOMServer = require('react-dom/server');

const components = require('./components.json');
const props = {
  'src/components/Button.jsx': {
    text: 'foo',
    isDisabled: true
  },
  'src/components/TextField.jsx': {
    placeholder: 'Foo Bar Baz'
  }
};

Object.keys(components).forEach(component => {
  let markup = ReactDOMServer.renderToStaticMarkup(
    React.createElement(require(`./${component}`), props[component])
  );

  console.log(markup);
});
