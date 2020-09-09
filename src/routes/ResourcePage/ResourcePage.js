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
    <div className='ResourcePageContent'>
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
            <span>{resource.zip_code}</span>
          </li>
        </div>
        <li className='SocialMedia' id='ResourcePageIL'>
          <a href={`${resource.facebook}`} className='fa fa-facebook' target='_blank'></a>
          <a href={`${resource.twitter}`} className='fa fa-twitter' target='_blank'></a>
          <a href={`${resource.instagram}`} className='fa fa-instagram' target='_blank'></a>
          <p>Follow their social media pages!</p>
        </li>

        <div className='crudBtns'>
          <Link to={`/edit/${resource.resource_id}`}>Edit</Link>
          <button onClick={() => {
            ResourceApiService.deleteResource(resource.resource_id)
          }}>
            Delete
      </button>
        </div>
      </ul>
    </div>
  )
}