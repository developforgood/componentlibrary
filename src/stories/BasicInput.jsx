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
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #6F6F6F;
  margin-bottom: 3px;
`
const ErrorSpan = styled.span`
  font-family: 'Source Sans Pro';
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
  font-size: 18px;
  font-family: 'Source Sans Pro';
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
    return (
      <InputHolder>
        <Label> {props.LabelText} {required} </Label>
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
          //activeColor = {ActiveColor}
        />
        {clicked && 
            (<ErrorSpan>
              <FontAwesomeIcon icon={faTriangleExclamation} />
              &nbsp;
              {props.ErrorMessage}
            </ErrorSpan>)
        }
      </InputHolder>
    );
  };