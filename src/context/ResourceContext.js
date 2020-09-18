import React from 'react';

export const nullResource = {}

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
  updateResource: () => {},
  deleteResource: () => {},
})

export default ResourceContext

export class ResourceProvider extends React.Component {
  state = {
    resources: [],
    resource: nullResource,
    error: null,
  };

  setError = (error) => {
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

  addResource = resource => {
    this.setResources([
      ...this.state.resources,
      resource
    ])
  }

  updateResource = updatedResource => {
    const newResources = this.state.resources.map(res =>
      (res.id === updatedResource.id)
        ? updatedResource
        : res
      )
      this.setState({
        resources: newResources
      })
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
      updateResource: this.updateResource,
    }
    return (
      <ResourceContext.Provider value={value}>
        {this.props.children}
      </ResourceContext.Provider>
    )
  }
}
  