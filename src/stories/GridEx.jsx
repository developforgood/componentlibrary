import React from "react";
import PropTypes from "prop-types";
// import "./grid.css";

/**
 * Desktop UI component for user interaction
 */
export const GridEx = ({ ...props }) => {
  const style = {
    "border" : "2px solid red",
  };
  const style2 = {
    "border" : "1px solid black",
    "borderRadius" : 5
  };
  
  return (
    // <div
    //     style = {style}
    //     className = "container"
    //     {...props}
    //   >
    //     <div 
    //         style = {style2}
    //         className = "row"
    //     >
    //         <div 
    //             className = "col-sm"
    //         >
    //             <div style = {style2}>
    //                 One-One
    //             </div>
    //         </div>
    //     </div>
    //     <div 
    //     style = {style2}
    //     className = "row"
    //     >
    //         <div 
    //             style = {style2}
    //             className = "col-sm-8"
    //         >
    //         Two-One
    //         </div>
    //         <div 
    //             style = {style2}
    //             className = "col-sm"
    //         >
    //         Two-Two
    //         </div>
    //     </div>
    //     <div 
    //     style = {style2}
    //     className = "row"
    //     >
    //         <div 
    //             style = {style2}
    //             className = "col-sm"
    //         >
    //         Three-One
    //         </div>
    //         <div 
    //             style = {style2}
    //             className = "col-sm"
    //         >
    //         Three-Two
    //         </div>
    //         <div 
    //             style = {style2}
    //             className = "col-sm"
    //         >
    //         Three-Three
    //         </div>
    //     </div>
    // </div>
    <div className="container" style={style}>
<div className="row"  style={style2}>
  <div className="col-12 col-md-8">
      <div style={style2}>
      .col-12 .col-md-8
      </div>
      </div>
  <div className="col-6 col-md-4"><div style={style2}>.col-6 .col-md-4</div></div>
</div>

<div className="row"   style={style2}>
  <div className="col-6 col-md-4"><div style={style2}>.col-6 .col-md-4</div></div>
  <div className="col-6 col-md-4"><div style={style2}>.col-6 .col-md-4</div></div>
  <div className="col-6 col-md-4"><div style={style2}>.col-6 .col-md-4</div></div>
</div>


<div className="row"  style={style2}>
  <div className="col-6"><div style={style2}>.col-6</div></div>
  <div className="col-6"><div style={style2}>.col-6</div></div>
</div>
</div>
  )
};
