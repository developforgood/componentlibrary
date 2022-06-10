import React from 'react';

import { TypeScale } from './TypeScale';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/TypeScale',
  component: TypeScale,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { 
      description : "Size of this font",
      control: 'number' 
    },
    defSize : {
      description : "Default size of this font",
      control: 'none'
    },
    type : {
      control: 'none'
    },
    font : {
      despcription : "Choice of fonts",
      control: { type: 'select' },
      options: ['Montserrat', 'Lora']
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TypeScale {...args} />;

export const ExtraLargeTitle = Template.bind({});
ExtraLargeTitle.args = {
  defSize : process.env.TYPESCALE.extralargetitle,
  font : "Montserrat",
  type : 0,
};

export const LargeTitle = Template.bind({});
LargeTitle.args = {
  defSize : process.env.TYPESCALE.largetitle,
  font : "Montserrat",
  type : 1,
};

export const MediumTitle = Template.bind({});
MediumTitle.args = {
  defSize : process.env.TYPESCALE.mediumtitle,
  font : "Montserrat",
  type : 2
};

export const SmallTitle = Template.bind({});
SmallTitle.args = {
  defSize : process.env.TYPESCALE.smalltitle,
  font : "Montserrat",
  type : 3
};

export const ExtraLargeBase = Template.bind({});
ExtraLargeBase.args = {
  defSize : process.env.TYPESCALE.extralargebase,
  font : "Lora",
  type : 4
};

export const LargeBase = Template.bind({});
LargeBase.args = {
  defSize : process.env.TYPESCALE.largebase,
  font : "Lora",
  type : 5
};

export const MediumBase = Template.bind({});
MediumBase.args = {
  defSize : process.env.TYPESCALE.mediumbase,
  font : "Montserrat",
  type : 6
};

export const SmallBase = Template.bind({});
SmallBase.args = {
  defSize : process.env.TYPESCALE.smallbase,
  font : "Montserrat",
  type : 7
};

export const args = {
  font : "Montserrat"
}