import React from "react";
import "./grid.css";

/**
 * Desktop UI component for user interaction
 */
export const Col = ({colSize, ...props }) => {
    let classname = "col-" + colSize;
    const style = {
        height : 100,
        borderRadius: "5px",
        border : "1px solid grey"
    };
    return (
        <div className = {classname} style = {style}></div>
    );
}