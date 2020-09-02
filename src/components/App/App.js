import React from 'react';
import ResourceListMain from '../ResourceListMain/ResourceListMain';
import ResourceListNav from '../ResourceListNav/ResourceListNav';
import ResourceMainPage from '../ResourceMainPage/ResourceMainPage';
import AddResource from '../AddResource/AddResource';
import Nav from '../Nav/Nav';
// import Login from '../Login/Login';
import { Route, Link } from 'react-router-dom';
import ApiContext from '../../ApiContext';
import config from '../../config';
import './App.css';

export default class App extends React.Component {
  state = {
    resources: [],
    categories: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/resources`),
      fetch(`${config.API_ENDPOINT}/categories`)
    ])
      .then(([resourcesRes, categoriesRes]) => {
        if (!resourcesRes.ok)
          return resourcesRes.json().then(e => Promise.reject(e))
        if (!categoriesRes.ok)
          return categoriesRes.json().then(e => Promise.reject(e))

        return Promise.all([
          resourcesRes.json(),
          categoriesRes.json(),
        ])
      })
      .then(([resources, categories]) => {
        this.setState({ resources, categories })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleAddResource = resource => {
    this.setState({
      resources: [
        ...this.state.resources,
        resource
      ]
    })
  }

  handleUpdateResource = resourceId => {
    this.setState({
      resources: this.state.resources.filter(resource => resource.id !== resourceId)
    })
  }

  handleDeleteResource = resourceId => {
    this.setState({
      resources: this.state.resources.filter(resource => resource.id !== resourceId)
    })
  }
  
  renderNavRoutes() {
    return (
      <>
        {['/', '/categories/:categoriesId'].map(path =>
          <Route
          exact
          key={path}
          path={path}
          component={ResourceListNav}
        />
        )}
        <Route
          path='resources/:resourcesId'
          component={Nav}
        />
        <Route
          path='/add-resource'
          component={Nav}
        />
      </>
    )
  }

  renderMainRoutes() {
    return (
      <>
        {['/', '/categories/:categoriesId'].map(path =>
          <Route
          exact
          key={path}
          path={path}
          component={ResourceListMain}
        />
        )}
        <Route
          path='resources/:resourcesId'
          component={ResourceMainPage}
        />
        <Route
          path='/add-resource'
          component={AddResource}
        />
      </>
    )
  }

  render() {
    const value = {
      resources: this. state.resources,
      categories: this.state.categories,
      AddResource: this.handleAddResource,
      updateResource: this.handleUpdateResource,
      deleteResource: this.handleDeleteResource,
    }
    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <nav className='App_nav'>
            {this.renderNavRoutes()}
          </nav>
          <header className='App_header'>
            <h1>
              <Link to='/'>Altergencies</Link>
              {' '}
            </h1>
          </header>
          <main className='App_main'>
            {this.renderMainRoutes()}
          </main>
        </div>
      </ApiContext.Provider>
    )
  }

}