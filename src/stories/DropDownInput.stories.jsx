import React from 'react';
import { DropDownInput } from './DropDownInput';

export default {
    title: 'Components/FormField/DropDownInput',
    component: DropDownInput,
    argTypes: {
      //ActiveColor: {control: 'color'},
      name: {control: 'text'},
      value: {control: 'text'},
      LabelText: {control: 'text'},
      PlaceHolder: {control: 'text'},
      Options: {options: ['item a', 'item b', 'item c']},
      OnChange: {control: 'function'}
    }
  };

const Template = (args) => <DropDownInput {...args} />;
export const dropDownInput = Template.bind({});

dropDownInput.args = {};

