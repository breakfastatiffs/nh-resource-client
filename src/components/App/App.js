import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from '../Header/Header';
import ResourceListPage from '../../routes/ResourceListPage/ResourceListPage';
import ResourcePage from '../../routes/ResourcePage/ResourcePage';
import About from '../../routes/About/About';
import AdminLogin from '../../routes/AdminLogin/AdminLogin';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import './App.css';
import AddResource from '../AddResource/AddResource';
import EditResource from '../EditResource/EditResource';

export default class App extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <BrowserRouter>
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
              path={'/:resourceId'}
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
              path={'/edit/:resourceId'}
              component={EditResource}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}