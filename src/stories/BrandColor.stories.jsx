import React from 'react';

import { Color } from './Color.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/ColorPreviews/BrandColor',
  component: Color,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Color {...args} />;

export const UltraLightDFGRed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UltraLightDFGRed.args = {
  color : process.env.DFG_BRAND_COLORS.ultraLightDFGRedColor
};

export const LightDFGRed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightDFGRed.args = {
  color : process.env.DFG_BRAND_COLORS.lightDFGRedColor
};

export const DFGRed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DFGRed.args = {
  color : process.env.DFG_BRAND_COLORS.DFGRedColor
};

export const StrongDFGRed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StrongDFGRed.args = {
  color : process.env.DFG_BRAND_COLORS.strongDFGRedColor
};

export const UltraLightDFGBlue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UltraLightDFGBlue.args = {
  color : process.env.DFG_BRAND_COLORS.ultraLightDFGBlueColor
};

export const LightDFGBlue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightDFGBlue.args = {
  color : process.env.DFG_BRAND_COLORS.lightDFGBlueColor
};

export const DFGBlue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DFGBlue.args = {
  color : process.env.DFG_BRAND_COLORS.DFGBlueColor
};

export const StrongDFGBlue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StrongDFGBlue.args = {
  color : process.env.DFG_BRAND_COLORS.strongDFGBlueColor
};