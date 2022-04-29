import React from "react";
import "./grid.css";
import { Row } from './Row.jsx';

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
    <div className = "h-100" style = {style}>
      {rows}
    </div>
    );
};

Grid.defaultProps = {
  numRows: 1,
  numCols: 5,
};