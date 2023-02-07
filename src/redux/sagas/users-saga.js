import {getProductDataRequest} from '../../api/product_data';
import {types} from '../actions/types';
import {put, takeLatest, all} from '@redux-saga/core/effects';

// @Get Product data list add by user
function* getProductData({payload}) {
  try {
    const res = yield getProductDataRequest(payload);
    if (res.data.products.length > 0) {
      yield put({
        type: types.SEND_REQUEST_GET_PRODUCT_API_SUCCESS,
        data: res?.data?.products,
      });
    } else {
      yield put({type: types.SEND_REQUEST_GET_PRODUCT_API_LIST_END});
    }
  } catch (err) {
    yield put({
      type: types.SEND_REQUEST_GET_PRODUCT_API_FAILURE,
      error: err.message,
    });
  }
}

function* DataSaga() {
  yield takeLatest(types.SEND_REQUEST_GET_PRODUCT_API_REQUEST, getProductData);
}

export default function* contactSaga() {
  yield all([DataSaga()]);
}
