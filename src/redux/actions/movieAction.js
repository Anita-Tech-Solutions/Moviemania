import {FETCH_TOPRATED, FETCH_TRENDING, FETCH_UPCOMING, LOADING} from './types';

import moviemania from '../../api';

export const fetchTrending = () => async (dispatch) => {
  try {
    dispatch({type: LOADING});
    const response = await moviemania.get('trending/all/week');
    dispatch({type: FETCH_TRENDING, payload: response.data.results});
  } catch (e) {
    console.log(e);
  }
};

export const fetchUpcoming = () => async (dispatch) => {
  try {
    dispatch({type: LOADING});
    const response = await moviemania.get('movie/upcoming');
    dispatch({type: FETCH_UPCOMING, payload: response.data.results});
  } catch (e) {
    console.log(e);
  }
};

export const fetchToprated = () => async (dispatch) => {
  try {
    dispatch({type: LOADING});
    const response = await moviemania.get('movie/top_rated');
    dispatch({type: FETCH_TOPRATED, payload: response.data.results});
  } catch (e) {
    console.log(e);
  }
};
