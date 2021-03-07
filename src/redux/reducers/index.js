import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import MovieDetail from './movieInfoReducer';

export default combineReducers({
  movie: movieReducer,
  detail: MovieDetail,
});
