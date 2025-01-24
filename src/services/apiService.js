import axios from './baseURL';

export const getProduct = async () => {
    try {
        const response = await axios.get(`products`);
        console.log('List of Products:', response.data);
          return response.data;
      } catch (error) {
          console.error('Error fetching product list:', error);
      }
};