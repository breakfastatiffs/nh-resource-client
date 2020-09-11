import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ResourceListProvider } from './context/ResourceListContext';
import { ResourceProvider } from './context/ResourceContext';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <ResourceListProvider>
      <ResourceProvider>
        <App />
      </ResourceProvider>
    </ResourceListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);