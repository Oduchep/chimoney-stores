import axios from 'axios';

const getAllProducts = async ({ limit }) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products${limit && `?limit=${limit}`}`,
    );

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

export default getAllProducts;
