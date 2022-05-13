import React from 'react';

import { Grid } from './Grid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/Grid',
  component: Grid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    numRows: { 
      control: 'number',
      description : "Number of rows in this custom matrix-like layout"
   },
    numCols: { 
      control: 'number',
      description : "Number of columns in this custom matrix-like layout"
    },
  },
};

const Template = (args) => <Grid {...args} />;
export const CustomLayout = Template.bind({});
CustomLayout.args = {};
