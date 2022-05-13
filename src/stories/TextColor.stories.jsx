import React from 'react';

import { Text } from './Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/Colors/TextColor',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { 
      control: 'color',
      description : "Sets the color of the div, which can become the new brand color for this storybook."
    },
    type : {
      description : "Identity/Usage of this color",
      control: 'none'
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Text {...args} />;

export const PlaceHolderTextColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PlaceHolderTextColor.args = {
  color : process.env.CUSTOM_COLORS.placeholderText,
  text : "Placeholder Text Color",
  type : 'placeholder text'
};

export const PrimaryTextColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryTextColor.args = {
  color : process.env.CUSTOM_COLORS.primaryText,
  text : "Primary Text Color",
  type : 'primary text'
};

export const SecondaryTextColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SecondaryTextColor.args = {
  color : process.env.CUSTOM_COLORS.secondaryText,
  text : "Secondary Text Color",
  type : 'secondary text'
};