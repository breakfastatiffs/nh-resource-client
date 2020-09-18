import React from 'react';
import ReactDom from 'react-dom';
import NotFoundPage from '../routes/NotFoundPage/NotFoundPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<NotFoundPage />, div);

  ReactDom.unmountComponentAtNode(div);
});