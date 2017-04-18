import React, { PropTypes } from 'react';

function UserListItem(props) {
  const { user, isSelected, onUserSelect } = props;

  return (
    <tr onClick={() => onUserSelect(user)} className={isSelected}>
      <td>
        <img
          alt={user.name}
          className="user-image img-responsive"
          src={`./images/${user.image}.svg`}
        />
      </td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>
        <span>8 </span>
        <span>{user.phone}</span>
      </td>
    </tr>
  );
}

UserListItem.propTypes = {
  isSelected: PropTypes.string.isRequired,
  onUserSelect: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default UserListItem;
