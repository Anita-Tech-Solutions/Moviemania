import _ from 'lodash';
import {
  FETCH_ACTION,
  FETCH_COMEDY,
  FETCH_DETAIL,
  FETCH_DISCOVER,
  FETCH_DRAMA,
  FETCH_LOVE,
  FETCH_MOVIELIST,
  FETCH_TOPRATED,
  FETCH_TRENDING,
  FETCH_UPCOMING,
  LOADING,
} from './types';

import moviemania from '../../api';

export const fetchTrending = () =>
  _.memoize(async (dispatch) => {
    try {
      dispatch({type: LOADING});
      const response = await moviemania.get('trending/all/week');
      dispatch({type: FETCH_TRENDING, payload: response.data.results});
    } catch (e) {
      console.log(e);
    }
  });

export const fetchUpcoming = () =>
  _.memoize(async (dispatch) => {
    try {
      dispatch({type: LOADING});
      const response = await moviemania.get('movie/upcoming');
      dispatch({type: FETCH_UPCOMING, payload: response.data.results});
    } catch (e) {
      console.log(e);
    }
  });

export const fetchToprated = () =>
  _.memoize(async (dispatch) => {
    try {
      dispatch({type: LOADING});
      const response = await moviemania.get('movie/top_rated');
      dispatch({type: FETCH_TOPRATED, payload: response.data.results});
    } catch (e) {
      console.log(e);
    }
  });

export const fetchMovielist = () =>
  _.memoize(async (dispatch) => {
    try {
      const response = await moviemania.get('genre/movie/list');
      dispatch({type: FETCH_MOVIELIST, payload: response.data.genres});
    } catch (e) {
      console.log(e);
    }
  });

export const fetchDiscover = (offset) =>
  _.memoize(async (dispatch) => {
    console.log(offset);
    try {
      dispatch({type: LOADING});
      const response = await moviemania.get('discover/movie', {
        params: {
          page: offset,
        },
      });
      dispatch({
        type: FETCH_DISCOVER,
        payload: response.data.results,
      });
    } catch (e) {
      console.log(e);
    }
  });

export const fetchAction = () =>
  _.memoize(async (dispatch) => {
    try {
      const response = await moviemania.get('discover/movie', {
        params: {
          with_genres: 28,
        },
      });
      dispatch({type: FETCH_ACTION, payload: response.data.results});
    } catch (e) {
      console.log(e);
    }
  });

export const fetchDrama = () =>
  _.memoize(async (dispatch) => {
    try {
      const response = await moviemania.get('discover/movie', {
        params: {
          with_genres: 18,
        },
      });
      dispatch({type: FETCH_DRAMA, payload: response.data.results});
    } catch (e) {
      console.log(e);
    }
  });

export const fetchComedy = () =>
  _.memoize(async (dispatch) => {
    try {
      const response = await moviemania.get('discover/movie', {
        params: {
          with_genres: 35,
        },
      });
      dispatch({type: FETCH_COMEDY, payload: response.data.results});
    } catch (e) {
      console.log(e);
    }
  });

export const fetchLove = () =>
  _.memoize(async (dispatch) => {
    try {
      const response = await moviemania.get('discover/movie', {
        params: {
          with_genres: 10749,
        },
      });
      dispatch({type: FETCH_LOVE, payload: response.data.results});
    } catch (e) {
      console.log(e);
    }
  });

export const fetchDetail = ({id}) =>
  _.memoize(async (dispatch) => {
    try {
      const response = await moviemania.get(`movie/${id}`);
      dispatch({type: FETCH_DETAIL, payload: response.data});
    } catch (e) {
      console.log(e);
    }
  });
