import React from 'react';
import ResourceApiService from '../../ResourceApiService';
import ResourceListContext from '../../context/ResourceListContext';
import { Section } from '../../helper';
import Resource from '../../components/Resource/Resource';

export default class ResourceListPage extends React.Component {
  static contextType = ResourceListContext

  componentDidMount () { 
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
        <Section>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderResrouces()}
        </Section>
      )
    }

}