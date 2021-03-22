import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Link } from 'react-router-dom';

import Button from '../Button';

test('renders element properly', () => {
  const { getByTestId } = render(
    <Button data-testid="btn-test" className="custom-class">
      Hello
    </Button>
  );

  expect(getByTestId('btn-test')).toMatchInlineSnapshot(`
    <button
      class="ods-btn ods-btn--md ods-btn--primary custom-class"
      data-testid="btn-test"
    >
      Hello
    </button>
  `);
});

test('renders a small button', () => {
  const { getByTestId } = render(<Button data-testid="btn-test" size="sm" />);
  expect(getByTestId('btn-test')).toHaveClass('ods-btn--sm');
});

test('renders a medium button', () => {
  const { getByTestId } = render(<Button data-testid="btn-test" size="md" />);
  expect(getByTestId('btn-test')).toHaveClass('ods-btn--md');
});

test('renders a large button', () => {
  const { getByTestId } = render(<Button data-testid="btn-test" size="lg" />);
  expect(getByTestId('btn-test')).toHaveClass('ods-btn--lg');
});

test('renders primary button', () => {
  const { getByTestId } = render(
    <Button data-testid="btn-test" variant="primary" />
  );

  expect(
    getByTestId('btn-test')
  ).toHaveClass('ods-btn ods-btn--md ods-btn--primary', { exact: true });
});

test('renders secondary button', () => {
  const { getByTestId } = render(
    <Button data-testid="btn-test" variant="secondary" />
  );

  expect(
    getByTestId('btn-test')
  ).toHaveClass('ods-btn ods-btn--md ods-btn--secondary', { exact: true });
});

test('renders a text button', () => {
  const { getByTestId } = render(
    <Button data-testid="btn-test" variant="text" />
  );

  expect(
    getByTestId('btn-test')
  ).toHaveClass('ods-btn ods-btn--md ods-btn--text', { exact: true });
});

test('renders an inverse button', () => {
  const { getByTestId } = render(
    <Button data-testid="btn-test" variant="inverse" />
  );
  expect(getByTestId('btn-test')).toHaveClass('ods-btn--inverse');
});

test('renders a full width button', () => {
  const { getByTestId } = render(<Button data-testid="btn-test" blocked />);
  expect(getByTestId('btn-test')).toHaveClass('ods-btn--blocked');
});

test('renders a link button', () => {
  const { getByTestId } = render(
    <Router>
      <Button data-testid="btn-test" component={Link} to="/teste/1234">
        Link
      </Button>
    </Router>
  );

  expect(getByTestId('btn-test')).toMatchInlineSnapshot(`
    <a
      class="ods-btn ods-btn--md ods-btn--primary"
      data-testid="btn-test"
      href="/teste/1234"
    >
      Link
    </a>
  `);
});
