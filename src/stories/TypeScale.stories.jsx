import React from 'react';

import { TypeScale } from './TypeScale.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/TypeScale',
  component: TypeScale,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { control: 'number' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TypeScale {...args} />;

export const ExtraLargeTitle = Template.bind({});
ExtraLargeTitle.args = {
  size : 60,
  font : "Barlow"
};

export const LargeTitle = Template.bind({});
LargeTitle.args = {
  size : 52,
  font : "Barlow"
};

export const MediumTitle = Template.bind({});
MediumTitle.args = {
  size : 37,
  font : "Barlow"
};

export const SmallTitle = Template.bind({});
SmallTitle.args = {
  size : 32,
  font : "Barlow"
};

export const ExtraLargeBase = Template.bind({});
ExtraLargeBase.args = {
  size : 32,
  font : "Barlow"
};

export const LargeBase = Template.bind({});
LargeBase.args = {
  size : 28,
  font : "Barlow"
};

export const MediumBase = Template.bind({});
MediumBase.args = {
  size : 16,
  font : "Barlow"
};

export const SmallBase = Template.bind({});
SmallBase.args = {
  size : 14,
  font : "Barlow"
};