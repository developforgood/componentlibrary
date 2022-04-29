import React from "react";
import "./grid.css";
import { Col } from './Col.jsx';

/**
 * Desktop UI component for user interaction
 */
export const Row = ({colNum, ...props }) => {
  let cols = [];
  let currentCols = 0;
  for (let i = 0; i < colNum; i++){
    if ((12 - currentCols)/(colNum-i) == Math.floor((12 - currentCols)/(colNum-i))){
      cols.push(<Col colSize = {(12 - currentCols)/(colNum-i)} />);
      currentCols += (12 - currentCols)/(colNum-i);
    } else {
      cols.push(<Col colSize = {Math.floor(12/colNum)} />);
      currentCols += Math.floor(12/colNum);
    } 
  }
  return (
    <div className = "row">
        {cols}
    </div>
  );
}