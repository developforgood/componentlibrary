import React from 'react';

import { Color } from './Color.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/ColorPreviews/ErrorColor',
  component: Color,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Color {...args} />;

export const ErrorBackgroundColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ErrorBackgroundColor.args = {
    defColor : process.env.DFG_ERROR_COLORS.errorBackgroundColor,
};

export const ErrorOutlineColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ErrorOutlineColor.args = {
  defColor : process.env.DFG_ERROR_COLORS.errorOutlineColor,
};