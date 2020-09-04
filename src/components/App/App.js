import React from 'react';
import Header from '../Header/Header';
import ResourceListPage from '../../routes/ResourceListPage/ResourceListPage';
import ResourceApiService from '../../ResourceApiService';
import ResourceListContext from '../../context/ResourceListContext';
import './App.css';

export default class App extends React.Component {
  static contextType = ResourceListContext
  static defaultProps = { // if no props, then default props
    match: {
      params: {}
    },
  }

  constructor(props) { // constructs class & when class is injected/rendered, then it instantiates object inside state
    super()
    this.state = {
      error: null,
      isLoaded: false,
      resources: [], // GET DATA FROM RESOURCES FETCH AND ASSIGN IT TO RESOURCES
    }
  }

  //once you get data then assign it to this.state.resources

  componentDidMount () { // ADD FETCH FOR DATA 
    const { resources } = this.props.match.params
    ResourceApiService.getResources()
      .then(this.context.setResourceList)
}
  render () { 
      return (
        <>
          <Header />
          <ResourceListPage 
            {...this.state.resources} 
          />
        </>
      )
  }
}