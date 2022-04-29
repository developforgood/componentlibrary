import React from 'react';

import { GridEx } from './GridEx.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitives/Grid/Example',
  component: GridEx,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
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