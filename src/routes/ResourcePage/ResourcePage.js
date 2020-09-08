import React from 'react';
import ResourceContext from '../../context/ResourceContext';
import ResourceApiService from '../../ResourceApiService';
import { Hyph, Section } from '../../helper';
import './ResourcePage.css';

export default class ResourcePage extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    },
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
      <div className='crudBtns'>
        <EditResource resource={resource} />
        <DeleteResource resource={resource} />
      </div>
    </>
  }

  render() {
    const { error, resource } = this.context
    let content
    if (error) {
      content = (error.error === `Resource doesn't exist`)
        ? <p className='red'>Resource not found</p>
        : <p className='red'>There was an error</p>
      // } else if (!resource.id) {
      //   content = <div className='loading' />
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
    <p className='ResourcePageContent'>
      <ul className='ResourcePageUL'>
        <div className='ResourcePageHeader'>
          <span className='ResourcePageTitle'>{resource.title}</span>
        </div>
        <div className='ResourceContacts'>
          <li className='ResourcePhone' id='ResourcePageIL'>
            <a href={`tel:${resource.phone_number}`}>{resource.phone_number}</a>
          </li>
          <li id='ResourcePageIL'>
            <a href={`${resource.url}`} target='_blank'>{resource.url}</a>
          </li>
        </div>
        <div className='ResourceAddress'>
          <li id='ResourcePageIL'>
            <span>{resource.street}</span>
          </li>
          <li id='ResourcePageIL'>
            <span>{resource.city}, </span>
            <span>{resource.state}</span>
          </li>
          <li id='ResourcePageIL'>
            <span>{resource.zipcode}</span>
          </li>
        </div>
        <li className='SocialMedia' id='ResourcePageIL'>
          <a href={`${resource.facebook}`} class='fa fa-facebook' target='_blank'></a>
          <a href={`${resource.twitter}`} class='fa fa-twitter' target='_blank'></a>
          <a href={`${resource.instagram}`} class='fa fa-instagram' target='_blank'></a>
          <p>Follow their social media pages!</p>

        </li>
      </ul>
    </p>
  )
}

function EditResource({ resource }) {
  return (
    <button
      className='editBtn'
      onClick={() => resource.editResource(resource.id)}
    >
      Edit</button>
  )
}

function DeleteResource({ resource }) {
  return (
    <button
      className='deleteBtn'
      onClick={() => resource.deleteResource(resource.id)}
    >
      Delete</button>
  )
}