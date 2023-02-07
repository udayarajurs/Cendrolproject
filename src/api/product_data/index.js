import axios from 'axios';
import AppConfig from '../../../AppConfig';

export const getProductDataRequest = async params => {
  console.log(AppConfig.BACKEND + 'products');
  return await axios.get(AppConfig.BACKEND + 'products', {
    params: {
      skip: params.skip,
      limit: 5,
    },
  });
};
