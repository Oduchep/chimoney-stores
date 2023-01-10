import axios from 'axios';

const getBySearch = async ({ searchSlug }) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${searchSlug}`,
    );

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

export default getBySearch;
