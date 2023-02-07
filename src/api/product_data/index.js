import axios from 'axios';
import AppConfig from '../../../AppConfig';

export const getProductDataRequest = async params => {
  return await axios.get(AppConfig.BACKEND + 'products', {
    params: {
      skip: params.skip,
      limit: 10,
    },
  });
};
