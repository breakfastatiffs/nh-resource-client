import React from 'react';
import { Link } from 'react-router-dom';
import './Resource.css';

export default class Resource extends React.Component {

  render() {
    const { resource_id, title, category } = this.props.resource
    return (
      <main className='main-resource'>
        <Link to={`/resources/${resource_id}`} style={{ textDecoration: 'none' }}>
          <h4 className='main-resource-title'>{title}</h4>
          <p>{category}</p>
        </Link>
         <span className='pagebreak'>▽</span>
        <div className='main-resource-category'>
        </div>
      </main>
    )
  }
}
