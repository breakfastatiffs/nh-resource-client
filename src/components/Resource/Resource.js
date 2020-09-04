import React from 'react';
import { Link } from 'react-router-dom';

export default class Resource extends React.Component {
  render() {
    const { resource } = this.props
    return (
      <>
      <Link to={`/resources/${resource.resource_id}`} className='ResourceItem'>
        <header>
          <h4>{resource.title}</h4>
        </header>
      </Link>
        <main>
        <ResourceCategory resource={resource} />
        {resource.id && <>
            <Hyph />
            <ResourceAuthor article={resource} />
          </>}
          <ResourceCommentCount article={resource} />
        </main>
      </>
    )
  }
}


function ResourceCategory({ resource }) {
  return (
    <span className='category'>
      {/* <StyleIcon style={resource.style} /> */}
      {' '}
      {resource.category}
    </span>
  )
}

// function ResourceDate({ resource }) {
//   return (
//     <span className='ResourceListItem__date'>
//       <NiceDate
//         date={resource.date_created}
//       />
//     </span>
//   )
// }

// function ResourceAuthor({ resource }) {
//   return (
//     <span className='ResourceListItem__author'>
//       {resource.author.full_name}
//     </span>
//   )
// }

function ResourceCommentCount({ resource }) {
  return (
    <span
      className='ResourceListItem__comment-count fa-layers fa-fw'
    >
      {/* <FontAwesomeIcon size='lg' icon='comment' /> */}
      <span
        className='fa-layers-text fa-inverse'>
        {/* {resource.number_of_comments} */}
      </span>
    </span>
  )
}
