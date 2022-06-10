import React from "react";
import "./grid.css";
import styled from "styled-components";

const GridDiv = styled.div`
  width : 70%;
  margin-left : 15%;
`

const Col = styled.div`
  height : 100px;
  border-radius : 5px;
  border : 1px solid grey;
`

const Row = styled.div`
  width : 70%;
  margin-left : 15%;
`
/**
 * Desktop UI component for user interaction
 */
export const Grid = ({numRows, numCols, ...props }) => {
  let rows = [];
  for (let j = 0; j < numRows; j++){
    let cols = [];
    let currentCols = 0;
    for (let i = 0; i < numCols; i++){
      if ((12 - currentCols)/(numCols-i) == Math.floor((12 - currentCols)/(numCols-i))){
        cols.push(<Col className = {"col-" + (12 - currentCols)/(numCols-i)} id = {i}/>);
        currentCols += (12 - currentCols)/(numCols-i);
      } else {
        cols.push(<Col className = {"col-" + Math.floor(12/numCols)} id = {i}/>);
        currentCols += Math.floor(12/numCols);
      } 
    }
    rows.push(<Row className = "row">{cols}</Row>);
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