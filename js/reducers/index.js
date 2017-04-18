import {
  FILTER_USERS,
  RECEIVE_USERS,
  SELECT_USER,
  SORT_BY_AGE,
  SORT_BY_NAME,
} from '../constants/ActionTypes';

import initialState from '../constants/InitialState';

let reversed;
let sorting;

function sortUsers(usersArr, param, isReversed) {
  const sortedUsers = usersArr.sort((a, b) => {
    return (a[param] > b[param]) ? 1 : -1;
  });
  return isReversed ? sortedUsers.reverse() : sortedUsers;
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_USERS:
      const filterFn = item => item.name.toLowerCase().includes(action.term.toLowerCase());
      const users = state.searchData.filter(filterFn);

      return {
        ...state,
        selectedUser: users.get(0),
        sortedByName: 'asc',
        users,
      };

    case RECEIVE_USERS:
      return {
        ...state,
        selectedUser: action.users.get(0),
        searchData: action.users,
        users: action.users,
      };

    case SELECT_USER:
      return {
        ...state,
        selectedUser: action.user,
      };

    case SORT_BY_AGE:
      reversed = (state.sortedByAge === 'asc');
      sorting = reversed ? 'desc' : 'asc';
      const sortedByAgeUsers = sortUsers(state.users, 'age', reversed);

      return{
        ...state,
        selectedUser: sortedByAgeUsers.get(0),
        sortedByAge: sorting,
        users: sortedByAgeUsers,
      };

    case SORT_BY_NAME:
      reversed = (state.sortedByName === 'asc');
      sorting = reversed ? 'desc' : 'asc';
      const sortedByNameUsers = sortUsers(state.users, 'name', reversed);

      return{
        ...state,
        selectedUser: sortedByNameUsers.get(0),
        sortedByName: sorting,
        users: sortedByNameUsers,
      };

    default:
      return state;
  }
}
