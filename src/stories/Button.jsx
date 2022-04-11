import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { globalTypes } from '../../.storybook/preview';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ buttonType, backgroundColor, size, label, ...props }) => {
  let style = {};
  switch (buttonType) {
    case 'primary':
      if (backgroundColor != process.env.CUSTOM_BRAND_COLORS.primary){
        backgroundColor = process.env.CUSTOM_BRAND_COLORS.primary;
      }
      style = {
        "backgroundColor" : backgroundColor,
        "fontFamily" : "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        "fontWeight" : "700",
        "border" : 0,
        "borderRadius" : "3em",
        "cursor" : "pointer",
        "display" : "inline-block",
        "lineHeight" : 1,
        "color" : "white"
      }
      break;
    case 'secondary':
      if (backgroundColor != process.env.CUSTOM_BRAND_COLORS.secondary){
        backgroundColor = process.env.CUSTOM_BRAND_COLORS.secondary;
      }
      style = {
        "backgroundColor" : backgroundColor,
        "fontFamily" : "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        "fontWeight" : "700",
        "border" : 0,
        "borderRadius" : "3em",
        "cursor" : "pointer",
        "display" : "inline-block",
        "lineHeight" : 1,
        "color" : "white",
        "boxShadow" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"
      };
      break;
    default:
      if (backgroundColor != process.env.CUSTOM_BRAND_COLORS.tertiary){
        backgroundColor = process.env.CUSTOM_BRAND_COLORS.tertiary;
      }
      style = {
        "backgroundColor" : backgroundColor,
        "fontFamily" : "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        "fontWeight" : "700",
        "border" : 0,
        "borderRadius" : "3em",
        "cursor" : "pointer",
        "display" : "inline-block",
        "lineHeight" : 1,
        "color" : "white",
        "boxShadow" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"
      };
      break;
  }
  return (
    <button
      type="button"
      className={[`storybook-button--${size}`].join(' ')}
      style = {style}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  size: 'medium',
  onClick: undefined,
};
