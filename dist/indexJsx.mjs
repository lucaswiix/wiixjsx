import React from './react.mjs';
import techPeoples from './data.mjs';
const appElement = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, techPeoples.map(techComponent)));

function techComponent({
  name
}) {
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, name));
}

React.render(appElement, document.getElementById('root'));