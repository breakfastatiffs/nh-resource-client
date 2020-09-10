import React from 'react';
import ReactDom from 'react-dom';
import Resource from '../components/Resource/Resource';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<Resource />, div);

  ReactDom.unmountComponentAtNode(div);
});