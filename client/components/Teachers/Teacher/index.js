import React from 'react';
import { TeacherCard, TeacherName, TeacherDescription } from '../../Card';
import { TeacherImageCard } from '../../ImageCard';

export default () => (
  <TeacherCard>
    <TeacherImageCard src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
    <TeacherName>彭裕翔</TeacherName>
    <TeacherDescription>
      幹話王 幹話王 幹話王 幹話王 幹話王 幹話王 幹話王 幹話王 幹話王
    </TeacherDescription>
  </TeacherCard>
);
