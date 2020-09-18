import React from 'react';
import ReactDOM from 'react-dom';
import { ResourceListProvider } from './context/ResourceListContext';
import { ResourceProvider } from './context/ResourceContext';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
    <ResourceListProvider>
      <ResourceProvider>
        <App />
      </ResourceProvider>
    </ResourceListProvider>,
  document.getElementById('root')
);