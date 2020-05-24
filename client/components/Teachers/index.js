import React from 'react';
import Teacher from './Teacher';
import { TeachersContainer } from './style';

export default () => (
  <TeachersContainer>
    {[1, 2, 3, 4].map(() => (
      <Teacher />
    ))}
  </TeachersContainer>
);
