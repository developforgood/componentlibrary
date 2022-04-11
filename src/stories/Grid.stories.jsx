import React from 'react';

import { Grid } from './Grid.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/Grid',
  component: Grid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Grid {...args} />;

export const EqualWidthLayout1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EqualWidthLayout1.args = {
  type : 1
};

export const EqualWidthLayout2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EqualWidthLayout2.args = {
  type : 2
};

