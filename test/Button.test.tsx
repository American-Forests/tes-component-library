import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Primary as Button } from '../stories/Button.stories';
import { render, fireEvent } from '@testing-library/react';

// test to make sure the button renders without crashing
it('renders without crashing', () => {
  const { getByRole } = render(<Button text="Add to scenario" />);
  expect(getByRole('button')).toBeInTheDocument();
});

// test to make sure the button onClick handler fires exactly once when clicked
it('fires onClick handler exactly once when clicked', () => {
  const onClick = jest.fn();
  const { getByRole } = render(
    <Button text="Add to scenario" onClick={onClick} />
  );
  fireEvent.click(getByRole('button'));
  expect(onClick).toHaveBeenCalledTimes(1);
});

// test to make sure the right tailwind classes load for the primary variant
it('renders the right tailwind classes for the primary variant', () => {
  const { getByRole } = render(<Button text="Add to scenario" />);
  expect(getByRole('button')).toHaveClass(
    'text-white bg-brand-green hover:bg-brand-green-dark'
  );
});

// test to make sure the right tailwind classes load for the secondary variant
it('renders the right tailwind classes for the secondary variant', () => {
  const { getByRole } = render(<Button text="Cancel" variant="secondary" />);
  expect(getByRole('button')).toHaveClass(
    'text-brand-green bg-white border-brand-green border-2 hover:bg-brand-green hover:text-white'
  );
});
