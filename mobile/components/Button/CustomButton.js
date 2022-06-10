import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomButton = ({type, state, icon, label, size, iconAlign}) => {
  let iconElement = null;
    if (icon) {
        iconElement = "+"; 
  }
  return (
    <TouchableOpacity
        style={[styles[size], styles.button, styles.type, styles[type+state]]}
        disabled = {state == 'disabled'}
    >
        
        {/* Bit messy needs clean up with textdecoration being main problem */}
        
        {(icon == 'true' && (iconAlign == 'left' || iconAlign == null )) && 
        
        <Text style={[textStyles[size], textStyles.text, textStyles[type+state], {textDecorationLine: 'none'}]}>{iconElement}  </Text> 
        }
        
        <Text>
        <Text style={[textStyles[size], textStyles.text, textStyles[type+state]]}>{label}</Text></Text>
        {(icon == 'true' && (iconAlign == 'right')) && 
        
        <Text style={[textStyles[size], textStyles.text, textStyles[type+state], {textDecorationLine: 'none'}]}>  {iconElement}</Text> 
        }
    </TouchableOpacity>

  );
};
CustomButton.defaultProps = {
    label: 'Primary Button',
    icon: true,
    type: 'elevated',
    state: 'default'
}
const textStyles = StyleSheet.create ({
  text: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: '600',
    alignItems: 'center',
    textAlign: 'center',
  },
  sm: {
    fontSize: 16
  },
  md: {
    fontSize: 20
  },

  lg: {
      fontSize: 24
  },
  elevateddefault: {
  },
  elevatedselected: {
  },
  elevateddisabled: {
    color: '#6A6A6A'
  },
  filleddefault: {
    color: 'white'
  },
  filledselected: {
    color: 'white'
  },
  filleddisabled: {
    color: '#6A6A6A'
  }, 
  outlineddefault: {
    color: '#0067C5'
  },
  outlinedselected: {
    color: '#0067C5'
  },
  outlineddisabled: {
    color: '#6A6A6A'
  },
  textdefault: {
    color: '#0067C5',
    textDecorationLine: 'underline',
    textDecorationSkipInk: 'none',
  },
  textselected: {
    color: '#0067C5',
    textDecorationLine: 'underline',
    textDecorationSkipInk: 'none',
  },
  textdisabled: {
    color: '#6A6A6A',
    textDecorationLine: 'underline',
    textDecorationSkipInk: 'none',
  },
  


// .filled {
//     color: #FFFFFF;
//     background: rgba(0, 67, 197, 0.92);
// }
// .filled.selected {
//     background: rgba(0, 67, 197, 1);
// }
// button.filled:hover:enabled::backdrop {
//     background: rgba(0, 67, 197, 0.08);
// }
// button.filled:active:enabled {
//     background: #1444EE;
//     opacity: .8;
// }
// .filled.disabled {
//     color: #6A6A6A;
//     background: #E5E5E5;
// }

// .outlined {
//     background: white;
//     border: 2px solid #0067C5;
//     color: #0067C5;
    
// }
// .outlined.selected {
//     background: rgba(0, 103, 197, 0.16);
// }
// button.outlined:not(.selected):hover:enabled {
//     background: rgba(0, 103, 197, 0.08);
// }
// button.outlined:not(.selected):active:enabled {
//     background: rgba(0, 103, 197, 0.16);
// }
// .outlined.disabled {
//     color: #6A6A6A;
//     border-color: #D7D7D7;
//     background: white;
// }

// .text {
//     background: white;
//     border: none;
//     color: #0067C5;
//     text-decoration:underline;
//     text-decoration-skip-ink: none;
// }

// .text.selected {
//     background: rgba(0, 103, 197, 0.16);
// }
// button.text:not(.selected):hover:enabled {
//     background: rgba(0, 103, 197, 0.08);
// }
// button.text:not(.selected):active:enabled {
//     background: rgba(0, 103, 197, 0.16);
// }
// .text.disabled {
//     color: #6A6A6A;
//     background: white;
// }


// .buttonText {
//     font-family: 'Source Sans Pro';
//     font-style: normal;
//     font-weight: 600;
//     line-height: 20px;
//     display: flex;
//     align-items: center;
//     text-align: center;
// }
// .iconR {
//     margin-right: 8px;
// }
// .iconL {
//     margin-left: 8px;
// }
// .hideIcon {
//     display: none;
// }
// .elevated-svg {
//     stroke: #6F6F6F;
// }
// .disabled {
//     stroke: #6F6F6F !important;
// }
// .filled-svg {
//     stroke: white;
// }
// .outlined-svg {
//     stroke: #0043C5;
// }
// .text-svg {
//     stroke: #0043C5;
// }
  
});


const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
  },
  
  sm: {
    height: 55,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  md: {
    height: 80,
    paddingVertical: 8,
    paddingHorizontal: 16,
    
  },

  lg: {
      height: 95,
      paddingVertical: 16,
      paddingHorizontal: 32,
  },
  elevateddefault: {
    shadowColor: 'rgba(0,0,0, .4)', 
    shadowOffset: { height: 1, width: 1 }, 
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: '#fff',
    elevation: 4, 
    
  },
  elevatedselected: {
    shadowColor: 'rgba(0,0,0, .4)', 
    shadowOffset: { height: 1, width: 1 }, 
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: 'rgba(0,0,0, .16)',
    elevation: 4, 
    opacity: '0.16',
  },
  
  elevateddisabled: {
    color: '#6A6A6A',
    backgroundColor: '#E5E5E5',
  },
  filleddefault: {
    backgroundColor: 'rgba(0, 67, 197, 0.92)',
  },
  filledselected: {
    backgroundColor: 'rgba(0, 67, 197, 1)'
  },
  filleddisabled: {
    backgroundColor: '#E5E5E5',
  },
  outlineddefault: {
    borderColor: '#0067C5', 
    borderWidth: 2,
  },
  outlinedselected: {
    borderColor: '#0067C5', 
    backgroundColor: 'rgba(0, 103, 197, 0.16)',
    borderWidth: 2,
  },
  outlineddisabled: {
    borderColor: '#D7D7D7', 
    borderWidth: 2,
  },
  textdefault: {

  },
  textselected: {
    backgroundColor: 'rgba(0, 103, 197, 0.16)'
  },
  textdisabled: {

  },
});

export default CustomButton;