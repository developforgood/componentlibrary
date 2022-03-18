import React from 'react';

import { Color } from './Color.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/ColorPreviews/WarningColor',
  component: Color,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Color {...args} />;

export const WarningBackgroundColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WarningBackgroundColor.args = {
    color : process.env.DFG_WARNING_COLORS.warningBackgroundColor,
};

export const WarningOutlineColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WarningOutlineColor.args = {
    color : process.env.DFG_WARNING_COLORS.warningOutlineColor,
};