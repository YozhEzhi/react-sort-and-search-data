import React from 'react';

import UserListItem from '../components/UserListItem';

function UserList(props) {
  const { onUserSelect, selectedUser, users } = props;

  const userItems = users.map(user => (
    <UserListItem
      isSelected={user === selectedUser ? 'info' : ''}
      onUserSelect={onUserSelect}
      user={user}
      key={`user-${user.name}`}
    />
  ));

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
}

export default UserList;
