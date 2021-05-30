import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import MovieDetail from './movieInfoReducer';
import themeReducer from './themeReducer';

export default combineReducers({
  theme: themeReducer,
  movie: movieReducer,
  detail: MovieDetail,
});
