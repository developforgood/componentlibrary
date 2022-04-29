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
  defSize : process.env.TYPESCALE.extralargetitle,
  font : "Barlow",
  type : 0,
};

export const LargeTitle = Template.bind({});
LargeTitle.args = {
  defSize : process.env.TYPESCALE.largetitle,
  font : "Barlow",
  type : 1,
};

export const MediumTitle = Template.bind({});
MediumTitle.args = {
  defSize : process.env.TYPESCALE.mediumtitle,
  font : "Barlow",
  type : 2
};

export const SmallTitle = Template.bind({});
SmallTitle.args = {
  defSize : process.env.TYPESCALE.smalltitle,
  font : "Barlow",
  type : 3
};

export const ExtraLargeBase = Template.bind({});
ExtraLargeBase.args = {
  defSize : process.env.TYPESCALE.extralargebase,
  font : "Barlow",
  type : 4
};

export const LargeBase = Template.bind({});
LargeBase.args = {
  defSize : process.env.TYPESCALE.largebase,
  font : "Barlow",
  type : 5
};

export const MediumBase = Template.bind({});
MediumBase.args = {
  defSize : process.env.TYPESCALE.mediumbase,
  font : "Barlow",
  type : 6
};

export const SmallBase = Template.bind({});
SmallBase.args = {
  defSize : process.env.TYPESCALE.smallbase,
  font : "Barlow",
  type : 7
};