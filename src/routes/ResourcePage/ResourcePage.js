import React from 'react';
import ResourceContext from '../../context/ResourceContext';
import ResourceListContext from '../../context/ResourceListContext';
import ResourceApiService from '../../ResourceApiService';
import { Hyph, Section } from '../../helper';

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
    <h2>{resource.title}</h2>
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
      <span>{resource.category}</span>
      <br />
      <a href={`tel:${resource.phone_number}`}>{resource.phone_number}</a>
           <br/>
          <a href={`${resource.url}`} target='_blank'>{resource.url }</a>
          <br/>
          <span>{resource.street}</span>
          <br/>
          <span>{resource.city},</span>
          <br/>
          <span>{resource.state}</span>
          <br/>
          <span>{resource.zipcode}</span>
          <br/>
          <span>{resource.county} County</span>
          <br/>
          <a href={`${resource.facebook}`} target='_blank'>{resource.facebook}</a>
          <br/>
          <a href={`${resource.twitter}`} target='_blank'>{resource.twitter}</a>
          <br/>
          <a href={`${resource.instagram}`} target='_blank'>{resource.instagram}</a>
    </p>
  )
}

function EditResource ({ resource }) {
  return (
    <button>Edit</button>
  )
}

function DeleteResource ({ resource }) {
  return (
    <button>Delete</button>
  )
}