import React, { Component } from 'react';
// import Resource from '../../components/Resource/Resource';
import './ResourceListPage.css';

export default class ResourceListPage extends Component {

    render () {
      // const { category } = this.props.match.params
      const { resources } = this.props
      // const getResourcesForCategory = (resources=[], category) => (
      //   (!category) ? resources : resources.filter(resource => resource.category === category)
      // )
      return (
        <ul>
          <h3>
            {resources}
          </h3>
        {/* //     {getResourcesForCategory.map(resource => 
        //   <li>
        //     < Resource
        //       id={resource.id}
        //       title={resource.title}
        //       phone_number={resource.phone_number}
        //       url={resource.url}
        //     />
        //     </li>
        //     )} */}
        </ul>
      )
    }

}