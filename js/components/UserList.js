import React from 'react';
import UserListItem from './UserListItem';

const UserList = (props) => {
  const userItems = props.users.map((user, index) => {
    return (
      <UserListItem
        isSelected={user === props.selectedUser ? 'info' : ''}
        onUserSelect={props.onUserSelect}
        user={user}
        key={`user-${index}`}
      />
    );
  });

  return (
    <div>
      <table className="user-list table table-striped">
        <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Age</th>
          <th>Phone</th>
        </tr>
        </thead>

        <tbody>
          {userItems}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
