import React from 'react';
import PropTypes from 'prop-types';
import './typescale.css';


/**
 * Primary UI component for user interaction
 */
export const TypeScale = ({ font, ...props }) => {
  let font_proxy = font;
  if (font === "Source_Sans_Pro"){
      font_proxy = "Source Sans Pro";
  }
  return (
    <div>
        <div style = {{display: 'inline-block'}}>
            <p style = {{ fontSize: 12, fontFamily : font, margin:0 }}>Bold</p><b><p style = {{ fontSize: 60, fontFamily : font, margin:0 }}>   {font_proxy}</p></b><br></br>
            <p style = {{ fontSize: 12, fontFamily : font, margin:0 }}>SemiBold</p><p style = {{ fontSize: 60, fontFamily : font, fontWeight : 500, margin:0 }}>    {font_proxy}</p><br></br>
            <p style = {{ fontSize: 12, fontFamily : font, margin:0 }}>Regular</p><p style = {{ fontSize: 60, fontFamily : font, fontWeight : 400, margin:0  }}>    {font_proxy}</p><br></br>
            <p style = {{ fontSize: 12, fontFamily : font, margin:0 }}>Light</p><p style = {{ fontSize: 60, fontFamily : font, fontWeight : 300, margin:0 }}>   {font_proxy}</p>
        </div>
        <div style = {{display: 'inline-block', marginTop : 0, marginLeft: 120}}>
            <div style = {{marginTop : 0}}>
                <p style = {{ fontSize: 12, fontFamily : font}}>32pt</p><b><p style = {{ fontSize: 32, fontFamily : font}}>  Extra Large Base</p></b><br></br>
            </div>
            <div style = {{ marginTop:30 }}>
                <p style = {{ fontSize: 12, fontFamily : font}}>28pt</p><p style = {{ fontSize: 28, fontFamily : font, fontWeight : 500}}>  Large Base</p><br></br>
            </div>
            <div style = {{ marginTop:30 }}>
                <p style = {{ fontSize: 12, fontFamily : font}}>16pt</p><p style = {{ fontSize: 16, fontFamily : font, fontWeight : 400}}>  Medium Base</p><br></br>
            </div>
            <div style = {{ marginTop:30 }}>
                <p style = {{ fontSize: 12, fontFamily : font}}>12pt</p><p style = {{ fontSize: 12, fontFamily : font, fontWeight : 300}}>  Small Base</p>    
            </div>    
        </div>
        <div style = {{display: 'inline-block', marginTop : 0, marginLeft: 120}}>
            <div>
                <p style = {{ fontSize: 12, fontFamily : font}}>60pt</p><b><p style = {{ fontSize: 60, fontFamily : font}}>  Extra Large Title</p></b><br></br>
            </div>
            <div>
                <p style = {{ fontSize: 12, fontFamily : font}}>52pt</p><p style = {{ fontSize: 52, fontFamily : font, fontWeight : 500}}>  Large Title</p><br></br>
            </div>
            <div>
                <p style = {{ fontSize: 12, fontFamily : font}}>37pt</p><p style = {{ fontSize: 37, fontFamily : font, fontWeight : 400}}>  Medium Title</p><br></br>
            </div>
            <div>
                <p style = {{ fontSize: 12, fontFamily : font}}>32pt</p><p style = {{ fontSize: 32, fontFamily : font, fontWeight : 300}}>  Small Title</p>    
            </div>    
        </div>
    </div>
  );
};

// TypeScale.propTypes = {
// };

TypeScale.defaultProps = {
  font : "Barlow",
  primary: true,
};
