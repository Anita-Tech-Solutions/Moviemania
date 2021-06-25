import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import MovieDetail from './movieInfoReducer';
import themeReducer from './themeReducer';
import tvReducer from './tvReducer';

export default combineReducers({
  theme: themeReducer,
  movie: movieReducer,
  tv: tvReducer,
  detail: MovieDetail,
});
