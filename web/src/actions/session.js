import { reset } from 'redux-form';
import api from '../api';

function setCurrentUser(dispatch, response) {
  localStorage.setItem('token', JSON.stringify(response.meta.token));
  dispatch({ type: 'AUTHENTICATION_SUCCESS', response });
}

export function login(data, router) {
  return dispatch => api.post('/sessions', data)
    .then((response) => {
      setCurrentUser(dispatch, response);
      dispatch(reset)
    })
}