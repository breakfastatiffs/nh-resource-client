import React from 'react';
import { Link } from 'react-router-dom';

export default class Resource extends React.Component {
  render() {
    const { resource } = this.props
    return (
      <>
      <Link to={`/resources/${resource.resource_id}`} className='ResourceItem'>
        <header>
          <h4>{resource.title}</h4>
        </header>
      </Link>
        <main>
        <ResourceCategory resource={resource} />
        {resource.id}
        </main>
      </>
    )
  }
}


function ResourceCategory({ resource }) {
  return (
    <span className='category'>
      {' '}
      {resource.category}
    </span>
  )
}
