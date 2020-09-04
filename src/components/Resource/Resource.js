import React from 'react';
import { Link } from 'react-router-dom';


export default class Resource extends React.Component {
  render () {
    const { resource } = this.props
    return (
      <Link to={`/resources/${resource.id}`} className='ResourceItem'>
        <h3>
          {resource.category}
        </h3>
        <h4>
          {resource.title}
        </h4>
        <a href={`${resource.phone_number}`}>{resource.phone_number}</a> 
        <a href={`${resource.url}`}>{resource.url}</a> 
        <span>{resource.address}</span>
        <span>{resource.city}</span>
        <span>{resource.state}</span>
        <span>{resource.zip_code}</span>
        <span>{resource.county}</span>
        <span>{resource.facebook}</span>
        <span>{resource.twitter}</span>
        <span>{resource.instagram}</span>
      </Link>
    )
  }
}