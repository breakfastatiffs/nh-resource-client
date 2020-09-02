import React from 'react';
import Resource from '../Resource/Resource';
import ApiContext from '../../ApiContext';
import {findResource} from '../../resources-helper';
import './ResourceMainPage.css';

export default class ResourceMainPage extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteResource = resourceId => {
    this.props.history.push('/')
  }

  render() {
    const { resources=[] } = this.context
    const { resourceId } = this.props.match.params
    const resource = findResource(resources, resourceId) || { content: '' }
  return (
      <section className='ResourceMainPage'>
        <Resource
          id={resource.id}
          title={resource.title}
          phone={resource.phone}
          url={resource.url}
          onDeleteResource={this.handleDeleteResource}
        />
        <div className='ResourceMainPage'>
          {resource.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
  )
  }
}