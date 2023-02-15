import React from 'react';
import { Legend, ContinuousLegendProps, DiscreteLegendProps } from '../src';

export default {
  title: 'Legend',
  component: Legend,
};

const Template = (args: ContinuousLegendProps | DiscreteLegendProps) => (
  <div className="w-[300px]">
    <Legend {...args} />
  </div>
);

export const TreeEquityScore = Template.bind({});
TreeEquityScore.args = {
  title: 'Tree Equity Score',
  type: 'continuous',
  startLabel: '0',
  endLabel: '100',
  gradient: 'linear-gradient(to right, #F99D3E, 85%, #6CC396)',
};

export const MassEJPopulations = Template.bind({});
MassEJPopulations.args = {
  title: '2020 Mass EJ Populations',
  type: 'discrete',
  labels: [
    'Minority',
    'Income',
    'Minority and English isolation',
    'Minority and income',
    'Minority, income and English isolation',
    'No designation',
  ],
  colors: ['#55FF00', '#FFD400', '#E600A9', '#4C7300', '#2F2DBA', '#FFF'],
};

export const PercentPoverty = Template.bind({});
PercentPoverty.args = {
  title: 'People in poverty',
  type: 'continuous',
  startLabel: '10%',
  endLabel: '100%',
  gradient: 'linear-gradient(to right, #FFFFFF, 50%, #007185)',
};
