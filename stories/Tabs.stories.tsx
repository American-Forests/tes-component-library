import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs } from '../src';

const meta: Meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <Tabs label={args.label} {...args}>
  <div className="bg-gray-200 flex items-center justify-center h-36" title="first tab">
    <p className="text-4xl text-gray-600 font-black">1</p>
  </div>
  <div className="bg-gray-200 flex items-center justify-center h-36" title="second tab">
    <p className="text-4xl text-gray-600 font-black">2</p>
  </div>
  <div className="bg-gray-200 flex items-center justify-center h-36" title="third tab">
    <p className="text-4xl text-gray-600 font-black">3</p>
  </div>
</Tabs>;

export const Primary = Template.bind({});
Primary.args = { label: 'tabs aria label' };

