import {types} from '../actions/types';

const initialState = {
  loading: false,
  moreLoading: false,
  error: null,
  DeleteID: null,
  data: [],
  isListEnd: false,
};

export default ProductDataReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_REQUEST_GET_PRODUCT_API_REQUEST:
      if (action.payload.page === 0) {
        return {...state, data: [], loading: true};
      } else if (action.payload.page === 1) {
        return {...state, loading: true};
      } else {
        return {...state, moreLoading: true};
      }

    case types.SEND_REQUEST_GET_PRODUCT_API_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.data],
        error: '',
        loading: false,
        moreLoading: false,
      };

    case types.SEND_REQUEST_GET_PRODUCT_API_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
        moreLoading: false,
      };

    case types.SEND_REQUEST_GET_PRODUCT_API_LIST_END:
      return {
        ...state,
        isListEnd: true,
        loading: false,
        moreLoading: false,
      };

    default:
      return state;
  }
};
