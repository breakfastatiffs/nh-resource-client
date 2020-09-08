import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header';
import ResourceListPage from '../../routes/ResourceListPage/ResourceListPage';
import ResourcePage from '../../routes/ResourcePage/ResourcePage';
import About from '../../routes/About/About';
import AdminLogin from '../../routes/AdminLogin/AdminLogin';
import NotFoundPage from'../../routes/NotFoundPage/NotFoundPage';
import { ResourceListProvider } from '../../context/ResourceListContext';
import { ResourceProvider } from '../../context/ResourceContext';
import './App.css';
import AddResource from '../../routes/AddResource/AddResource';

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
              <Route
              path={'/about'}
              component={About}
              />
              <Route
              path={'/admin-login'}
              component={AdminLogin}
              />
              <Route
              path={'/resources'}
              component={AddResource}
              />
              <Route
              component={NotFoundPage}
              />
            </Switch>
          </main>
        </ResourceProvider>
      </ResourceListProvider>
    )
  }
}