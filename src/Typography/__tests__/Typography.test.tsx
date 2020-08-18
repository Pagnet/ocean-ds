import React from 'react';
import { render } from '@testing-library/react';

import Typography, { defaultTypesMapping, Variant } from '../Typography';

test('renders element properly', () => {
  const { getByTestId } = render(
    <Typography
      variant="heading1"
      data-testid="typo-heading1"
      className="custom-class"
    >
      Hello
    </Typography>
  );

  expect(getByTestId('typo-heading1')).toMatchInlineSnapshot(`
    <h1
      class="ods-typography ods-typography__heading1 custom-class"
      data-testid="typo-heading1"
    >
      Hello
    </h1>
  `);
});

test.each(Object.keys(defaultTypesMapping))(
  'render `%s` variant class',
  (variant) => {
    const { getByText } = render(
      <Typography variant={variant as Variant}>Hey</Typography>
    );

    expect(getByText('Hey')).toHaveClass(
      `ods-typography ods-typography__${variant}`
    );
  }
);

test('renders an inverse typegraph', () => {
  const { getByTestId } = render(
    <Typography variant="heading1" data-testid="typo-heading1" inverse>
      Hello
    </Typography>
  );
  expect(getByTestId('typo-heading1')).toHaveClass('ods-typography--inverse');
});
