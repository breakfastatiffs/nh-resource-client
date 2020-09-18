import React from 'react';
import './About.css';

export default class About extends React.Component {
  render () {
      return (
        <div className='About'>
          <h3>About Altergencies</h3>
          <p>(awl-ter-gen-cies)</p>
          <h4>Why use alternative emergencies?</h4>
          <p className="about">Altergencies is a compilation of emergency and non-emergency contacts for NH. 
          By clicking a business name, you will be directed to their resource page which houses click-through links to call, access their website, and social-media pages (if applicable). </p>
          <p>Please utilize these resources as an alternative to calling the police:</p>
          <p>
            *It is not guaranteed that these resources may contact emergency services*
          </p>
        </div>
        
      )
  }
}