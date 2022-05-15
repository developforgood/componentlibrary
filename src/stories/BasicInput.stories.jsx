import React from 'react';
import { BasicInput } from './BasicInput';

export default {
    title: 'Components/FormField/BasicInput',
    component: BasicInput,
    argTypes: {
      name: {
        control: 'text',
        description: "Name of corresponding value in useState value array. Will place what the user types into this value in the array."
      },
      LabelText: {
        control: 'text',
        description: "Name of the label that sits on top of the input."
      },
      PlaceHolder: {
        control: 'text',
        description: "Placeholder for the input when the user has not typed anything in yet. May be kept blank if needed"
      },
      Required: {
        control: 'boolean',
        description: "Decides if input type is required to complete form. If true, can not proceed until info is entered"
      },
      ErrorMessage: {
        control: 'text',
        description: "Error message that pops up when info entered is incorrect"
      },
      Type: {
        control: 'text',
        description: "Type of input. ex/ date, time, text"
      },
      Pattern: {
        control: 'text',
        description: "Regex pattern to check input with. Will use this to determine if error message should show"
      },
      OnChange: {
        control: 'function',
        description: `What -> a function that should dictate what do when value of input changes. 
        Recommended -> const onChange = (e) => { setValues({ ...values, [e.target.name]: e.target.value });}; 
        Sample -> see example of how to use component here https://github.com/anguy212/DFG_inputs_ailceTest`
      }
    }
  };

const Template = (args) => <BasicInput {...args} />;
export const basicInput = Template.bind({});

basicInput.args = {};

