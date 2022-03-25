import React from 'react';

import { Grid } from './Grid.jsx';
import { GridDiv } from './GridDiv.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/Grid',
  component: Grid,
  subcomponents: { GridDiv },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    width: Number,
    height: Number
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Grid {...args} />;

export const Desktop = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Desktop.args = {
  width:1512,
  height:982,
  type : 1
};

export const Tablet1 = Template.bind({});
Tablet1.args = {
  width:744,
  height:1133,
  type : 2
};

export const Tablet2 = Template.bind({});
Tablet2.args = {
  width:1133,
  height:744,
  type : 3
};

export const Mobile = Template.bind({});
Mobile.args = {
  width:428,
  height:926,
  type : 4
};

