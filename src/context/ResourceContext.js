import React from 'react';

export const nullResource = {
  title: [],
  category: [], 
  phone_number: [], 
  street_address: [], 
  city: [], 
  state: [], 
  zip_code: [], 
  county: [], 
  url: [], 
  facebook: [], 
  twitter: [], 
  instagram: [],
}

const ResourceContext = React.createContext({
  resource: nullResource,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setResource: () => {},
  clearResource: () => {},
  setComments: () => {},
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
  // setComments = comments => {
  //   this.setState({ comments })
  // }

  clearResource = () => {
    this.setResource(nullResource)
  }

  addResource = resource => {
    this.setComments([
      ...this.state.comments,
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
      setComments: this.setComments,
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
  