import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header';
import ResourceListPage from '../../routes/ResourceListPage/ResourceListPage';
import './App.css';
import { ResourceListProvider } from '../../context/ResourceListContext';

export default class App extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <ResourceListProvider>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route
              exact
              path={'/'}
              component={ResourceListPage}
            />
          </Switch>
        </main>
      </ResourceListProvider>
    )
  }
}