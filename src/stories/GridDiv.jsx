import React from 'react';
import PropTypes from 'prop-types';
import './grid.css';

/**
 * Desktop UI component for user interaction
 */
export const GridDiv = ({ width,height }) => {
  const style = {
    width : {width} + "%",
    height : {height} + "%"
  }
  return (
    <div
      className={['grid-layout', 'inner-divs'].join(" ")}
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
  height: 38
};
