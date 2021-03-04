import {
  FETCH_ACTION,
  FETCH_COMEDY,
  FETCH_DETAIL,
  FETCH_DISCOVER,
  FETCH_DRAMA,
  FETCH_LOVE,
  FETCH_MOVIE,
  FETCH_MOVIELIST,
  FETCH_TOPRATED,
  FETCH_TRENDING,
  FETCH_UPCOMING,
  LOADING,
} from '../actions/types';

const initial_state = {
  loading: false,
  error: '',
  trending: [],
  upcoming: [],
  top_rated: [],
  movielist: [],
  discover: [],
  actiondata: [],
  drama: [],
  comedy: [],
  love: [],
  detail: {title: '', description: ''},
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: true};
    case FETCH_TRENDING:
      return {...state, trending: action.payload, loading: false};
    case FETCH_UPCOMING:
      return {...state, upcoming: action.payload, loading: false};
    case FETCH_TOPRATED:
      return {...state, top_rated: action.payload, loading: false};
    case FETCH_MOVIELIST:
      return {...state, movielist: action.payload};
    case FETCH_DISCOVER:
      return {
        ...state,
        discover: action.payload,
        loading: false,
      };
    case FETCH_ACTION:
      return {...state, actiondata: action.payload, loading: false};
    case FETCH_DRAMA:
      return {...state, drama: action.payload};
    case FETCH_COMEDY:
      return {...state, comedy: action.payload};
    case FETCH_LOVE:
      return {...state, love: action.payload};
    case FETCH_DETAIL:
      return {...state, detail: action.payload, loading: false};
    default:
      return state;
  }
};
