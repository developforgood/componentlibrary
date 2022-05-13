import React from 'react';

import { Color } from './Color';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/Colors/ErrorColor',
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
    type : {
      description : "Identity/Usage of this color",
      control: 'none'
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Color {...args} />;

export const ErrorBackgroundColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ErrorBackgroundColor.args = {
    defColor : process.env.DFG_ERROR_COLORS.errorBackgroundColor,
    type : 'error background'
};

export const ErrorOutlineColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ErrorOutlineColor.args = {
  defColor : process.env.DFG_ERROR_COLORS.errorOutlineColor,
  type : 'error outline'
};