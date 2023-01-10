import axios from 'axios';

const getProductsByCategory = async ({ category }) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}`,
    );

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

export default getProductsByCategory;
