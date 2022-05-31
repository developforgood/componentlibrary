import './Button.css';
import { AiFillBell, AiOutlinePlus } from "react-icons/ai";
import PropTypes from 'prop-types';

function Button({type, state, icon, label, fontSize, fontFamily, color, size}) {
  if (color == undefined) {
    color = "#0043C5";
  }
  let styles = {
    fontSize: fontSize,
    fontFamily: fontFamily,
    "--primary": "#0043C5"
  }
  console.log(styles["--primary"]);
  return (
    <button className={`button buttonText ${type} ${state} ${size}`} style={styles} disabled={state === 'disabled'}>
        <i className={`${icon ? "icon" : "hideIcon"}`}><AiOutlinePlus size={14 }/></i>
        {label}
    </button> 
  );
}
Button.defaultProps = {
    type: 'primary',
    icon: false,
    label: 'Primary Action'
}
Button.propTypes = {
    type: PropTypes.oneOf(["superprimary", "primary", "secondary", "tertiary"]),
    icon: PropTypes.bool,
    state: PropTypes.oneOf(["default", "selected", "disabled"]),
    label: PropTypes.string
}
export default Button;
