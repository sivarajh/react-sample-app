import React, { useState } from 'react';
import classes from './AddUser.module.css';
const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const ageHandler = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
  };

  const usernameHandler = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();

    console.log(username, age);
  };

  return (
    <form onSubmit={addUserHandler} className={classes.input}>
      <label htmlFor="username"> Username </label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={usernameHandler}
      />
      <label htmlFor="age"> Age </label>
      <input id="age" type="text" value={age} onChange={ageHandler} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
