import React from 'react';

import { Color } from './Color';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/Colors/WarningColor',
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

export const WarningBackgroundColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WarningBackgroundColor.args = {
    defColor : process.env.CUSTOM_COLORS.warningBackground,
    type : 'warning background'
};

export const WarningOutlineColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WarningOutlineColor.args = {
  defColor : process.env.CUSTOM_COLORS.warningOutline,
  type : 'warning outline'
};