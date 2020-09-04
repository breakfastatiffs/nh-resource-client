import React, { Component } from 'react';
import ResourceApiService from '../../ResourceApiService';
import ResourceListContext from '../../context/ResourceListContext';
import { Section } from '../../helper';
import Resource from '../../components/Resource/Resource';
import './ResourceListPage.css';

export default class ResourceListPage extends Component {
  static contextType = ResourceListContext

  //once you get data then assign it to this.state.resources
  componentDidMount () { // ADD FETCH FOR DATA 
    this.context.clearError()
    ResourceApiService.getResources()
      .then(this.context.setResourceList)
      .catch(this.context.setError)
}

  renderResrouces() {
    const { resourceList = [] } = this.context
    return resourceList.map(resource =>
      <Resource
        key={resource.resource_id}
        resource={resource}
        />
      )
  }
    render () {
      const { error } = this.context
      return (
        <Section list className='ArticleListPage'>
        <p>Articles List</p>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderResrouces()}
        </Section>
      )
    }

}