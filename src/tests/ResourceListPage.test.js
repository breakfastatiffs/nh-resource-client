import React from 'react';
import ReactDom from 'react-dom';
import ResourceListPage from '../routes/ResourceListPage/ResourceListPage';

it('renders ResourceListPage without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<ResourceListPage />, div);

  ReactDom.unmountComponentAtNode(div);
});