import React from 'react';
import ReactDom from 'react-dom';
import About from '../routes/About/About';

it('renders About without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<About />, div);

  ReactDom.unmountComponentAtNode(div);
});