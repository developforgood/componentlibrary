import React from 'react';
import styled from "styled-components";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 32px 0px; 
`//ASK ABOUT PADDING FOR EACH INPUT


const Label = styled.label`
  height: 21px;
  font-style: normal;
  font-weight: 600;
  color: #6F6F6F;
  margin-bottom: 3px;
`

const ErrorSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  display: none;
  padding-left: 3px;
  color: #E11414;
`

const Text = styled.input`
  height: 52px;
  border: 1px solid;
  box-sizing: border-box;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  padding: 15px 16px 16px 16px;
  color: #111111;
  &::placeholder {color: grey}
  &::-webkit-datetime-edit { 
    color: ${props => props.dateCorrect === true ? 'grey': props.defaultColor};
    user-select: none;
  }
  &:invalid ~ ${ErrorSpan} {
    display: block;
  }
  &:invalid{
    border: 1px solid ${props => props.clicked === true ? '#E11414': props.defaultColor}
  }
  &:focus{
    outline: none !important;
    border: 2px solid #0067C5;
  }
}
`
/* */
export const BasicInput = (props) => {
    const required = (props.Required? " *": "");
    const [clicked, setClicked] = useState(false);
    const [dateCorrect, setDateCorrect] = useState(true);
    const OnBlur = (e) =>
    {
      setClicked(true)
      setDateCorrect(props.value == "" )
    }
    const labelstyle = {
      "fontSize" : process.env.TYPESCALE.mediumbase,
      "height" : process.env.TYPESCALE.mediumbase + 5,
      "fontFamily" : process.env.FONTS.currentFont
    }
    const textstyle = {
      "fontSize" : process.env.TYPESCALE.smallbase,
      "height" : process.env.TYPESCALE.smallbase + 5,
      "fontFamily" : process.env.FONTS.currentFont
    }
    const fontstyle = {
      "fontFamily" : process.env.FONTS.currentFont
    }
    return (
      <InputHolder>
        <Label style = {labelstyle}> {props.LabelText} {required} </Label>
        <Text
          type = {props.Type}
          name = {props.name}
          required = {props.Required}
          pattern = {props.Pattern}
          onChange = {props.OnChange}
          placeholder = {props.PlaceHolder}
          onBlur = {OnBlur}
          clicked = {clicked}
          dateCorrect = {dateCorrect}
          style = {textstyle}
          //activeColor = {ActiveColor}
        />
        {clicked && 
            (<ErrorSpan style = {fontstyle}>
              <FontAwesomeIcon icon={faTriangleExclamation} />
              &nbsp;
              {props.ErrorMessage}
            </ErrorSpan>)
        }
        <p> Uses medium base for label and small base for text </p>
      </InputHolder>
    );
  };