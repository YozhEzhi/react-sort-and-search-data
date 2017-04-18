import { connect } from 'react-redux';

import { selectUser } from '../actions';
import UserList from '../components/UserList';

function mapStateToProps(state) {
  return {
    selectedUser: state.selectedUser,
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUserSelect: user => dispatch(selectUser(user)),
  };
}

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default UserListContainer;
