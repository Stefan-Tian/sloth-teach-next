import React, { useState } from 'react';
import { commitMutation } from 'react-relay';
import mutation from '../mutations/loginUser';
import initEnvironment from '../lib/createRelayEnvironment';

const environment = initEnvironment();

const login = (username, password) => {
  const variables = {
    username,
    password,
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      const { tokenAuth } = response;
      localStorage.setItem('AUTH_TOKEN', tokenAuth.token);
    },
    onError: (error) => console.error(error),
  });
};

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">login</button>
    </form>
  );
};
