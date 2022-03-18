import React from 'react';

import { Text } from './Text.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/ColorPreviews/TextColor',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Text {...args} />;

export const PlaceHolderTextColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PlaceHolderTextColor.args = {
  color : process.env.DFG_TEXT_COLORS.placeholderTextColor,
  text : "Placeholder Text Color"
};

export const PrimaryTextColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryTextColor.args = {
  color : process.env.DFG_TEXT_COLORS.primaryTextColor,
  text : "Primary Text Color"
};

export const SecondaryTextColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SecondaryTextColor.args = {
  color : process.env.DFG_TEXT_COLORS.secondaryTextColor,
  text : "Secondary Text Color"
};