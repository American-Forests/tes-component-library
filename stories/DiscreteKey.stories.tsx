import React from 'react';
import { DiscreteKey, DiscreteKeyProps } from '../src';

export default {
  title: 'Discrete Key',
  component: DiscreteKey,
};

const Template = (args: DiscreteKeyProps) => (
  <div className="w-[300px]">
    <DiscreteKey {...args} />
  </div>
);

export const MassEJPopulationsKey = Template.bind({});
MassEJPopulationsKey.args = {
  title: '2020 Mass EJ Populations',
  type: 'discrete',
  labels: [
    'Minority',
    'Income',
    'Minority, English isolation',
    'Minority, income',
    'Minority, income, English isolation',
    'No designation',
  ],
  colors: ['#55FF00', '#FFD400', '#E600A9', '#4C7300', '#2F2DBA', '#FFF'],
};

export const RedliningKey = Template.bind({});
RedliningKey.args = {
  title: 'Redlining',
  type: 'discrete',
  labels: ['A', 'B', 'C', 'D', 'E', 'No designation'],
  colors: ['#6CC296', '#386cb0', '#ffff99', '#ee261e', '#e6b8ff', '#c3cbd0'],
};
