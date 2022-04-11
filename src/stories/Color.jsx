import React from 'react';
import PropTypes from 'prop-types';
import './color.css';


function handleClickToSave(event) { 
  switch (event.target.style.minWidth) {
    case "1px":
      process.env.CUSTOM_BRAND_COLORS.primary = event.target.style.backgroundColor;
      break;
    case "2px":
      process.env.CUSTOM_BRAND_COLORS.secondary = event.target.style.backgroundColor;
      break;
    default:
      process.env.CUSTOM_BRAND_COLORS.tertiary = event.target.style.backgroundColor;
      break;
  }
};

/**
 * Primary UI component for user interaction
 */
export const Color = ({ color, defColor, isPrimary, isSecondary, isTertiary, isBrand,  ...props }) => {
  let style = {
    "width" : "30%",
    "marginLeft" : "20%",
    "marginTop" : 40,
    "height" : 70,
    "borderRadius": 5,
    "background" : defColor,
    "border" : "1px solid gray"
  };
  if (isBrand) {
    const decider = isPrimary ? 1 : isSecondary ? 2 : isTertiary ? 3 : 4;
    if (decider < 4){
      let style2 = {
        "width" : "30%",
        "marginLeft" : "20%",
        "marginTop" : 40,
        "height" : 30,
        "borderRadius": 5,
        "minWidth" : decider,
        "border" : "4 px solid gray",
        "backgroundColor" : defColor,  
      };
      const text = isPrimary ? "primary" : isSecondary ? "secondary" : "tertiary";
      if (color){
        style = {
          "width" : "30%",
          "marginLeft" : "20%",
          "marginTop" : 40,
          "height" : 70,
          "borderRadius": 5,
          "background" : color,
          "border" : "1px solid gray"
        };
        style2 = {
          "width" : "30%",
          "marginLeft" : "20%",
          "marginTop" : 40,
          "height" : 30,
          "borderRadius": 5,
          "minWidth" : decider,
          "border" : "4 px solid gray",
          "backgroundColor" : color,  
        };
        return (
          <div>
          <div style = {style} id = ""></div>
          <button onClick={handleClickToSave} type = "button" style = {style2}> 
          Click to save current customized color to {text} brand color
          </button>
          </div>
        );
      } 
      return (
        <div>
        <div style = {style} id = ""></div>
        <button onClick={handleClickToSave} type = "button" style = {style2}> 
          Click to save current color to {text} brand color
          </button>
        </div>
      );
    }
    const style3 = {
      "marginLeft" : "15%",
    }
    return (
      <div>
      <div style = {style} id = ""></div>
      <h3 style = {style3}> Select one of primary, secondary, or tertiary to set brand colors</h3>
      </div>
    );
  }
  return (
    <div>
    <div style = {style} id = ""></div>
    </div>
  );
};

// bootstrap 12 column base
// can play with tiles on their own
// https://miro.medium.com/max/1024/0*z2Lkt066SfPxfWqM.png