import axios from 'axios';

const getSingleProduct = async ({ id }) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

export default getSingleProduct;
