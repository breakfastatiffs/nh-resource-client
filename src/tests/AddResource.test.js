import React from 'react';
import ReactDom from 'react-dom';
import AddResource from '../components/AddResource/AddResource';

it('renders AddResource without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<AddResource />, div);

  ReactDom.unmountComponentAtNode(div);
});