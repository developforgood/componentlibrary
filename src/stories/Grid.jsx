import React from "react";
import "./grid.css";
import styled from "styled-components";
import { Row } from './Row.jsx';


const GridDiv = styled.div`
  width : 70%;
  margin-left : 15%;
`
/**
 * Desktop UI component for user interaction
 */
export const Grid = ({numRows, numCols, ...props }) => {
  let rows = [];
  const style = {
    width : "70%",
    marginLeft : "15%"
  }
  for (let i = 0; i < numRows; i++){
    rows.push(<Row colNum = {numCols} />);
  }
  return (
    <GridDiv className = "h-100">
      {rows}
    </GridDiv>
    );
};

Grid.defaultProps = {
  numRows: 1,
  numCols: 5,
};