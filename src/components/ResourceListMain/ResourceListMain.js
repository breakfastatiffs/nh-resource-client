import React from 'react';
import { Link } from 'react-router-dom';
import Resource from '../Resource/Resource';
import ApiContext from '../../ApiContext';
import { getResourcesForCategory } from '../../resources-helper';
import './ResourceListMain.css';

export default class ResourceListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  render() {
    const { categoryId } = this.props.match.params
    const { resources=[] } = this.context
    const resourcesForCategory = getResourcesForCategory(resources, categoryId)
    return(
      <section className='ResourceListAll'>
        <ul>
          {resourcesForCategory.map(resource =>
            <li key={resource.id}>
              <Resource
              id={resource.id}
              title={resource.title}
              phone={resource.phone}
              url={resource.url}
              />
            </li>
            )}
        </ul>
      </section>
    )
  }


}