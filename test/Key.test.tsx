import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { TreeEquityScoreKey as ContinuousKey } from '../stories/ContiuousKey.stories';
import { MassEJPopulationsKey as DiscreteKey } from '../stories/DiscreteKey.stories';
import { render } from '@testing-library/react';

// test to make sure the continuous key renders without crashing
it('renders a continous key without crashing', () => {
  const { getByTestId } = render(
    <ContinuousKey
      title="Tree Equity Score"
      type="continuous"
      startLabel="0"
      endLabel="100"
      gradient="linear-gradient(to right, #F99D3E, 85%, #6CC396)"
    />
  );
  expect(getByTestId('key')).toBeInTheDocument();
});

// test to make sure the discrete key renders without crashing
it('renders a discrete key without crashing', () => {
  const { getByTestId } = render(
    <DiscreteKey
      title="2020 Mass EJ Populations"
      type="discrete"
      labels={[
        'Minority',
        'Income',
        'Minority and English isolation',
        'Minority and income',
        'Minority, income and English isolation',
        'No designation',
      ]}
      colors={['#55FF00', '#FFD400', '#E600A9', '#4C7300', '#2F2DBA', '#FFF']}
    />
  );
  expect(getByTestId('key')).toBeInTheDocument();
});
