import React from 'react';

import { Grid } from './Grid.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/Grid/Custom',
  component: Grid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    numRows: { control: 'number' },
    numCols: { control: 'number' },
  },
};

const Template = (args) => <Grid {...args} />;
export const CustomLayout = Template.bind({});
CustomLayout.args = {};
