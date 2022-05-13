import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


const TextDiv = styled.div`
  border-radius : 5px;
  border : 1px solid gray;
  background : ${props => props.backgroundcolor};
  margin-left : 20%;
`

const TextContent = styled.p`
  color : ${props => props.color};
  font-size : 40px;
`

/**
 * Primary UI component for user interaction
 */
export const Text = ({ color, text, ...props }) => {
  return (
    <TextDiv backgroundcolor = {process.env.DFG_BACKGROUND_COLORS.backgroundColor}>
        <TextContent color = {color}> {text} </TextContent>
    </TextDiv>
  );
};

// bootstrap 12 column base
// can play with tiles on their own
// https://miro.medium.com/max/1024/0*z2Lkt066SfPxfWqM.png