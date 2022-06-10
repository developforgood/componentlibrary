import './Button.css';
import { ReactComponent as Icon } from './stories/assets/iconPlace.svg';
import PropTypes from 'prop-types';

function Button({type, state, icon, label, fontSize, fontFamily, color, size, iconAlign}) {
  let styles;
  if (size === 'sm') {
    styles = {
        "fontSize" : process.env.TYPESCALE.smallbase,
        "fontFamily" : process.env.FONTS.currentFont,
        // "--primary": process.env.CUSTOM_COLORS.primary ? process.env.CUSTOM_COLORS.primary : "#0043C5"
        "--primary": process.env.CUSTOM_COLORS.primary,
        "backgroundColor" : process.env.CUSTOM_COLORS.primary
    }
  } else if (size === 'md') {
    styles = {
      fontSize: process.env.TYPESCALE.mediumbase,
      fontFamily: process.env.FONTS.currentFont,
      // "--primary": process.env.CUSTOM_COLORS.primary ? process.env.CUSTOM_COLORS.primary : "#0043C5"
      "--primary": process.env.CUSTOM_COLORS.primary,
      "backgroundColor" : process.env.CUSTOM_COLORS.primary
    } 
  } else {
    styles = {
      fontSize: process.env.TYPESCALE.largebase,
      fontFamily: process.env.FONTS.currentFont,
      // "--primary": process.env.CUSTOM_COLORS.primary ? process.env.CUSTOM_COLORS.primary : "#0043C5"
      "--primary": process.env.CUSTOM_COLORS.primary,
      "backgroundColor" : process.env.CUSTOM_COLORS.primary
    } 
  }
  if (type === "outlined" || type === "text"){
    styles.borderColor = process.env.CUSTOM_COLORS.primary;
    styles.color = process.env.CUSTOM_COLORS.primary;
  }
  if (type !== "filled"){
    styles.backgroundColor = "#FFFFFF";
  } 
  
  return (
    <button className={`button buttonText ${type} ${state} ${size}`} style={styles} disabled={state === 'disabled'}>
        {iconAlign == "right" &&
        <>
        <i className={`${icon ? "iconR" : "hideIcon"}`}><Icon className={`icon ${state} ${type}-svg`}/></i>
        {label}
        </>
        }
        {iconAlign == "left" &&
        <>
        {label}
        <i className={`${icon ? "iconL" : "hideIcon"}`}><Icon className={`icon ${state} ${type}-svg`}/></i>
        </>
        }
    </button>
  );
}
Button.defaultProps = {
    type: 'filled',
    icon: false,
    label: 'Primary Action',
    size: 'md',
    iconAlign: "right"
}
Button.propTypes = {
    type: PropTypes.oneOf(["elevated", "filled", "outlined", "text"]),
    icon: PropTypes.bool,
    state: PropTypes.oneOf(["default", "selected", "disabled"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    label: PropTypes.string,
    iconAlign: PropTypes.oneOf(["right", "left"]),
}
export default Button;
