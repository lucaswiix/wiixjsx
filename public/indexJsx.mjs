import React from './react.mjs';
import techPeoples from './data.mjs';

const appElement = (
  <div>
    <ul>{techPeoples.map(techComponent)}</ul>
  </div>
);

function techComponent({ name }) {
  return (
    <li>
      <p>{name}</p>
    </li>
  );
}

React.render(appElement, document.getElementById('root'));
