import React from 'react';

export default React.createContext({
  categories: [],
  resources: [],
  createResrouce: () => {},
  deleteResource: () => {},
  updateResource: () => {},
  favoriteResource: () => {},
});