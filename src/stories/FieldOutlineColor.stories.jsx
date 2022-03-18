import React from 'react';

import { Color } from './Color.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/ColorPreviews/FieldOutlineColor',
  component: Color,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Color {...args} />;

export const FieldOutlineBackgroundColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FieldOutlineBackgroundColor.args = {
    color : process.env.DFG_FIELD_OUTLINE_COLORS.fieldBackgroundColor,
};

export const FieldOutlineOutlineColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FieldOutlineOutlineColor.args = {
    color : process.env.DFG_FIELD_OUTLINE_COLORS.fieldOutlineColor,
};