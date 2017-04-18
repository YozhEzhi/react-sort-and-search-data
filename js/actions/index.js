import { List } from 'immutable';

import {
  FILTER_USERS,
  RECEIVE_USERS,
  SELECT_USER,
  SORT_BY_AGE,
  SORT_BY_NAME,
} from '../constants/ActionTypes';

export function fetchUsers() {
  return (dispatch) => {
    return fetch('./data.json')
      .then(response => response.json())
      .then(users => dispatch({
        type: RECEIVE_USERS,
        users: List(users),
      }))
      .catch(ex => console.warn('Parsing failed:', ex));
  };
}

export function filterUsers(term) {
  return {
    type: FILTER_USERS,
    term,
  };
}

export function selectUser(user) {
  return {
    type: SELECT_USER,
    user,
  };
}

export function sortByAge() {
  return {
    type: SORT_BY_AGE,
  };
}

export function sortByName() {
  return {
    type: SORT_BY_NAME,
  };
}
