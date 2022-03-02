import React from "react";
import PropTypes from "prop-types";
import { GridDiv } from "./GridDiv.jsx";
import "./grid.css";

/**
 * Desktop UI component for user interaction
 */
export const Grid = ({ width,height, mobile, ...props }) => {
  const style = {
    "width" : width,
    "height" : height
  };
  if (!mobile){
    const style1 = {
      "width" : 100 + "%",
      "height" : 33/100*height
    };
    const style2 = {
      "width" : 100+"%",
      "height" : 29/100*height
    };
    return (
      <div
        style = {style}
        className = "back"
        {...props}
      >
        <div style = {style1} className = "grid-divs"></div>
          <div 
          className="grid-holder"
          >
            <div style = {style2} className = "grid-divs inner-divs" id = "g1"></div>
            <div style = {style2} className = "grid-divs inner-divs" id = "g2"></div>
            <div style = {style2} className = "grid-divs inner-divs" id = "g3"></div>
          </div>
      </div>
    );
  } 
  const style1 = {
    "width":88+"%",
    "height":0.208*height,
    "marginTop":0.088*height,
    "marginLeft":6+"%"
  };
  const style2 = {
    "width":73.8+"%",
    "height":0.208*height,
    "marginTop":0.202*height,
    "marginLeft":13.1+"%"
  };
  const style3 = {
    "width":73.8+"%",
    "height":0.208*height,
    "marginTop":0.059*height,
    "marginLeft":13.1+"%"
  };
  return (
    <div
      style = {style}
      className = "back"
      {...props}
    >
      <div style = {style1} className = "grid-divs inner-divs"></div>
      <div style = {style2} className = "grid-divs inner-divs"></div>
      <div style = {style3} className = "grid-divs inner-divs"></div>
      {/* <GridDiv props = {344, 176}/>
      <GridDiv props = {254, 176}/>
      <GridDiv props = {254, 176}/> */}
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
  width: 100,
  height: 1024
};