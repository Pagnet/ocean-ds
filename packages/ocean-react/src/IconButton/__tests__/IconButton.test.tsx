import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router, Link } from 'react-router-dom';

import IconButton from '../IconButton';

test('renders a default Icon Button', () => {
  render(<IconButton data-testid="btn-test" />);
  expect(screen.getByTestId('btn-test')).toHaveClass('ods-icon-btn--md');
});

test('renders a small Icon Button', () => {
  render(<IconButton data-testid="btn-test" size="sm" />);
  expect(screen.getByTestId('btn-test')).toHaveClass('ods-icon-btn--sm');
});

test('renders a disabled Icon Button', () => {
  render(<IconButton data-testid="btn-test" disabled={true} />);
  expect(screen.getByTestId('btn-test')).toHaveClass('ods-icon-btn--disabled');
});

test('renders icon button element properly', () => {
  render(
    <IconButton className="classname-custom" data-testid="btn-test">
      Hello
    </IconButton>
  );

  expect(screen.getByTestId('btn-test')).toMatchInlineSnapshot(`
    <button
      class="ods-icon-btn ods-icon-btn--md classname-custom"
      data-testid="btn-test"
    >
      Hello
    </button>
  `);
});

test('renders icon button a link button', () => {
  render(
    <Router>
      <IconButton data-testid="btn-test" component={Link} to="/teste/1234">
        Link
      </IconButton>
    </Router>
  );

  expect(screen.getByTestId('btn-test')).toMatchInlineSnapshot(`
    <a
      class="ods-icon-btn ods-icon-btn--md"
      data-testid="btn-test"
      href="/teste/1234"
    >
      Link
    </a>
  `);
});
