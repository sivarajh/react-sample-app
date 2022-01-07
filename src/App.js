import React from 'react';
import './style.css';
import Card from './UI/Card';
import AddUser from './UI/Components/AddUser';
import UsersList from './UI/Components/UsersList';

export default function App() {
  const users = [
    {
      name: 'hairhara',
      age: '12',
    },
  ];
  return (
    <Card>
      <AddUser />
      <UsersList users={users} />
    </Card>
  );
}
