import React from 'react';
import ResourceContext from '../../context/ResourceContext';
import ResourceApiService from '../../ResourceApiService';
import { Button, Input } from '../../helper';

export default class EditResource extends React.Component {

  static contextType = ResourceContext

  componentDidMount() {
    const {resourceId} = this.props.match.params
    this.context.clearError()
    ResourceApiService.getResource(resourceId)
      .then(this.context.setResource)
      .catch(this.context.setError)
  }

  handleSubmit = e => {
    // const {resource} = this.props.match.params
    e.preventDefault()
    // ResourceApiService.patchResource()
      // .then(this.context.updateResource()
      // )
      // .catch(this.context.setError)
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
    console.log('TITLE', title.value)

    ResourceApiService.patchResource(
      resource.resource_id,
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
      .then(this.context.patchResource)
      .then(() => {
        resource.category,//.value = '',
        resource.title.value = '',
        resource.phone_number,//.value = '',
        resource.url,//.value= '',
        resource.street,//.value = '',
        resource.city,//.value = '',
        resource.county,//.value = '',
        resource.zip_code,//.value = '',
        resource.state,//.value = '',
        resource.facebook,//.value = '',
        resource.twitter,//.value = '',
        resource.instagram//.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    console.log('render', this.context.title)
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
    } = this.context.resource
    return (
      <form
        id="edit"
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
                  value='Animal Services'
                  defaultValue={category}
                >
                </Input>
                <label htmlFor="category-type">Animal Services</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                  value='Disablity Services'
                  defaultValue={category}
                >
                </Input>
                <label htmlFor="category-type">Disability Services</label>
              </li>
              <li>
                <Input
                  name='category: Disability Services'
                  type='radio'
                  value='Immigration Services'
                  defaultValue={category}
                >
                </Input>
                <label htmlFor="category-type">Immigration Services</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                  value='LGBTQ+'
                  defaultValue={category}
                >
                </Input>
                <label htmlFor="category-type">LGBTQ+</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                  value='Mental Health'
                  defaultValue={category}
                >
                </Input>
                <label htmlFor="category-type">Mental Health</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                  value='Sexual & Domestic Violence'
                  defaultValue={category}
                >
                </Input>
                <label htmlFor="category-type">Sexual & Domestic Violence</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                  type='radio'
                  value='Substance Use'
                  defaultValue={category}
                >
                </Input>
                <label htmlFor="category-type">Substance Use</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                  type='radio'
                  value='Veterans'
                  defaultValue={category}
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
              defaultValue={title}
            >
            </Input>
          </li>
          <li>
            <label htmlFor="number">Phone Number:</label>
            <Input
              name='phone_number'
              defaultValue={phone_number}
            >
            </Input>
          </li>
          <li>
            <label htmlFor="url">Website:</label>
            <Input
              name='url'
              defaultValue={url}
            >
            </Input>
          </li>
          <li>
            <label htmlFor="street">Street Address:</label>
            <Input
              name='street'
              defaultValue={street}
            >
            </Input>
          </li>
          <li>
            <label htmlFor="town">Town:</label>
            <Input
              name='city'
              defaultValue={city}
            >
            </Input>
          </li>
          <li>
            <label htmlFor="county">County:</label>
            <Input
              name='county'
              defaultValue={county}
            >
            </Input>
          </li>
          <li>
            <label htmlFor="zip_code">Zipcode:</label>
            <Input
              name='zip_code'
              defaultValue={zip_code}
            >
            </Input>
          </li>
          <li>
            <label htmlFor="state">State:</label>
            <Input
              name='state'
              defaultValue={state}
            >
            </Input>
          </li>
          <li>
            <label htmlFor="facebook">Facebook:</label>
            <Input
              name='facebook'
              defaultValue={facebook}
            >
            </Input>
          </li>
          <li>
            <label htmlFor="twitter">Twitter:</label>
            <Input
              name='twitter'
              defaultValue={twitter}
            >
            </Input>
          </li>
          <li>
            <label htmlFor="address">Instagram:</label>
            <Input
              name='instagram'
              defaultValue={instagram}
            >
            </Input>
          </li>
          <Button id="submitbtn" type="submit">Update</Button>
        </ul>
      </form>
    )
  }
}