import React from 'react';

import { Color } from './Color.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/ColorPreviews/ButtonColor',
  component: Color,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Color {...args} />;

export const BackgroundLightBlue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BackgroundLightBlue.args = {
  color : process.env.DFG_BUTTON_COLORS.backgroundLightBlue
};

export const BackgroundDarkBlue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BackgroundDarkBlue.args = {
  color : process.env.DFG_BUTTON_COLORS.backgroundDarkBlue
};

export const ButtonOutline = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonOutline.args = {
  color : process.env.DFG_BUTTON_COLORS.buttonOutlineColor
};
