import React from 'react';
import ReactDom from 'react-dom';
import App from '../components/App/App';

it('it renders App without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<App />, div);

  ReactDom.unmountComponentAtNode(div);
});