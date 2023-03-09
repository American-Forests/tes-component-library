import React from 'react';
import { ContinuousKey, ContinuousKeyProps } from '../src';

export default {
  title: 'Components/Continuous Key',
  component: ContinuousKey,
};

const Template = (args: ContinuousKeyProps) => (
  <div className="w-[300px]">
    <ContinuousKey {...args} />
  </div>
);

export const TreeEquityScoreKey = Template.bind({});
TreeEquityScoreKey.args = {
  title: 'Tree Equity Score',
  type: 'continuous',
  startLabel: '0',
  endLabel: '100',
  gradient: 'linear-gradient(to right, #F99D3E, 85%, #6CC396)',
};

export const PriorityIndicatorKey = Template.bind({});
PriorityIndicatorKey.args = {
  title: 'People in poverty',
  type: 'continuous',
  startLabel: '10%',
  endLabel: '100%',
  gradient: 'linear-gradient(to right, #FFFFFF, 50%, #007185)',
};
