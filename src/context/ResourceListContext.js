import React, { Component } from 'react'

const ResourceListContext = React.createContext({
  ResourceList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setResourceList: () => {},
})
export default ResourceListContext

export class ResourceListProvider extends Component {
  state = {
    resourceList: [],
    error: null,
  };

  setResourceList = resourceList => {
    this.setState({ resourceList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      resourceList: this.state.resourceList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setResourceList: this.setResourceList,
    }
    return (
      <ResourceListContext.Provider value={value}>
        {this.props.children}
      </ResourceListContext.Provider>
    )
  }
}
