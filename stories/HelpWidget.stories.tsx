import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HelpWidget } from '../src';

const meta: Meta = {
  title: 'Features/Help widget',
  component: HelpWidget,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <HelpWidget {...args} />;

export const Primary = Template.bind({});
