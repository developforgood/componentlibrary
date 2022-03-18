import React from 'react';

import { Color } from './Color.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/ColorPreviews/BackgroundColor',
  component: Color,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Color {...args} />;

export const Background = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Background.args = {
    color : process.env.DFG_BACKGROUND_COLORS.backgroundColor,
};