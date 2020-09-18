import React from 'react';
import ReactDom from 'react-dom';
import Header from '../components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

it('renders Header without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>, 
  div);

  ReactDom.unmountComponentAtNode(div);
});