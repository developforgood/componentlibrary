import React from 'react';
import PropTypes from 'prop-types';
import { GridDiv } from './GridDiv.jsx';
import './grid.css';

/**
 * Desktop UI component for user interaction
 */
export const Grid = ({ width,height, ...props }) => {
    const style = {
        "width" : {width} + "px",
        "height" : {height} + "px"
    }
  if (props.mobile == "false"){
    return (
        <div
          className={'grid-layout'}
          style = {style}
          {...props}
        >
            <GridDiv props = {100, 37.89}/>
            <GridDiv props = {32.5, 31.25}/>
            <GridDiv props = {32.5, 31.25}/>
            <GridDiv props = {32.5, 31.25}/>
        </div>
    );
  } 
  return (
    <div
      className={'grid-layout'}
      width = {width}
      height = {height}
      {...props}
    >
        <GridDiv props = {88, 21}/>
        <GridDiv props = {65.1, 21}/>
        <GridDiv props = {65.1, 21}/>
    </div>
  );
};

Grid.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
   width: PropTypes.number,
  /**
   * What background color to use
   */
  height: PropTypes.number,
};

Grid.defaultProps = {
  width: 1440,
  height: 1024
};
