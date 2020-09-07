import React from 'react';
import ResourceContext from '../../context/ResourceContext';
import ResourceApiService from '../../ResourceApiService';
import { Button, Input } from '../../helper';

export default class AddResource extends React.Component {
  static contextType = ResourceContext

  handleSubmit = e => {
    e.preventDefault()
    const { resource } = this.context
    const {
      title,
      category, 
      phone_number, 
      street_address, 
      city, 
      state, 
      zip_code, 
      county, 
      url, 
      facebook, 
      twitter, 
      instagram
    } = e.target

    ResourceApiService.postResource(
      resource.id,
      title.value,
      category.value, 
      phone_number.value, 
      street_address.value,
      city.value,
      state.value, 
      zip_code.value, 
      county.value, 
      url.value,
      facebook.value, 
      twitter.value,
      instagram.value
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
          <label htmlFor="category">Category:</label>
          <br />
          <Input
            name='category'
            type='radio'
          >
          </Input>
          <label htmlFor="category-type">Animal Services</label>
          <Input
            name='category'
            type='radio'
          >
          </Input>
          <label htmlFor="category-type">Disability Services</label>
          <Input
            name='category'
            type='radio'
          >
          </Input>
          <label htmlFor="category-type">Immigration Services</label>
          <Input
            name='category'
            type='radio'
          >
          </Input>
          <label htmlFor="category-type">LGBTQ+</label>
          <Input
            name='category'
            type='radio'
          >
          </Input>
          <label htmlFor="category-type">Mental Health</label>
          <Input
            name='category'
            type='radio'
          >
          </Input>
          <label htmlFor="category-type">Sexual & Domestic Violence</label>
          <Input
            name='category'
            type='radio'
          >
          </Input>
          <label htmlFor="category-type">Substance Use</label>
          <Input
            name='category'
            type='radio'
          >
          </Input>
          <label htmlFor="category-type">Veterans</label>
        </div>
        <br />
        
        <label htmlFor="title">Business Name:</label>
        <Input
            name='title'
        >
        </Input>
        <br />
        <label htmlFor="number">Phone Number:</label>
        <Input
            name='phone_number'
        >
        </Input>
        <br />
        <label htmlFor="url">Website:</label>
        <Input
            name='url'
        >
        </Input>
        <br />
        <label htmlFor="address">Street Address:</label>
        <Input
            name='street_address'
        >
        </Input>
        <br />
        <label htmlFor="town">Town:</label>
        <Input
            name='city'
        >
        </Input>
        <br />
        <label htmlFor="county">County:</label>
        <Input
            name='county'
        >
        </Input>        <br />
        <label htmlFor="zip_code">Zipcode:</label>
        <Input
            name='zip_code'
        >
        </Input>        <br />
        <label htmlFor="state">State:</label>
        <Input
            name='state'
        >
        </Input>
        <br />
        <label htmlFor="facebook">Facebook:</label>
        <Input
            name='facebook'
        >
        </Input>
        <br />
        <label htmlFor="twitter">Twitter:</label>
        <Input
            name='twitter'
        >
        </Input>
        <br />
        <label htmlFor="address">Instagram:</label>
        <Input
            name='instagram'
        >
        </Input>
        <br />
        <Button id="submitbtn" type="submit">Create</Button>
      </form>
    )
  }
}