import React from 'react';
import ResourceContext from '../../context/ResourceContext';
import ResourceApiService from '../../ResourceApiService';
import { Button, Textarea } from '../../helper';

export default class AddResource extends React.Component {
  static contextType = ResourceContext;

  handleSubmit = e => {
    e.preventDefault()
    const { resource } = this.context
    // const { text } = e.target
    ResourceApiService.postResource(
      resource.id,
      resource.title,
      resource.category, 
      resource.phone_number, 
      resource.street_address, 
      resource.city, 
      resource.state, 
      resource.zip_code, 
      resource.county, 
      resource.url, 
      resource.facebook, 
      resource.twitter, 
      resource.instagram
    )
    .then(this.context.addResource)
    .then(() => {
      resource.title.value = '',
      resource.category.value = '', 
      resource.phone_number.value = '', 
      resource.street_address.value = '', 
      resource.city.value = '', 
      resource.state.value = '', 
      resource.zip_code.value = '', 
      resource.county.value = '', 
      resource.url.value = '', 
      resource.facebook.value = '', 
      resource.twitter.value = '', 
      resource.instagram.value = ''
    })
    .catch(this.context.setError)
  }

  render() {
    return (
      <form 
        id="add-new"
        onSubmit={this.handleSubmit}
        >
        <div className='category-options'>
          <label htmlfor="category">Category:</label>
          <br />          
          <input id="category" type="radio" />
          <label htmlfor="category-type">Animal Services</label>
          <input id="category" type="radio" />
          <label htmlfor="category-type">Disability Services</label>
          <input id="category" type="radio" />
          <label htmlfor="category-type">Immigration Services</label>
          <input id="category" type="radio" />
          <label htmlfor="category-type">LGBTQ+</label>
          <input id="category" type="radio" />
          <label htmlfor="category-type">Mental Health</label>
          <input id="category" type="radio" />
          <label htmlfor="category-type">Sexual & Domestic Violence</label>
          <input id="category" type="radio" />
          <label htmlfor="category-type">Substance Use</label>
          <input id="category" type="radio" />
          <label htmlfor="category-type">Veterans</label>
        </div>
        <br />
        <label htmlfor="title">Business Name:</label>
        <input id="title" type="text" />
        <br />
        <label htmlfor="number">Phone Number:</label>
        <input id="number" type="text" />
        <br />
        <label htmlfor="url">Website:</label>
        <input id="url" type="text" />
        <br />
        <label htmlfor="address">Street Address:</label>
        <input class="address" type="text" />
        <br />
        <label htmlfor="address">Town:</label>
        <input class="address" type="text" />
        <br />
        <label htmlfor="address">County:</label>
        <input class="address" type="text" />
        <br />
        <label htmlfor="address">Zipcode:</label>
        <input class="address" type="text" />
        <br />
        <label htmlfor="address">State:</label>
        <input class="address" type="text" />
        <br />
        <label htmlfor="address">Facebook:</label>
        <input class="social" type="text" />
        <br />
        <label htmlfor="address">Twitter:</label>
        <input class="social" type="text" />
        <br />
        <label htmlfor="address">Instagram:</label>
        <input class="social" type="text" />
        <br />
        <Button id="submitbtn" type="submit">Create</Button>
      </form>
    )
  }
}