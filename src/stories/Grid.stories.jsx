import React from 'react';

import { Grid } from './Grid.jsx';
import { GridDiv } from './GridDiv.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Grid',
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
  // primary: true,
  width:1440,
  height:1024,
  mobile: "false"
};

export const SurfacePro8 = Template.bind({});
SurfacePro8.args = {
  width:1440,
  height:960,
  mobile: "false"
};

export const iPhone13 = Template.bind({});
iPhone13.args = {
  width:390,
  height:844,
  mobile: "true"
};

