import React from 'react';
import ReactDom from 'react-dom';
import Header from '../components/Header/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<Header />, div);

  ReactDom.unmountComponentAtNode(div);
});