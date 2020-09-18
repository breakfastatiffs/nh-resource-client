import React from 'react';
import ReactDom from 'react-dom';
import ResourcePage from '../routes/ResourcePage/ResourcePage';

it('renders ResourcePage without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<ResourcePage />, div);

  ReactDom.unmountComponentAtNode(div);
});