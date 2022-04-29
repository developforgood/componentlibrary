import React from 'react';

import { Color } from './Color';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/ColorPreviews/BrandColor',
  component: Color,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Color {...args} />;

export const UltraLightDFGRed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UltraLightDFGRed.args = {
  defColor : process.env.DFG_BRAND_COLORS.ultraLightDFGRedColor,
  isPrimary : true,
  isSecondary : false,
  isTertiary : false,
  isBrand : true
};

export const LightDFGRed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightDFGRed.args = {
  defColor : process.env.DFG_BRAND_COLORS.lightDFGRedColor,
  isPrimary : true,
  isSecondary : false,
  isTertiary : false,
  isBrand : true
};

export const DFGRed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DFGRed.args = {
  defColor : process.env.DFG_BRAND_COLORS.DFGRedColor,
  isPrimary : true,
  isSecondary : false,
  isTertiary : false,
  isBrand : true
};

export const StrongDFGRed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StrongDFGRed.args = {
  defColor : process.env.DFG_BRAND_COLORS.strongDFGRedColor,
  isPrimary : true,
  isSecondary : false,
  isTertiary : false,
  isBrand : true
};

export const UltraLightDFGBlue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UltraLightDFGBlue.args = {
  defColor : process.env.DFG_BRAND_COLORS.ultraLightDFGBlueColor,
  isPrimary : true,
  isSecondary : false,
  isTertiary : false,
  isBrand : true
};

export const LightDFGBlue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightDFGBlue.args = {
  defColor : process.env.DFG_BRAND_COLORS.lightDFGBlueColor,
  isPrimary : true,
  isSecondary : false,
  isTertiary : false,
  isBrand : true
};

export const DFGBlue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DFGBlue.args = {
  defColor : process.env.DFG_BRAND_COLORS.DFGBlueColor,
  isPrimary : true,
  isSecondary : false,
  isTertiary : false,
  isBrand : true
};

export const StrongDFGBlue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StrongDFGBlue.args = {
  defColor : process.env.DFG_BRAND_COLORS.strongDFGBlueColor,
  isPrimary : true,
  isSecondary : false,
  isTertiary : false,
  isBrand : true
};