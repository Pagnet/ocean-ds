import React from 'react';
import { render, screen } from '@testing-library/react';

import IconButton from '../IconButton';

test('renders a default IconButton', () => {
  render(<IconButton data-testid="btn-test" />);
  expect(screen.getByTestId('btn-test')).toHaveClass('ods-iconbtn--md');
});

test('renders a small IconButton', () => {
  render(<IconButton data-testid="btn-test" size="sm" />);
  expect(screen.getByTestId('btn-test')).toHaveClass('ods-iconbtn--sm');
});

test('renders a disabled IconButton', () => {
  render(<IconButton data-testid="btn-test" disabled={true} />);
  expect(screen.getByTestId('btn-test')).toHaveClass('ods-iconbtn--disabled');
});
