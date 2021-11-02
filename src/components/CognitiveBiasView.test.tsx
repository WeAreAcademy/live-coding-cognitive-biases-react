import React from 'react';
// import { render, screen } from '@testing-library/react';
import { cleanDescription } from './CognitiveBiasView';

test('cleans numbers like [121] from description', () => {
  expect(cleanDescription('Keep [12]This [3] Text[987654321].')).toBe('Keep This  Text.');
  expect(cleanDescription('[Keep] This[42].')).toBe('[Keep] This.');
});
