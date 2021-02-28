import {FETCH_MOVIE, LOADING} from './types';

import moviemania from '../../api';

export const fetchMovie = () => async (dispatch) => {
  try {
    dispatch({type: LOADING});

    const response = await moviemania.get('trending/all/week');
    dispatch({type: FETCH_MOVIE, payload: response.data.results});
  } catch (e) {
    console.log(e);
  }
};
