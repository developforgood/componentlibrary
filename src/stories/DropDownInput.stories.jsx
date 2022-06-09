import React from 'react';
import { DropDownInput } from './DropDownInput';

export default {
    title: 'Components/FormField/DropDownInput',
    component: DropDownInput,
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
      Options: {
        options: ['item a', 'item b', 'item c'],
        description: "Options for what choices are in the selection in array format"
      },
      OnChange: {
        control: 'function',
        description: `What -> a function that should dictate what do when value of input changes. 
        Recommended -> const onDropChange = (n, value) => {setDropDownValues({...dropDownValues, [n]: value});} 
        Sample -> see example of how to use component here https://github.com/anguy212/DFG_inputs_ailceTest`
      }
    }
  };

const Template = (args) => <DropDownInput {...args} />;
export const dropDownInput = Template.bind({});

dropDownInput.args = {
  Options : ['item a', 'item b', 'item c'],
  LabelText : "Label Placeholder",
  PlaceHolder : "Input Text"
};

