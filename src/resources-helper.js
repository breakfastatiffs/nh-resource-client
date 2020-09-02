export const findCategory = (categories=[], categoryId) =>
  categories.find(category => category.id === categoryId);

export const findResource = (resources=[], resourceId) => 
  resources.find(resource => resource.id === resourceId);

export const getResourcesForCategory = (resources=[], categoryId) => (
  (!categoryId)
    ? resources
    : resources.filter(resource => resource.categoryId === categoryId)
);

export const countResourcesForNote = (resources=[], categoryId) =>
  resources.filter(resource => resource.categoryId === categoryId).length;