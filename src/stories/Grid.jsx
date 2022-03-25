import React from "react";
import PropTypes from "prop-types";
import { GridDiv } from "./GridDiv.jsx";
import "./grid.css";

/**
 * Desktop UI component for user interaction
 */
export const Grid = ({ width,height,type, ...props }) => {
  const style = {
    "width" : width,
    "height" : height
  };
  if (type == 1){
    const style1 = {
      "width" : 95.7 + "%",
      "height" : 32.4/100*height,
      "marginTop" : 28,
      "marginLeft" : 32
    };
    const style2 = {
      "width" : 95.7+"%",
      "height" : 62.5/100*height,
      "marginTop" : 2.24/100*height,
      "marginLeft" : 32
    };
    const style2_1 = {
      "width" : 49.37+"%",
      "height" : 62.5/100*height,
      "display" : "inline-block",
      "marginTop" : 0
    }
    const style2_2 = {
      "width" : 49.3+"%",
      "height" : 62.5/100*height,
      "marginLeft" : 19,
      "display" : "inline-block"
    }
    const style2_2_1 = {
      "width" : 100+"%",
      "height" : 23.1/100*height,
    }
    const style2_2_2 = {
      "width" : 100+"%",
      "height" : 35.5/100*height,
      "marginTop" : 38,
    }
    return (
      <div
        style = {style}
        {...props}
      >
        <div style = {style1} className = "grid-divs"></div>
        <div style = {style2}> 
          <div style = {style2_1} className = "grid-divs"></div>
          <div style = {style2_2}>
            <div style = {style2_2_1} className = "grid-divs"></div>  
            <div style = {style2_2_2} className = "grid-divs"></div>  
          </div>
        </div>
      </div>
    );
  } else if (type == 2){
    const style1 = {
      "width" : 95.7 + "%",
      "height" : 32.4/100*height,
      "marginTop" : 21,
      "marginLeft" : 16
    };
    const style2 = {
      "width" : 95.7+"%",
      "height" : 23.1/100*height,
      "marginTop" : 30,
      "marginLeft" : 16
    };
    const style3_1 = {
      "width" : 46.5+"%",
      "height" : 12.9/100*height,
      "marginLeft" : 16,
      "marginTop" : 30,
      "display":"inline-block"
    }
    const style3_2 = {
      "width" : 46.5+"%",
      "height" : 12.9/100*height,
      "marginLeft" : 20,
      "marginTop" : 30,
      "display":"inline-block"
    }
    return (
      <div
        style = {style}
        {...props}
      >
        <div style = {style1} className = "grid-divs"></div>
        <div style = {style2} className = "grid-divs"></div>
        <div style = {style3_1} className = "grid-divs"></div>
        <div style = {style3_2} className = "grid-divs"></div>
        <div style = {style3_1} className = "grid-divs"></div>
        <div style = {style3_2} className = "grid-divs"></div>
        <div style = {style3_1} className = "grid-divs"></div>
        <div style = {style3_2} className = "grid-divs"></div>
      </div>
    )
  } else if (type == 3){
    const style1 = {
      "width" : 97 + "%",
      "height" : 50.8/100*height,
      "marginTop" : 21,
      "marginLeft" : 16
    };
    const style2 = {
      "width" : 97 + "%",
      "height" : 39.2/100*height,
      "marginTop" : 43,
      "marginLeft" : 16
    };
    const style2_1 = {
      "width" : 49.1+"%",
      "height" : 39.2/100*height,
      "display":"inline-block"
    }
    const style2_2 = {
      "width" : 49.1+"%",
      "height" : 39.2/100*height,
      "marginLeft" : 19.8,
      "display":"inline-block"
    }
    return (
      <div
        style = {style}
        {...props}
      >
        <div style = {style1} className = "grid-divs"></div>
        <div style = {style2}>
          <div style = {style2_1} className = "grid-divs"></div>
          <div style = {style2_2} className = "grid-divs"></div>
        </div>
      </div>
    )
  } 
  const style1 = {
    "width" : 92.5 + "%",
    "height" : 19.7/100*height,
    "marginTop" : 23,
    "marginLeft" : 16
  };
  const style2 = {
    "width" : 92.5 + "%",
    "height" : 7.1/100*height,
    "marginTop" : 24,
    "marginLeft" : 16
  };
  const style3 = {
    "width" : 92.5 + "%",
    "height" : 45.8/100*height,
    "marginTop" : 26,
    "marginLeft" : 16
  };
  const style3_1 = {
    "width" : 47.4 + "%",
    "height" : 18.8/100*height,
    "display" : "inline-block"
  };
  const style3_2 = {
    "width" : 47.4 + "%",
    "height" : 18.8/100*height,
    "marginLeft" : 20,
    "display" : "inline-block"
  };
  const style3_3 = {
    "width" : 47.4 + "%",
    "height" : 24.4/100*height,
    "marginTop" : 24,
    "display" : "inline-block"
  };
  const style3_4 = {
    "width" : 47.4 + "%",
    "height" : 24.4/100*height,
    "marginTop" : 24,
    "marginLeft" : 20,
    "display" : "inline-block"
  };

  
  return (
    <div
      style = {style}
      {...props}
    >
      <div style = {style1} className = "grid-divs"></div>
      <div style = {style2} className = "grid-divs"></div>
      <div style = {style2} className = "grid-divs"></div>
      <div style = {style2} className = "grid-divs"></div>
      <div style = {style3}>
        <div style = {style3_1} className = "grid-divs"></div>
        <div style = {style3_2} className = "grid-divs"></div>
        <div style = {style3_3} className = "grid-divs"></div>
        <div style = {style3_4} className = "grid-divs"></div>
      </div>
    </div>
  )
};

Grid.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  width: PropTypes.number,
  /**
   * What background color to use
   */
  height: PropTypes.number,
};

Grid.defaultProps = {
  width: 100,
  height: 1024
};