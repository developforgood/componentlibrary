import React from 'react';
import { BasicInput } from './BasicInput';

export default {
    title: 'Components/FormField/BasicInput',
    component: BasicInput,
    argTypes: {
      //ActiveColor: {control: 'color'},
      name: {control: 'text'},
      LabelText: {control: 'text'},
      PlaceHolder: {control: 'text'},
      Required: {control: 'boolean'},
      ErrorMessage: {control: 'text'},
      Type: {control: 'text'},
      Pattern: {control: 'text'},
      value: {control: 'text'},
      OnChange: {control: 'function'}
    }
  };

const Template = (args) => <BasicInput {...args} />;
export const basicInput = Template.bind({});

basicInput.args = {};

