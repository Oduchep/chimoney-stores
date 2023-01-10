import axios from 'axios';

const getAllProducts = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

export default getAllProducts;
