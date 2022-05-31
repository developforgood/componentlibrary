import './Button.css';
import { ReactComponent as Icon } from './stories/assets/iconPlace.svg';
import PropTypes from 'prop-types';

function Button({type, state, icon, label, fontSize, fontFamily, color, size, iconAlign}) {
  let styles = {
    fontSize: fontSize,
    fontFamily: fontFamily,
    "--primary": color ? color : "#0043C5"
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
