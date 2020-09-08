import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';

import Select, { SelectProps } from '../Select';

jest.useFakeTimers('modern');

const setup = (props?: Partial<SelectProps>) => {
  const onChangeFn = jest.fn();

  return {
    ...render(
      <div>
        <Select
          data-testid="select-test"
          options={[
            { value: 'visa', label: 'Visa' },
            { value: 'mastercard', label: 'Mastercard' },
            { value: 'american-express', label: 'American Express' },
            { value: 'elo', label: 'Elo' },
            { value: 'hipercard', label: 'Hipercard' },
            { value: 'discover-network', label: 'Discover Network' },
            { value: 'diners-club', label: 'Diners Club' },
            { value: 'other', label: 'Other' },
          ]}
          {...props}
          onChange={onChangeFn}
        />
        <button type="button">Another interactive element</button>
      </div>
    ),
    onChangeFn,
  };
};

test('renders element properly', () => {
  const { container } = render(
    <Select
      id="my-select"
      options={[
        { value: 'v1', label: 'Label 1' },
        { value: 'v2', label: 'Label 2' },
      ]}
      placeholder="Select some option"
      className="custom-class"
    />
  );

  expect(container.querySelector('.ods-select__root')).toMatchInlineSnapshot(`
    <div
      class="ods-select__root"
    >
      <button
        aria-haspopup="listbox"
        aria-labelledby="label--my-select my-select"
        class="ods-select__control custom-class"
        id="my-select"
        type="button"
      >
        <span
          class="ods-select__value ods-select__value--empty"
        >
          Select some option
        </span>
        <span
          aria-hidden="true"
          class="ods-select__arrow"
        >
          ▼
        </span>
      </button>
    </div>
  `);
});

test('select next option when `ArrowDown` key is pressed', () => {
  const { getByTestId, getByText, onChangeFn } = setup({
    defaultValue: 'mastercard',
  });

  getByTestId('select-test').focus();
  fireEvent.keyDown(document.activeElement || document.body, {
    key: 'ArrowDown',
  });

  expect(onChangeFn).toHaveBeenCalledTimes(1);
  expect(onChangeFn.mock.calls[0][0]).toBe('american-express');
  expect(getByText('American Express')).toBeInTheDocument();
});

test('does not select next option when `ArrowDown` key is pressed', () => {
  const { getByTestId, getByText, onChangeFn } = setup({
    defaultValue: 'other',
  });

  getByTestId('select-test').focus();
  fireEvent.keyDown(document.activeElement || document.body, {
    key: 'ArrowDown',
  });

  expect(onChangeFn).toHaveBeenCalledTimes(0);
  expect(getByText('Other')).toBeInTheDocument();
});

test('select previous option when `ArrowUp` key is pressed', () => {
  const { getByTestId, getByText, onChangeFn } = setup({
    defaultValue: 'hipercard',
  });

  getByTestId('select-test').focus();
  fireEvent.keyDown(document.activeElement || document.body, {
    key: 'ArrowUp',
  });

  expect(onChangeFn).toHaveBeenCalledTimes(1);
  expect(onChangeFn.mock.calls[0][0]).toBe('elo');
  expect(getByText('Elo')).toBeInTheDocument();
});

test('does not select previous option when `ArrowUp` key is pressed', () => {
  const { getByTestId, getByText, onChangeFn } = setup({
    defaultValue: 'visa',
  });

  getByTestId('select-test').focus();
  fireEvent.keyDown(document.activeElement || document.body, {
    key: 'ArrowUp',
  });

  expect(onChangeFn).toHaveBeenCalledTimes(0);
  expect(getByText('Visa')).toBeInTheDocument();
});

test('select first option when `Home` key is pressed', () => {
  const { getByTestId, getByText, onChangeFn } = setup();

  getByTestId('select-test').focus();
  fireEvent.keyDown(document.activeElement || document.body, {
    key: 'Home',
  });

  expect(onChangeFn).toHaveBeenCalledTimes(1);
  expect(onChangeFn.mock.calls[0][0]).toBe('visa');
  expect(getByText('Visa')).toBeInTheDocument();
});

test('does not select an option when `Home` key is pressed', () => {
  const { getByTestId, getByText, onChangeFn } = setup({
    defaultValue: 'visa',
  });

  getByTestId('select-test').focus();
  fireEvent.keyDown(document.activeElement || document.body, {
    key: 'Home',
  });

  expect(onChangeFn).toHaveBeenCalledTimes(0);
  expect(getByText('Visa')).toBeInTheDocument();
});

test('select last option when `End` key is pressed', () => {
  const { getByTestId, getByText, onChangeFn } = setup();

  getByTestId('select-test').focus();
  fireEvent.keyDown(document.activeElement || document.body, {
    key: 'End',
  });

  expect(onChangeFn).toHaveBeenCalledTimes(1);
  expect(onChangeFn.mock.calls[0][0]).toBe('other');
  expect(getByText('Other')).toBeInTheDocument();
});

test('does not select an option when `End` key is pressed', () => {
  const { getByTestId, getByText, onChangeFn } = setup({
    defaultValue: 'other',
  });

  getByTestId('select-test').focus();
  fireEvent.keyDown(document.activeElement || document.body, {
    key: 'End',
  });

  expect(onChangeFn).toHaveBeenCalledTimes(0);
  expect(getByText('Other')).toBeInTheDocument();
});

test('select next option with a name that starts with the typed character', () => {
  const { getByTestId, getByText, onChangeFn } = setup({
    defaultValue: 'discover-network',
  });

  getByTestId('select-test').focus();

  fireEvent.keyDown(document.activeElement || document.body, {
    key: 'd',
  });
  act(() => {
    jest.runAllTimers();
  });

  expect(onChangeFn).toHaveBeenCalledTimes(1);
  expect(onChangeFn.mock.calls[0][0]).toBe('diners-club');
  expect(getByText('Diners Club')).toBeInTheDocument();
});

test('does not select an option with a name that starts with the typed character', async () => {
  const { getByTestId, onChangeFn } = setup();

  getByTestId('select-test').focus();
  fireEvent.keyDown(document.activeElement || document.body, {
    key: 'z',
  });
  act(() => {
    jest.runAllTimers();
  });

  expect(onChangeFn).toHaveBeenCalledTimes(0);
});
