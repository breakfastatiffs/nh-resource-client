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
    console.log('API', resourceId)
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
    return fetch(`${config.API_ENDPOINT}/${resourceId}`, {
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
    url,
    street,
    city,
    county,
    zip_code,
    state,
    facebook,
    twitter,
    instagram
  ) {
    return fetch(`${config.API_ENDPOINT}/resources`, {
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
        url,
        street,
        city,
        county,
        zip_code,
        state,
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
  ) {
    return fetch(`${config.API_ENDPOINT}/${resourceId}`, {
      method: 'PATCH',
      headers: {
        // 'authorization' : `basic ${TokenService.getAuthToken()}`, // protected endpoints
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        resource_id: resourceId,
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