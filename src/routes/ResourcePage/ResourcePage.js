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
      <h2 className='ResourcePageTitle'>{resource.title}</h2>
      <ResourceContent resource={resource} />
      <EditResource resource={resource} />
      <Hyph />
      <DeleteResource resource={resource} />
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
    <p className='ResourcePage__content'>
      <ul className='ResourcePageUL'>
        <li id='ResourcePageIL'>
          <span>{resource.category}</span>
        </li>
        <li id='ResourcePageIL'>
          <a href={`tel:${resource.phone_number}`}>{resource.phone_number}</a>
        </li>
        <li id='ResourcePageIL'>
          <a href={`${resource.url}`} target='_blank'>{resource.url}</a>
        </li>
        <li id='ResourcePageIL'>
          <span>{resource.street}</span>
        </li>
        <li id='ResourcePageIL'>
          <span>{resource.city},</span>
        </li>
        <li id='ResourcePageIL'>
          <span>{resource.state}</span>
        </li>
        <li id='ResourcePageIL'>
          <span>{resource.zipcode}</span>
        </li>
        <li id='ResourcePageIL'>
          <span>{resource.county} County</span>
        </li>
        <li id='ResourcePageIL'>
          <a href={`${resource.facebook}`} target='_blank'>{resource.facebook}</a>
        </li>
        <li id='ResourcePageIL'>
          <a href={`${resource.twitter}`} target='_blank'>{resource.twitter}</a>
        </li>
        <li id='ResourcePageIL'>
          <a href={`${resource.instagram}`} target='_blank'>{resource.instagram}</a>
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