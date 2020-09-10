import React from 'react';
import { Link } from 'react-router-dom';
import ResourceContext from '../../context/ResourceContext';
import ResourceApiService from '../../ResourceApiService';
import { Section } from '../../helper';
import './ResourcePage.css';

export default class ResourcePage extends React.Component {

  static contextType = ResourceContext

  componentDidMount() {
    const { resourceId } = this.props.match.params
    this.context.clearError()
    ResourceApiService.getResource(resourceId)
      .then(this.context.setResource)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearResource()
  }

  renderResource() {
    const { resource } = this.context
    return <>
      <ResourceContent resource={resource} />
    </>
  }

  render() {
    const { error } = this.context
    let content
    if (error) {
      content = (error.error === `Resource doesn't exist`)
        ? <p className='red'>Resource not found</p>
        : <p className='red'>There was an error</p>
    } else {
      content = this.renderResource()
    }
    return (
      <Section className='ResourcePage'>
        {content}
      </Section>
    )
  }
}

function ResourceContent({ resource }) {
  return (
    <div className='resource-page-content'>
      <ul className='resource-page-outer'>
        <div className='resource-page-header'>
          <li className='resource-page-title'>{resource.title}</li>
        </div>
        <div className='resource-page-contacts'>
          <li className='resource-page-phone'>
            <a href={`tel:${resource.phone_number}`}>{resource.phone_number}</a>
          </li>
          <li>
            <a href={`${resource.url}`} target='_blank'>{resource.url}</a>
          </li>
        </div>
        <div className='ResourceAddress'>
          <li>
            <span>{resource.street}</span>
          </li>
          <li>
            <span>{resource.city}, </span>
            <span>{resource.state}</span>
          </li>
          <li>
            <span>{resource.zip_code}</span>
          </li>
        </div>
        <li className='SocialMedia'>
          <a href={`${resource.facebook}`} className='fa fa-facebook' target='_blank'></a>
          <a href={`${resource.twitter}`} className='fa fa-twitter' target='_blank'></a>
          <a href={`${resource.instagram}`} className='fa fa-instagram' target='_blank'></a>
          <p>Follow their social media pages!</p>
        </li>
        <li>
        <button type='submit' onClick={() => this.props.history.push(`/edit/${resource.resource_id}`)}>Edit</button>
          <Link to={`/edit/${resource.resource_id}`}>Edit</Link>
          <button onClick={() => {
            ResourceApiService.deleteResource(resource.resource_id)
          }}>
            Delete
      </button>
        </li>
      </ul>
    </div>
  )
}