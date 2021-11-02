import React from 'react';
// import { render, screen } from '@testing-library/react';
import { matchesSearchTerm } from './CognitiveBiases';
import { CognitiveBias } from '../types';
test('matches search term in name or description', () => {
  const bias1: CognitiveBias = {
    name: 'A React Bias',
    description: 'My Description Text',
    group: 'some group'
  };
  expect(matchesSearchTerm(bias1, 'react')).toBeTruthy();
  expect(matchesSearchTerm(bias1, 'eac')).toBeTruthy();  //substring ok
  expect(matchesSearchTerm(bias1, 'CRIpt')).toBeTruthy();  //description
  expect(matchesSearchTerm(bias1, 'Other')).toBeFalsy();
});
