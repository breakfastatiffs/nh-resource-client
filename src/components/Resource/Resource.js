import React from 'react';
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext';
import config from '../../config';
import './Resource.css';

export default class Resource extends React.Component {
  static defaultProps = {
      onDeleteResource: () => {},
      onUpdateResrouce: () => {}, //need to add
      favoriteResource: () => {}, //need to add
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const resourceId = this.props.resourceId

    fetch(`${config.API_ENDPOINT}/resources/${resourceId}`, {
      method: 'DELETE',
      headers: {
          'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
      })
      .then(() => {
        this.context.deleteResource(resourceId)
        this.props.onDeleteResource(resourceId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { title, phone, url, id } = this.props
    return (
        <div className='Resource'>
        <h2 className='Resource_title'>
          <Link to={`/Resource/${id}`}>
            {title}
          </Link>
        </h2>
        <p className='Resource_phone'>
          <Link to={`/Resource/${id}`}>
            {phone}
          </Link>
        </p>
        <p className='Resource_url'>
          <Link to={`/Resource/${id}`}>
            {url}
          </Link>
        </p>
        <button
          className='Resource_delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
      </div>
    )
  }

}