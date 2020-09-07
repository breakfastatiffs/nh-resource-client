// import TokenService from '../services/token-service';
import config from './config';

const ResourceApiService = {
  getResources() {
    return fetch(`${config.API_ENDPOINT}/resources`, {
      headers: {},
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  getResource(resourceId) {
    return fetch(`${config.API_ENDPOINT}/resources/${resourceId}`, {
      headers: {
        // 'authorization' : `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  deleteResource(resourceId) {
    return fetch(`${config.API_ENDPOINT}/admin/${resourceId}`, {
      method: 'DELETE',
      headers: {
        // 'authorization' : `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  postResource(
    resourceId,
    category,
    title,
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
  ) {
    return fetch(`${config.API_ENDPOINT}/add`, {
      method: 'POST',
      headers: {
        // 'authorization' : `basic ${TokenService.getAuthToken()}`, // protected endpoints
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        resource_id: resourceId,
        category,
        title,
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
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  patchResource(
    resourceId,
    title,
    category,
    phone_number,
    url,
    address,
    city,
    state,
    zip_code,
    county,
    facebook,
    twitter,
    instagram
  ) {
    return fetch(`${config.API_ENDPOINT}/add-resource`, {
      method: 'PATCH',
      headers: {
        // 'authorization' : `basic ${TokenService.getAuthToken()}`, // protected endpoints
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        resource_id: resourceId,
        title,
        category,
        phone_number,
        url,
        address,
        city,
        state,
        zip_code,
        county,
        facebook,
        twitter,
        instagram
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  }
};

export default ResourceApiService;