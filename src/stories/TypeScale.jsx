import React from 'react';
import PropTypes from 'prop-types';
import './typescale.css';


/**
 * Primary UI component for user interaction
 */
export const TypeScale = ({ size, font, ...props }) => {
  const style = {
    "fontFamily" : font,
    "fontSize" : size,
  }
  return (
    <div>
        <p style = {style}>
            Hello
        </p>
    </div>
  );
};

TypeScale.propTypes = {
    font: PropTypes.oneOf(['Barlow', 'Source Sans Pro', 'Montserrat']),
    size: PropTypes.number
};

TypeScale.defaultProps = {
  size : 60,
};
