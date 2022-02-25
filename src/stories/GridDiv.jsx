import React from 'react';
import PropTypes from 'prop-types';
import './grid.css';

/**
 * Desktop UI component for user interaction
 */
export const GridDiv = ({ width,height, smaller }) => {
  const style = {
    width : width + "%",
    height : height
  }
  const name = smaller? 'inner-divs grid-divs' : 'grid-divs';
  return (
    <div
      className={name}
      style = {style}
    >
    </div>
  );
};

GridDiv.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
   width: PropTypes.number,
  /**
   * What background color to use
   */
    height: PropTypes.number,
};

GridDiv.defaultProps = {
  width: 100,
  height: 338
};
