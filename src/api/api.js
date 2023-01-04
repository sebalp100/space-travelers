const BASE_URL = 'https://api.spacexdata.com/v3';

const post = async (endpoint, body = {}, method = 'POST') => fetch(`${BASE_URL}${endpoint}`, {
  method,
  body: JSON.stringify(body),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export const createItem = async (item, itemName) => {
  const response = await post(`/${itemName}s`, item);
  return response.status === 201;
};

export const getItems = async (itemName) => {
  const response = await fetch(`${BASE_URL}/${itemName}s`);
  try {
    const items = response.json();
    return items;
  } catch (error) {
    return {};
  }
};

export const deleteItem = async (id, itemName) => {
  const response = await post(`/${itemName}s/${id}`, {
    item_id: id,
  }, 'DELETE');

  const result = response.text();

  return result === `The ${itemName} was deleted successfully!`;
};
