import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type : 'primary',
  label: 'Button',
  backgroundColor : process.env.CUSTOM_BRAND_COLORS.primary
};

export const Secondary = Template.bind({});
Secondary.args = {
  type : 'secondary',
  label: 'Button',
  backgroundColor : process.env.CUSTOM_BRAND_COLORS.secondary
};

export const Large = Template.bind({});
Large.args = {
  type : 'tertiary',
  size: 'large',
  label: 'Button',
  backgroundColor : process.env.CUSTOM_BRAND_COLORS.tertiary
};

export const Small = Template.bind({});
Small.args = {
  type : 'tertiary',
  size: 'small',
  label: 'Button',
  backgroundColor : process.env.CUSTOM_BRAND_COLORS.tertiary
};
