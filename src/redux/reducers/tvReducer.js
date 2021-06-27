import {FETCH_TV_POPULAR, FETCH_TV_TOPRATED, SEARCH_TV} from '../actions/types';

const initial_state = {
  popular: [],
  toprated: [],
  search: [],
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case FETCH_TV_POPULAR:
      return {...state, popular: action.payload};
    case FETCH_TV_TOPRATED:
      return {...state, toprated: action.payload};
    case SEARCH_TV:
      return {...state, search: action.payload};
    default:
      return state;
  }
};
