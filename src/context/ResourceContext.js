import React from 'react';

export const nullResource = {
  category: [],
  title: [],
  phone_number: [],
  url: [],
  street: [],
  city: [],
  county: [],
  zip_code: [],
  state: [],
  facebook: [],
  twitter: [],
  instagram: [],
}

const ResourceContext = React.createContext({
  resource: nullResource,
  resources: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setResource: () => {},
  clearResource: () => {},
  setResources: () => {},
  addResource: () => {},
  editResource: () => {},
  deleteResource: () => {},
})

export default ResourceContext

export class ResourceProvider extends React.Component {
  state = {
    resource: nullResource,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setResource = resource => {
    this.setState({ resource })
  }

  setResources = resources => {
    this.setState({ resources })
  }

  clearResource = () => {
    this.setResource(nullResource)
  }

  addResource = resources => {
    this.setResources([
      ...this.state.resources,
      resource
    ])
  }

  editResource = resource => {
    this.setState({ resource }) //resource.edit
  }

  deleteResource = resource => {
    this.setState({ resource }) //resource.delete
  }

  render() {
    const value = {
      resource: this.state.resource,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setResource: this.setResource,
      setResources: this.setResources,
      clearResource: this.clearResource,
      addResource: this.addResource,
      editResource: this.editResource,
      deleteResource: this.deleteResource,
    }
    return (
      <ResourceContext.Provider value={value}>
        {this.props.children}
      </ResourceContext.Provider>
    )
  }
}
  