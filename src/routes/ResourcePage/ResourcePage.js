import React from 'react';
import ResourceContext from '../../context/ResourceContext';
import ResourceApiService from '../../ResourceApiService';
import { Section } from '../../helper';
import './ResourcePage.css';

export default class ResourcePage extends React.Component {
  static defaultProps = {
    match: { params: {} },
  }
  
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
    <main className='resource-page-body'>
      <div className='resource-page-container'>
        <ul className='resource-page-outer'>
          <li className='resource-page-title'>{resource.title}</li>
          <li className='resource-page-phone'>
            <a href={`tel:${resource.phone_number}`}>✆ {resource.phone_number}</a>
          </li>
          <li>
            <a className='resource-page-url' href={`${resource.url}`} target='_blank'>{resource.url}</a>
          </li>
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
          <ul className='resource-page-inner'>
            <li className='social-media'>
              <a href={`${resource.facebook}`} className='fa fa-facebook' target='_blank'></a>
              <a href={`${resource.twitter}`} className='fa fa-twitter' target='_blank'></a>
              <a href={`${resource.instagram}`} className='fa fa-instagram' target='_blank'></a>
            </li>
          </ul>
              <li>
              <p>Follow their social media pages!</p></li><li>
              <button onClick={() => {
                ResourceApiService.deleteResource(resource.resource_id)
                .then(location.assign(`/`))
              }}>
                Delete
              </button>
              <button onClick={() => {
                location.assign(`/edit/${resource.resource_id}`)
              }}>
                Edit
              </button>
            </li>
        </ul>
      </div>
    </main>
  )
}