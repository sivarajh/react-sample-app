import React from 'react';
import Card from '../Card';
const UsersList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ( {user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
