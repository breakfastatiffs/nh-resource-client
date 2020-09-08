import React from 'react';
import './About.css';

export default class About extends React.Component {
  render () {
      return (
        <div className='About'>
        <p class="about">Compiled is a list emergency and non-emergency contacts for NH. Please use these as an alternative to calling the police.</p>
        <p>By clicking a business name, you will be directed to their resource page which houses click-through links to call the business, access their website, and their social-media pages (if applicable).</p>
        <p>
          *It is not guaranteed that these resources may contact emergency services*
        </p>
        </div>
        
      )
  }
}