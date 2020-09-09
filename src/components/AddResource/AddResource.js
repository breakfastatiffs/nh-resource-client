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
      category,
      title,
      phone_number,
      url,
      street,
      city,
      county,
      zip_code,
      state,
      facebook,
      twitter,
      instagram
    } = e.target

    ResourceApiService.postResource(
      resource.id,
      category.value,
      title.value,
      phone_number.value,
      url.value,
      street.value,
      city.value,
      county.value,
      zip_code.value,
      state.value,
      facebook.value,
      twitter.value,
      instagram.value
    )
      .then(this.context.addResource)
      .then(() => {
        resource.category.value = '',
        resource.title.value = '',
        resource.phone_number.value = '',
        resource.url.value = '',
        resource.street.value = '',
        resource.city.value = '',
        resource.county.value = '',
        resource.zip_code.value = '',
        resource.state.value = '',
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
        <ul className='flex-outer'>
          <ul className='flex-inner'>
            <div className='category-options'>
              <label htmlFor="category">Category:</label>
              <li>
                <Input
                  name='category'
                  type='radio'
                >
                </Input>
                <label htmlFor="category-type">Animal Services</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                >
                </Input>
                <label htmlFor="category-type">Disability Services</label>
              </li>
              <li>
                <Input
                  name='category: Disability Services'
                  type='radio'
                >
                </Input>
                <label htmlFor="category-type">Immigration Services</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                >
                </Input>
                <label htmlFor="category-type">LGBTQ+</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                >
                </Input>
                <label htmlFor="category-type">Mental Health</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                >
                </Input>
                <label htmlFor="category-type">Sexual & Domestic Violence</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                >
                </Input>
                <label htmlFor="category-type">Substance Use</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                >
                </Input>
                <label htmlFor="category-type">Veterans</label>
              </li>
            </div>
          </ul>
          <li>
            <label htmlFor="title">Business Name:</label>
            <Input
              name='title'
            >
            </Input>
          </li>
          <li>
            <label htmlFor="number">Phone Number:</label>
            <Input
              name='phone_number'
            >
            </Input>
          </li>
          <li>
            <label htmlFor="url">Website:</label>
            <Input
              name='url'
            >
            </Input>
          </li>
          <li>
            <label htmlFor="street">Street Address:</label>
            <Input
              name='street'
            >
            </Input>
          </li>
          <li>
            <label htmlFor="town">Town:</label>
            <Input
              name='city'
            >
            </Input>
          </li>
          <li>
            <label htmlFor="county">County:</label>
            <Input
              name='county'
            >
            </Input>
          </li>
          <li>
            <label htmlFor="zip_code">Zipcode:</label>
            <Input
              name='zip_code'
            >
            </Input>
          </li>
          <li>
            <label htmlFor="state">State:</label>
            <Input
              name='state'
            >
            </Input>
          </li>
          <li>
            <label htmlFor="facebook">Facebook:</label>
            <Input
              name='facebook'
            >
            </Input>
          </li>
          <li>
            <label htmlFor="twitter">Twitter:</label>
            <Input
              name='twitter'
            >
            </Input>
          </li>
          <li>
            <label htmlFor="address">Instagram:</label>
            <Input
              name='instagram'
            >
            </Input>
          </li>
          <Button id="submitbtn" type="submit">Create</Button>
        </ul>
      </form>
    )
  }
}