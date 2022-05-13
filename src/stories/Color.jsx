import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

function handleClickToSaveBrand(event) { 
  switch (event.target.style.minWidth) {
    case "1px":
      process.env.CUSTOM_COLORS.primary = event.target.style.backgroundColor;
      break;
    case "2px":
      process.env.CUSTOM_COLORS.secondary = event.target.style.backgroundColor;
      break;
    default:
      process.env.CUSTOM_COLORS.tertiary = event.target.style.backgroundColor;
      break;
  }
};

function handleClickToSaveBackground(event) {
  process.env.CUSTOM_COLORS.background = event.target.style.backgroundColor;
}

function handleClickToSaveErrorBackground(event) {
  process.env.CUSTOM_COLORS.errorBackground = event.target.style.backgroundColor;
}

function handleClickToSaveErrorOutline(event) {
  process.env.CUSTOM_COLORS.errorOutline = event.target.style.backgroundColor;
}

function handleClickToSaveSuccessBackground(event) {
  process.env.CUSTOM_COLORS.successBackground = event.target.style.backgroundColor;
}

function handleClickToSaveSuccessOutline(event) {
  process.env.CUSTOM_COLORS.successOutline = event.target.style.backgroundColor;
}

function handleClickToSavePlaceholderText(event) {
  process.env.CUSTOM_COLORS.placeholderText = event.target.style.backgroundColor;
}

function handleClickToSavePrimaryText(event) {
  process.env.CUSTOM_COLORS.primaryText = event.target.style.backgroundColor;
}

function handleClickToSaveSecondaryText(event) {
  process.env.CUSTOM_COLORS.secondaryText = event.target.style.backgroundColor;
}

function handleClickToSaveWarningBackground(event) {
  process.env.CUSTOM_COLORS.warningBackground = event.target.style.backgroundColor;
}

function handleClickToSaveWarningOutline(event) {
  process.env.CUSTOM_COLORS.warningOutline = event.target.style.backgroundColor;
}


const ColorDiv = styled.div`
  width : 30%;
  margin-left : 20%;
  margin-top : 40px;
  height : 70px;
  border-radius: 5px;
  background : ${props => props.color};
  border : 1px solid gray;
`

const UpdateButton = styled.button`
  display : ${props => props.show === true ? "block" : "none"};
  margin-left : 17%;
  margin-top : 40px;
  height : 30px;
  border-radius : 5px;
  border : 1px solid gray;
  min-width : ${props => props.decider};
  background : ${props => props.color};
`

const DisplayText = styled.h5`
  display : ${props => props.show === true ? "block" : "none"};
  margin-top : 40px;
  margin-left : 17%;
`

function typeToFunctionMatcher(type, defColor, color) {
  const text = type;
  const toBeReturned = color ? color : defColor;
  const displayButton = toBeReturned !== defColor;
  let fn;
  switch (type) {
    case 'background':
      fn = handleClickToSaveBackground;
    case 'error background':
      fn = handleClickToSaveErrorBackground;
    case 'error outline':
      fn = handleClickToSaveErrorOutline;
    case 'success background':
      fn = handleClickToSaveSuccessBackground;
    case 'success outline':
      fn = handleClickToSaveSuccessOutline;
    case 'placeholder text':
      fn = handleClickToSavePlaceholderText;
    case 'primary text':
      fn = handleClickToSavePrimaryText;
    case 'secondary text':
      fn = handleClickToSaveSecondaryText;
    case 'warning background':
      fn = handleClickToSaveWarningBackground;
    default:
      fn = handleClickToSaveWarningOutline;
  }
  return [text, toBeReturned, fn, displayButton];
} 
/**
 * Primary UI component for user interaction
 */
export const Color = ({ color, defColor, state, type,  ...props }) => {
  let displayColor = defColor;
  let decider = 1;
  let text = '';
  let displayUpdateButton = true;
  let helptext = "Select a color in the color field to customize color";
  let clickhandler;
  if (type === 'brand'){
    decider = state === 'primary' ? 1 : state === 'secondary' ? 2 : state === 'tertiary' ? 3 : 4;
    displayUpdateButton = decider < 4;
    text = decider === 1 ? "primary brand" : decider === 2 ? "secondary brand" : "tertiary brand";
    if (decider < 4 && color){
      displayColor = color;
    }
    clickhandler = handleClickToSaveBrand;
  } else {
    [text, displayColor, clickhandler, displayUpdateButton] = typeToFunctionMatcher(type,defColor, color);
  }
  const displaytext = "Click to save current customized color to " + {text} + color;
  return (
    <div>
      <ColorDiv color = {displayColor}/>
      <UpdateButton 
        show = {displayUpdateButton} 
        decider = {decider}
        onClick={clickhandler}
        color = {displayColor}
      >
        Click to save current customized color to {text} color
      </UpdateButton>
      <DisplayText show = {!displayUpdateButton}>{helptext}</DisplayText>
    </div>
  );
};