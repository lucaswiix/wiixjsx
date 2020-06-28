import React from './react.js';
import techPeoples from './data.js';

const appElement = {
  type: 'div',
  props: {
    children: [
      {
        type: 'ul',
        props: {
          children: techPeoples.map(techComponent),
        },
      },
    ],
  },
};

function techComponent({ name }) {
  return {
    type: 'li',
    props: {
      children: [
        {
          type: 'p',
          props: {
            children: [{ type: 'TEXT_ELEMENT', props: { nodeValue: name } }],
          },
        },
      ],
    },
  };
}

React.render(appElement, document.getElementById('root'));
