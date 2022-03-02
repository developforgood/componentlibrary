import React from 'react';
import { FormField } from './FormField';

export default {
    title: 'Components/FormField',
    component: FormField,
  };

const Template = (args) => <FormField {...args} />;
export const Field = Template.bind({});
Field.args = {
    label: "Input"
};