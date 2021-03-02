import {
  FETCH_DETAIL,
  FETCH_DISCOVER,
  FETCH_TOPRATED,
  FETCH_TRENDING,
  FETCH_UPCOMING,
  LOADING,
} from './types';

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

export const fetchDiscover = () => async (dispatch) => {
  try {
    dispatch({type: LOADING});
    const response = await moviemania.get('discover/movie');
    dispatch({type: FETCH_DISCOVER, payload: response.data.results});
  } catch (e) {
    console.log(e);
  }
};

export const fetchDetail = ({id}) => async (dispatch) => {
  try {
    dispatch({type: LOADING});
    const response = await moviemania.get(`movie/${id}`);
    dispatch({type: FETCH_DETAIL, payload: response.data});
  } catch (e) {
    console.log(e);
  }
};
