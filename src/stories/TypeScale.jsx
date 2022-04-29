import React from 'react';
import PropTypes from 'prop-types';
import './typescale.css';


function handleClickToSave(event) { 
  const toBeParsed = event.target.style.maxWidth.substring(0,event.target.style.maxWidth.length-2).valueOf()/300;
  console.log(toBeParsed);
  switch (event.target.style.marginTop) {
    case "0px":
      process.env.TYPESCALE.extralargetitle = toBeParsed;
      break;
    case "1px":
      process.env.TYPESCALE.largetitle = toBeParsed;
      break;
    case "2px":
      process.env.TYPESCALE.mediumtitle = toBeParsed;
      break;
    case "3px":
      process.env.TYPESCALE.smalltitle = toBeParsed;
      break;  
    case "4px":
      process.env.TYPESCALE.extralargebase = toBeParsed;
      break;
    case "5px":
      process.env.TYPESCALE.largebase = toBeParsed;
      break;  
    case "6px":
      process.env.TYPESCALE.mediumbase = toBeParsed;
      break;
    default:
      process.env.TYPESCALE.smallbase = toBeParsed;
      break;
  }
};


/**
 * Primary UI component for user interaction
 */
export const TypeScale = ({ size, defSize, font, type, ...props }) => {
  let style = {
    "fontFamily" : font,
    "fontSize" : defSize,
    "marginLeft" : "30%"
  };
  const decider = type;
  if (size) {
    style = {
      "fontFamily" : font,
      "fontSize" : size,
      "marginLeft" : "30%"
    };
    let style2 = {
      "width" : "30%",
      "marginLeft" : "20%",
      "marginTop" : 40,
      "height" : 30,
      "borderRadius": 5,
      "border" : "4 px solid gray",
      "fontFamily" : font,
      "marginTop" : decider,
      "maxWidth" : size * 300,
      "fontSize" : 20
    };
    return (
      <div>
        <div>
          <p style = {style}>
              Hello
          </p>
        </div>
        <div>
          <button onClick={handleClickToSave} type = "button" style = {style2}> 
            Click to save current customized font size to {size}
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <p style = {style}>
            Hello
        </p>
      </div>
    </div>
  );
};