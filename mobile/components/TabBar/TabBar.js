import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 

const TabBar = ({ state, descriptors, navigation, icons, hover, label}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const labelText = route.name;
        const badgeText = options.badgeCount;

        const isFocused = state.index === index;
        //highlight, fill, topFill, topFillRound
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        let tabStyle = {};
        if (hover == "topFill") {
          tabStyle = {
            flex: 1, 
            borderTopWidth: 4, 
            borderTopColor: isFocused ? "#0071BC" : "white"
          };
        }
        else if (hover == "topFillRounded") {
          tabStyle = {
            flex: 1, 
            borderTopWidth: 6, 
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            overflow: "hidden",
            borderTopColor: isFocused ? "#0071BC" : "white"
          };
        }
        else {
          tabStyle = {
            flex: 1, 
          };
        }
        if (label == "show") {
          tabStyle.paddingTop = 8;
          tabStyle.paddingBottom = 8;
        }
        else {
          tabStyle.paddingTop = 16;
          tabStyle.paddingBottom = 16;
        }
        const badgeStyle = {textAlign: "center", fontSize: 8, backgroundColor: "red", borderRadius: 5, overflow: "hidden",  color: "white", width: 20

        }
        const topBorderStyle = {
          height: 0,
          overflow: 'hidden',
          borderWidth: 2,
          borderBottomColor: "red",
          borderBottomRightRadius: 30,
          
        };
        return (
          <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={tabStyle}
          >
            <View> 
            <AntDesign style={{ textAlign: 'center' }} name={hover != "highlight"  ? isFocused ? icons[index].substring(0, icons[index].length-1) : icons[index] : icons[index]} size={20} color={isFocused ? '#0071BC' : '#6F6F6F'} />
            {options.badgeCount && 
            <View style={{position: 'absolute', top: -5, left: 25, right: 0, bottom: 10, justifyContent: 'center', alignItems: 'center'}}> 
            <Text style={badgeStyle}>{badgeText}</Text> 
            </View>} 
            </View>
            {label == "show" && 
            <Text style={{ color: isFocused ? '#0071BC' : '#6F6F6F', fontSize:  '12px', fontFamily: 'Roboto', textAlign: 'center', marginTop: 2}}>
              {labelText}
            </Text>
            }
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default TabBar;

