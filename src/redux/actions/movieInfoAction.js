import _ from 'lodash';
import {
  FETCH_CAST,
  FETCH_COMMENTS,
  FETCH_DETAIL,
  FETCH_IMAGES,
  FETCH_RECOMMEND,
} from './types';

import moviemania from '../../api';

const fetchDetail = (id) =>
  _.memoize(async (dispatch) => {
    try {
      const response = await moviemania.get(`movie/${id}`);
      dispatch({type: FETCH_DETAIL, payload: response.data});
    } catch (e) {
      console.log(e);
    }
  });

const fetchCast = (id) =>
  _.memoize(async (dispatch) => {
    try {
      const response = await moviemania.get(`movie/${id}/credits`);
      dispatch({type: FETCH_CAST, payload: response.data.cast});
    } catch (e) {
      console.log(e);
    }
  });

const fetchImages = (id) =>
  _.memoize(async (dispatch) => {
    try {
      const response = await moviemania.get(`movie/${id}/images`);
      dispatch({type: FETCH_IMAGES, payload: response.data.backdrops});
    } catch (e) {
      console.log(e);
    }
  });

const fetchRecommend = (id) =>
  _.memoize(async (dispatch) => {
    try {
      const response = await moviemania.get(`movie/${id}/recommendations`);
      dispatch({type: FETCH_RECOMMEND, payload: response.data.results});
    } catch (e) {
      console.log(e);
    }
  });

const fetchComments = (id) =>
  _.memoize(async (dispatch) => {
    try {
      const response = await moviemania.get(`movie/${id}/reviews`);
      dispatch({type: FETCH_COMMENTS, payload: response.data.results});
    } catch (e) {
      console.log(e);
    }
  });

export {fetchDetail, fetchCast, fetchImages, fetchRecommend, fetchComments};
