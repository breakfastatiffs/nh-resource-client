import React from 'react';

export const nullResource = {
  resource_id: [],
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
  updateResource: () => {},
  deleteResource: () => {},
  checkInputs: () => {},
  setErrorFor: () => {},
})

export default ResourceContext

export class ResourceProvider extends React.Component {
  state = {
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

  
  checkInputs = checkInputs => {
  const titleValue = title.value.trim()
  const phoneValue = phone_number.value.trim()
  const urlValue = url.value.trim()
  const streetValue = street.value.trim()
  const cityValue = city.value.trim()
  const countyValue = county.value.trim()
  const zioValue = zip_code.value.trim()
  const stateValue = state.value.trim()
  const facebookValue = facebook.value.trim()
  const twitterValue = twitter.value.trim()
  const instagramValue = instagram.value.trim()

  if (titleValue === '') {
    //show error
    serErrorFor(title, 'Need business title to submit')
  } else {
    //success
    setSuccessFor(title)
  }
}

// setErrorFor = setErrorFor => {
//   const formControl = input.parentElement;  //.form-control
//   const small = formControl.querySelector('small')

//   small.innerText = message;

//   formControl.className = 'form-control error'
// }


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
      checkInputs: this.checkInputs,
      setErrorFor: this.setErrorFor,
    }
    return (
      <ResourceContext.Provider value={value}>
        {this.props.children}
      </ResourceContext.Provider>
    )
  }
}
  