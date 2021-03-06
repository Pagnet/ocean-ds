import React from 'react';
import { render, screen } from '@testing-library/react';

import Input from '../Input';

test('renders element properly', () => {
  const { container } = render(
    <Input data-testid="input-test" className="custom-class" />
  );

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="ods-form-control__root"
    >
      <div
        class="ods-form-control__element"
      >
        <input
          class="ods-input custom-class"
          data-testid="input-test"
          type="text"
        />
      </div>
    </div>
  `);
  expect(screen.getByTestId('input-test')).toHaveAttribute('type', 'text');
});

test('renders a error state for the input', () => {
  render(<Input data-testid="input-test" error helperText="Error message." />);
  expect(screen.getByTestId('input-test')).toHaveClass(
    'ods-input ods-input--error',
    {
      exact: true,
    }
  );
});
