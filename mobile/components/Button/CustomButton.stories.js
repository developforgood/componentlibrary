import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CustomButton from './CustomButton';
import { View, Text } from 'react-native';

import { radios } from '@storybook/addon-knobs';

import { action } from '@storybook/addon-actions';

const buttonStories = storiesOf('Buttons', module);

const colorOptions = ['hotpink', 'cyan'];

const typeOptions = ['elevated', 'filled', 'outlined', 'text'];

const stateOptions = ['default', 'selected', 'disabled'];

const sizeOptions = ['sm', 'md', 'lg'];

const alignOptions = ['left', 'right'];

buttonStories.add('Default', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <CustomButton type={radios('type', typeOptions, typeOptions[1])} icon={radios('icon', ['true', ''], 'true')} state={radios('state', stateOptions, stateOptions[0])} size={radios('size', sizeOptions, sizeOptions[0])} iconAlign={radios('iconAlign', alignOptions, alignOptions[0])}>
    </CustomButton>
  </View>
));

buttonStories.add('Selected', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <CustomButton
      type={radios('type', typeOptions, typeOptions[1])} icon={radios('icon', ['true', 'false'], 'true')} state={radios('state', stateOptions, stateOptions[1])} size={radios('size', sizeOptions, sizeOptions[0])} iconAlign={radios('iconAlign', alignOptions, alignOptions[0])}>
    </CustomButton>
  </View>
));

buttonStories.add('Disabled', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <CustomButton type={radios('type', typeOptions, typeOptions[1])} icon={radios('icon', ['true', 'false'], 'true')} state={radios('state', stateOptions, stateOptions[2])} size={radios('size', sizeOptions, sizeOptions[0])} iconAlign={radios('iconAlign', alignOptions, alignOptions[0])}>
    </CustomButton>
  </View>
));
