import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Resource from '../components/Resource/Resource';

it('renders Resource without crashing', () => {
  const div = document.createElement('div');
  let resource = { resource_id: 0, category: '', title: '' }
  ReactDom.render(
    <BrowserRouter>
      <Resource
        resource={resource}
      />
    </BrowserRouter>, 
  div);

  ReactDom.unmountComponentAtNode(div);
});