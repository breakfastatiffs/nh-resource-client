import React from 'react';
import { Link } from 'react-router-dom';


export default class Resource extends React.Component {
  render() {
    const { resourceList } = this.props
    return (
      <Link to={`/resources/${resourceList.id}`} className='ResourceItem'>
        <header>
          <h3>{resourceList.category}</h3>
          <h4>{resourceList.title}</h4>
        </header>
        <main>
          <a href={`${resourceList.phone_number}`}>{resourceList.phone_number}</a>
          <a href={`${resourceList.url}`}>{resourceList.url}</a>
          <span>{resourceList.address}</span>
          <span>{resourceList.city}</span>
          <span>{resourceList.state}</span>
          <span>{resourceList.zip_code}</span>
          <span>{resourceList.county}</span>
          <span>{resourceList.facebook}</span>
          <span>{resourceList.twitter}</span>
          <span>{resourceList.instagram}</span>
        </main>
      </Link>
    )
  }
}