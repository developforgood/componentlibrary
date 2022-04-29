import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Text = ({ color, text, ...props }) => {
  const style = {
    "borderRadius" : 5,
    "border" : "1px solid gray",
    "background" : "#EFF2F5",
    "width": 180
  };
  const style2 = {
    "color" : color
  };
  return (
    <div style = {style}>
        <p style = {style2}> {text} </p>
    </div>
  );
};

// bootstrap 12 column base
// can play with tiles on their own
// https://miro.medium.com/max/1024/0*z2Lkt066SfPxfWqM.png