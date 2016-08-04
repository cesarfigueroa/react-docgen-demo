import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

const componentData = require('./components.json');
const componentContext = require.context('./src/components', true, /\.jsx?$/);
const components = Object.keys(componentData).map(componentPath => {
  return componentContext(`./${componentPath.split('/').pop()}`).default;
});

const genPropFor = type => {
  switch (type) {
  case 'bool':
    return true;
  case 'string':
    return 'Hello World';
  default:
    return null;
  }
};

const genProps = schema => {
  return Object.keys(schema).reduce((agg, prop) => {
    return Object.assign({}, agg, {
      [prop]: genPropFor(schema[prop].type.name)
    });
  }, {});
};

// console.log(
const props = genProps({
  isDisabled: {
    description: '',
    required: true,
    type: {
      name: 'bool'
    }
  },
  text: {
    description: '',
    required: true,
    type: {
      name: 'string'
    }
  }
});
// )

console.log(props);

// const props = [
//   {
//     text: 'foo',
//     isDisabled: false
//   },
//   {
//     placeholder: 'Hello World'
//   }
// ];

// const componentUsage = [
//   '<Button text="foo" isDisabled={false} />',
//   '<TextField placeholder="Hello World" />'
// ];

const HelloWorld = () => {
  return (
    <div>
      {Object.keys(components).map((a, i) => {
        let component = components[i];
        return (
          <div>
            <h3>{component.displayName || component.name}</h3>
            {createElement(component, props)}
            <hr />
          </div>
        );
      })}
    </div>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
