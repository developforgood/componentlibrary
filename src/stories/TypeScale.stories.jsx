import React from 'react';

import { TypeScale } from './TypeScale.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TypeScale',
  component: TypeScale,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TypeScale {...args} />;


export const Barlow = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Barlow.args = {
  font : "Barlow"
};

export const Montserrat = Template.bind({});
Montserrat.args = {
  font : "Montserrat"
};

export const Source_Sans_Pro = Template.bind({});
Source_Sans_Pro.args = {
  font : "Source_Sans_Pro"
};