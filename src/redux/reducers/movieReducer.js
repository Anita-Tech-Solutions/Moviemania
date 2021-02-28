import {FETCH_MOVIE, LOADING} from '../actions/types';

const initial_state = {
  loading: false,
  error: '',
  data: [],
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: true};
    case FETCH_MOVIE:
      return {...state, data: action.payload, loading: false};
    default:
      return state;
  }
};
