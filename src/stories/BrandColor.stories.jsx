import React from 'react';

import { Color } from './Color';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/Colors/BrandColor',
  component: Color,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { 
      control: 'color',
      description : "Sets the color of the div, which can become the new brand color for this storybook."
    },
    defColor: {
      description : "Default color of this color usage",
      control: 'none'
    },
    state: {
      options: ['primary', 'secondary', 'tertiary', 'none'],
      control: { type: 'select' },
      description : "Whether this color will be primary, secondary, or tertiary brand color",
    },
    type : {
      description : "Identity/Usage of this color",
      control: 'none'
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Color {...args} />;

export const UltraLightDFGRed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UltraLightDFGRed.args = {
  defColor : process.env.DFG_BRAND_COLORS.ultraLightDFGRedColor,
  state : 'none',
  type : 'brand'
};

export const LightDFGRed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightDFGRed.args = {
  defColor : process.env.DFG_BRAND_COLORS.lightDFGRedColor,
  state : 'none',
  type : 'brand'
};

export const DFGRed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DFGRed.args = {
  defColor : process.env.DFG_BRAND_COLORS.DFGRedColor,
  state : 'none',
  type : 'brand'
};

export const StrongDFGRed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StrongDFGRed.args = {
  defColor : process.env.DFG_BRAND_COLORS.strongDFGRedColor,
  state : 'none',
  type : 'brand'
};

export const UltraLightDFGBlue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UltraLightDFGBlue.args = {
  defColor : process.env.DFG_BRAND_COLORS.ultraLightDFGBlueColor,
  isPrimary : true,
  isSecondary : false,
  isTertiary : false,
  type : 'brand'
};

export const LightDFGBlue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightDFGBlue.args = {
  defColor : process.env.DFG_BRAND_COLORS.lightDFGBlueColor,
  state : 'none',
  type : 'brand'
};

export const DFGBlue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DFGBlue.args = {
  defColor : process.env.DFG_BRAND_COLORS.DFGBlueColor,
  state : 'none',
  type : 'brand'
};

export const StrongDFGBlue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StrongDFGBlue.args = {
  defColor : process.env.DFG_BRAND_COLORS.strongDFGBlueColor,
  state : 'none',
  type : 'brand'
};