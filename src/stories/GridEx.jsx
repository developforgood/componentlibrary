import React from "react";
import PropTypes from "prop-types";
import "./grid.css";

/**
 * Desktop UI component for user interaction
 */
 export const GridEx = ({type, ...props }) => {
  const style = {
    "height":"100vh"
  };
  const style2 = {
    "backgroundColor": "lightgrey",
    "borderRadius" : 5,
    "width": "100%",
    "height" : "100%"
  };
  if (type === 2){
    return (
      <div 
      className="container"
      style = {style}>
        <div
        className="row px-2 pt-3 pb-0 h-50"
        >
          <div
          style = {style2}>
          </div>
        </div>
        <div
        className="row p-1 pt-3 h-25"
        >
          <div
          className="col-12 col-md-6 p-1 h-100"
          >
            <div style = {style2}></div>
          </div>
          <div
          className="col-12 col-md-6 p-1 h-100"
          >
            <div style = {style2}></div>
          </div>
        </div>
      </div> 
    );
  }
  return (
    <div 
    className="container"
    style = {style}>
      <div
      className="row p-2 pt-3"
      id = "firstRow"
      >
        <div
        style={style2}>
        </div>
      </div>  
      <div
      className="row px-2 py-0 pb-2"
      id = "secondRow"
      >
        <div 
        className="col-6 px-0 pe-1"
        >
          <div
          style={style2}>
          </div>
        </div>
        <div 
        className="col-6 h-100 ml-2 p-0 ps-1">
          <div
          className="row m-0"
          id = "h-37"
          >
            <div
            style = {style2}>
            </div>
          </div>
          <div
          className="row mx-0 mb-0 pt-3"
          id = "h-568"
          >
            <div
            style = {style2}>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}