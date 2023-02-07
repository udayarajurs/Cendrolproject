import {types} from './types';

export const getProductDataRequest = params => ({
  type: types.SEND_REQUEST_GET_PRODUCT_API_REQUEST,
  payload: {
    skip: params.skip,
    limit: 5,
  },
});
