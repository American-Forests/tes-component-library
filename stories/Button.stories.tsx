import React from 'react';
import { Meta, Story } from '@storybook/react';
import { QuestionMarkIcon } from '@radix-ui/react-icons';
import { Button, ButtonProps } from '../src';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
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

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { text: 'Add to scenario', variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { text: 'Cancel', variant: 'secondary' };

export const WithIcon = Template.bind({});
WithIcon.args = { Icon: QuestionMarkIcon, variant: 'rounded' };
