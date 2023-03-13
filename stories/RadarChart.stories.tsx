import React from 'react';
import { Meta, Story } from '@storybook/react';
import { RadarChart, RadarChartProps, RadarChartData } from '../src';

const meta: Meta = {
  title: 'Charts/Radar chart',
  component: RadarChart,
  argTypes: {
    width: { control: { type: 'number' } },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<RadarChartProps> = args => <RadarChart {...args} />;
export const Primary = Template.bind({});

const data: RadarChartData[] = [
  { label: 'People of color', valueLabel: '86%', value: 0.86 },
  { label: 'Unemployment', valueLabel: '5%', value: 0.05 },
  { label: 'Health risk index', valueLabel: '55', value: 0.55 },
  { label: 'Surface temperature', valueLabel: '80 °F', value: 0.8 },
  { label: 'People in poverty', valueLabel: '90%', value: 0.9 },
  { label: 'Children (0-17)', valueLabel: '70%', value: 0.7 },
  { label: 'Seniors (65+)', valueLabel: '17%', value: 0.17 },
];

Primary.args = { data: data, width: 350, height: 200, radius: 60 };
