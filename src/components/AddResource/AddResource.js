import React from 'react';
import ResourceContext from '../../context/ResourceContext';
import ResourceApiService from '../../ResourceApiService';
import { Button, Input } from '../../helper';
import './AddResource.css';

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
          resource.instagram.value = ''//,
          //history.push('/')
      })
      .catch(this.context.setError)
  }

  render() {
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
                name='title'
                type='text'
                id='business-title'
                placeholder='Equality Health Center'
                required
              >
              </Input>
            </li>
            <li>
              <label htmlFor='phone_number'>Phone Number:</label>
              <Input
                name='phone_number'
                type='tel'
                id='phone_number'
                pattern='[0-9]{10}'
                placeholder='603 225 2739'
                required
              >
              </Input>
            </li>
            <li>
              <label htmlFor='url'>Website:</label>
              <Input
                name='url'
                type='url'
                id='url'
                pattern='https?://.+'
                placeholder='https://www.equalityhc.org/'
              >
              </Input>
            </li>
            <li>
              <label htmlFor='street'>Street Address:</label>
              <Input
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
                name='city'
                type='text'
                id='city'
                pattern='^[a-zA-Z]+$'
                placeholder='Concord'
              >
              </Input>
            </li>
            <li>
              <label htmlFor='county'>County:</label>
              <Input
                name='county'
                type='text'
                id='county'
                pattern='^[a-zA-Z]+$'
                placeholder='Merrimack'
              >
              </Input>
            </li>
            <li>
              <label htmlFor='zip_code'>Zipcode:</label>
              <Input
                name='zip_code'
                type='text'
                id='zip_code'
                pattern='[0-9]{5}'
                placeholder='03301'
              >
              </Input>
            </li>
            <li>
              <label htmlFor='state'>State:</label>
              <Input
                name='state'
                type='text'
                id='state'
                placeholder='NH'
                pattern='^[a-zA-Z]{2}'
              >
              </Input>
            </li>
            <li>
              <label htmlFor='facebook'>Facebook:</label>
              <Input
                name='facebook'
                type='url'
                id='facebook'
                pattern='https?://.+'
                placeholder='https://www.equalityhc.org/'
              >
              </Input>
            </li>
            <li>
              <label htmlFor='twitter'>Twitter:</label>
              <Input
                name='twitter'
                type='url'
                id='twitter'
                pattern='https?://.+'
                placeholder='https://twitter.com/EqualityHC'
              >
              </Input>
            </li>
            <li>
              <label htmlFor='instagram'>Instagram:</label>
              <Input
                name='instagram'
                type='url'
                id='instagram'
                pattern='https?://.+'
                placeholder='https://www.instagram.com/equalityhealthcenter/'
              >
              </Input>
            </li>
            <li>
              <label htmlFor='category'>Category Type:</label>
            </li>
            <ul className='flex-inner'>
              <li>
                <Input
                  name='category'
                  type='radio'
                  value='Animal Services'
                  id='animal-services'
                  required
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
            </ul>
            <li>
              <Button id='submitbtn' type='submit' >Create</Button>
              <button type='submit' onClick={() => this.props.history.push('/')}>Cancel</button>
            </li>
          </ul>
        </form>
      </div>
    )
  }
}