const TEXT_ELEMENT = 'TEXT_ELEMENT';

const render = (element, parentDom) => {
  const {
    type,
    props
  } = element; // Create DOM element

  const isTextElement = type === TEXT_ELEMENT;
  const dom = isTextElement ? document.createTextNode('') : document.createElement(type);

  const isAttribute = key => key != 'children';

  Object.keys(props).filter(isAttribute).map(key => {
    dom[key] = props[key];
  }); // Render children

  const childElements = props.children || [];
  childElements.map(childElement => render(childElement, dom)); // Append to parent

  parentDom.appendChild(dom);
};

function createElement(type, config, ...args) {
  console.log('TYPE ->', type);
  console.log('args ->', args);
  const props = config || {};
  const hasChildren = args.length > 0;
  const rawChildren = hasChildren ? [].concat(...args) : [];
  props.children = rawChildren.filter(c => c != null && c !== false).map(c => c instanceof Object ? c : createTextElement(c));
  return {
    type,
    props
  };
}

function createTextElement(value) {
  return createElement(TEXT_ELEMENT, {
    nodeValue: value
  });
}

export default {
  render,
  createElement
};