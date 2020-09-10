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
        resource.category,
        resource.title,
        resource.phone_number,
        resource.url,
        resource.street,
        resource.city,
        resource.county,
        resource.zip_code,
        resource.state,
        resource.facebook,
        resource.twitter,
        resource.instagram
      })
      .catch(this.context.setError)
  }

  render() {
    const {
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
<div className='container'>
      <form
        id='add-new'
        onSubmit={this.handleSubmit}
      >
        <ul className='flex-outer'>
          <li>
            <label htmlFor='business-title'>Business Name:</label>
            <Input
              defaultValue={title}
              name='title'
              type='text'
              id='business-title'
              placeholder='Equality Health Center'
            >
            </Input>
          </li>
          <li>
            <label htmlFor='number'>Phone Number:</label>
            <Input
              defaultValue={phone_number}
              name='phone_number'
              type='tel'
              id='number'
              placeholder='603 225 2739'
            >
            </Input>
          </li>
          <li>
            <label htmlFor='url'>Website:</label>
            <Input
              defaultValue={url}
              name='url'
              type='url'
              id='url'
              placeholder='https://www.equalityhc.org/'
            >
            </Input>
          </li>
          <li>
            <label htmlFor='street'>Street Address:</label>
            <Input
              defaultValue={street}
              name='street'
              type='text'
              id='street'
              placeholder='38 S Main St'
            >
            </Input>
          </li>
          <li>
            <label htmlFor='city'>Town:</label>
            <Input
              defaultValue={city}
              name='city'
              type='text'
              id='city'
              placeholder='Concord'
            >
            </Input>
          </li>
          <li>
            <label htmlFor='county'>County:</label>
            <Input
              defaultValue={county}
              name='county'
              type='text'
              id='county'
              placeholder='Merrimack'
            >
            </Input>
          </li>
          <li>
            <label htmlFor='zip_code'>Zipcode:</label>
            <Input
              defaultValue={zip_code}
              name='zip_code'
              type='text'
              id='zip_code'
              placeholder='03301'
            >
            </Input>
          </li>
          <li>
            <label htmlFor='state'>State:</label>
            <Input
              defaultValue={state}
              name='state'
              type='text'
              id='state'
              placeholder='NH'
            >
            </Input>
          </li>
          <li>
            <label htmlFor='facebook'>Facebook:</label>
            <Input
              defaultValue={facebook}
              name='facebook'
              type='url'
              id='facebook'
              placeholder='https://www.equalityhc.org/'
            >
            </Input>
          </li>
          <li>
            <label htmlFor='twitter'>Twitter:</label>
            <Input
              defaultValue={twitter}
              name='twitter'
              type='url'
              id='twitter'
              placeholder='https://twitter.com/EqualityHC'
            >
            </Input>
          </li>
          <li>
            <label htmlFor='instagram'>Instagram:</label>
            <Input
              defaultValue={instagram}
              name='instagram'
              type='url'
              id='instagram'
              placeholder='https://www.instagram.com/equalityhealthcenter/'
            >
            </Input>
          </li>
          <ul className='flex-inner'>
          <div className='category-options'>
              <li>
              <label htmlFor='category'>Category Type:</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                  value='Animal Services'
                  id='animal-services'
                >
                </Input>
                <label htmlFor='animal-services'>Animal Services</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                  value='Disablity Services'
                  id='disability-services'
                >
                </Input>
                <label htmlFor='disability-services'>Disability Services</label>
              </li>
              <li>
                <Input
                  name='category: Disability Services'
                  type='radio'
                  value='Immigration Services'
                  id='immigration-services'
                >
                </Input>
                <label htmlFor='disability-services'>Immigration Services</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                  value='LGBTQ+'
                  id='lgbtq'
                >
                </Input>
                <label htmlFor='lgbtq'>LGBTQ+</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                  value='Mental Health'
                  id='mental-health'
                >
                </Input>
                <label htmlFor='mental-health'>Mental Health</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                  value='Sexual & Domestic Violence'
                  id='sexual-and-domestic-violence'
                >
                </Input>
                <label htmlFor='sexual-and-domestic-violence'>Sexual & Domestic Violence</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                  value='Substance Use'
                  id='substance-use'
                >
                </Input>
                <label htmlFor='substance-use'>Substance Use</label>
              </li>
              <li>
                <Input
                  name='category'
                  type='radio'
                  value='Veterans'
                  id='veterans'
                >
                </Input>
                <label htmlFor='veterans'>Veterans</label>
              </li>
            </div>
        </ul>
        <li>
          <Button to='/' id='submitbtn' type='submit' >Create</Button>
          <button type='submit' onClick={() => this.props.history.push('/')}>Cancel</button>
        </li>
        </ul>
      </form>
      </div>
    )
  }
}