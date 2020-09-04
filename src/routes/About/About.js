  
import React from 'react';

export default class About extends React.Component {
  render () {
      return (
        <div>
        <p class="about">This is a list of resources full of alternatives to calling the police. Please utilize these non-emergency numbers and only contact the police if absolutely necessary. </p>
        <p>*It is
            not guaranteed that these resources may contact emergency services*
        </p>
    
        <br />
    
        <h3>How To Use:</h3>
        <p>Either select a county in the dropdown menu labeled 'Search By County' or click the 'All Resources' button. 
            The 'Search By County' button will bring you to a page with services local to that area. 
            The 'All Resources' button will bring you to a page with the compiled list of resources in NH</p>
        
        </div>
        
      )
  }
}