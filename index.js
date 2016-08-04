const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');

const components = require('./components.json');
const props = {
  'src/components/Button.jsx': {
    text: 'foo',
    isDisabled: false
  },
  'src/components/TextField.jsx': {
    placeholder: 'Hello World'
  }
};

let markup = Object.keys(components).reduce((list, componentPath) => {
  let component = require(`./${componentPath}`);
  return list.concat([
    `<h3>${component.displayName}</h3>`,
    `<em>${components[componentPath].description}</em>`,
    ReactDOMServer.renderToStaticMarkup(
      React.createElement(component, props[componentPath])
    ),
    `<pre>props: ${Object.keys(components[componentPath].props)}</pre>`,
    '<hr />'
  ]);
}, []);

fs.writeFileSync('index.html', `
  <html>
    <head>
      <title>Components</title>
    </head>
    <body>
      ${markup.join('')}
    </body>
  </html>
`);
