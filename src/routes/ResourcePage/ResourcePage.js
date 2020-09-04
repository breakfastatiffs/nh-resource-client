import React from 'react';
import ResourceContext from '../../context/ResourceListContext';
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
    const { resource, comments } = this.context
    return <>
      <p>
        <ResourceCategory resource={resource} />
        {resource && <>
          <Hyph />
          {/* <ResourceAuthor resource={resource} /> */}
        </>}
        <Hyph />
        {/* <NiceDate date={resource.date_created} /> */}
      </p>
      <ResourceContent resource={resource} />
      {/* <ResourceComments comments={comments} />
      <CommentForm /> */}
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

function ResourceCategory({ resource }) {
  return (
    <span className='ResourcePage__category'>
      {/* <StyleIcon style={resource.style} /> */}
      {' '}
      {resource.category}
    </span>
  )
}

function ResourceAuthor({ resource = nullResource }) {
  return (
    <span className='ResourcePage__author'>
      {resource.author.full_name}
    </span>
  )
}

function ResourceContent({ resource }) {
  return (
    <p className='ResourcePage__content'>
      {/* <a href={`tel:${resource.phone_number}`}>{resource.phone_number}</a> */}
          <br/>
          <a href={`${resource.url}`}>{resource.url}</a>
          <br/>
          <span>{resource.street_address}</span>
          <br/>
          <span>{resource.city}</span>
          <br/>
          <span>{resource.state}</span>
          <br/>
          <span>{resource.zip_code}</span>
          <br/>
          <span>{resource.county}</span>
          <br/>
          <span>{resource.facebook}</span>
          <br/>
          <span>{resource.twitter}</span>
          <br/>
          <span>{resource.instagram}</span>
    </p>
  )
}

function ResourceComments({ comments = [] }) {
  return (
    <ul className='ResourcePage__comment-list'>
      {comments.map(comment =>
        <li key={comment.id} className='ResourcePage__comment'>
          <p className='ResourcePage__comment-text'>
            {/* <FontAwesomeIcon
              size='lg'
              icon='quote-left'
              className='ResourcePage__comment-icon blue'
            /> */}
            {comment.text}
          </p>
          <p className='ResourcePage__comment-user'>
            {comment.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}