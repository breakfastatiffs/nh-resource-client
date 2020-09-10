import React from 'react';
import { Link } from 'react-router-dom';
import './Resource.css';
import { Hyph } from '../../helper';

export default class Resource extends React.Component {
  render() {
    const { resource } = this.props
    return (
      <main className='main-resource'>
        <Link to={`/resources/${resource.resource_id}`} style={{ textDecoration: 'none' }}>
          <h4 className='main-resource-title'>{resource.title}</h4>
          <p>{resource.category}</p>
        </Link>
         <span className='pagebreak'>▽</span>
        <div className='main-resource-category'>
        </div>
      </main>
    )
  }
}
