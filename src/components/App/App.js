import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header';
import ResourceListPage from '../../routes/ResourceListPage/ResourceListPage';
import ResourcePage from '../../routes/ResourcePage/ResourcePage';
import './App.css';
import { ResourceListProvider } from '../../context/ResourceListContext';
import { ResourceProvider } from '../../context/ResourceContext'

export default class App extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <ResourceListProvider>
        <ResourceProvider>
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
              <Route
                path={'/resources/:resourceId'}
                component={ResourcePage}
              />
            </Switch>
          </main>
        </ResourceProvider>
      </ResourceListProvider>
    )
  }
}