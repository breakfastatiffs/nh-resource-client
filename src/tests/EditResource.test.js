import React from 'react';
import ReactDom from 'react-dom';
import EditResource from '../components/EditResource/EditResource';

it('renders EditResource without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<EditResource />, div);

  ReactDom.unmountComponentAtNode(div);
});