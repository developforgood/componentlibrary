import React from 'react';
import PropTypes from 'prop-types';
import './color.css';

/**
 * Primary UI component for user interaction
 */
export const Color = ({ color, ...props }) => {
  const style = {
    "width" : "30%",
    "marginLeft" : "20%",
    "marginTop" : 40,
    "height" : 70,
    "borderRadius": 5,
    "background" : color,
    "border" : "1px solid gray"
  };
  return (
    <div style = {style}>
    </div>
  );
};

// bootstrap 12 column base
// can play with tiles on their own
// https://miro.medium.com/max/1024/0*z2Lkt066SfPxfWqM.png