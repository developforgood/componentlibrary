import React from 'react';

import { GridEx } from './GridEx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/Grid',
  component: GridEx,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: { 
      control: 'none',
      description : "Just the number assigned to each example layout. Should not modify."
    },
  },
};

const Template = (args) => <GridEx {...args} />;

export const ExampleLayout1 = Template.bind({});
ExampleLayout1.args = {
  type : 1
};

export const ExampleLayout2 = Template.bind({});
ExampleLayout2.args = {
  type : 2
};