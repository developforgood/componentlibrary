import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary = (args, { globals: { brandColor } }) => {
  return <Button primary = {true} backgroundColor = {brandColor} label = {'Button'} />;
}

export const Secondary = (args, { globals: { brandColor } }) => {
  return <Button backgroundColor = {brandColor} label = {'Button'} />;
}

export const Large = (args, { globals: { buttonColor } }) => {
  return <Button backgroundColor = {buttonColor} label = {'Button'} size = {'large'}/>;
}

export const Small = (args, { globals: { buttonColor } }) => {
  return <Button backgroundColor = {buttonColor} label = {'Button'} size = {'small'}/>;
}
