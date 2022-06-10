import * as React from 'react';
import { storiesOf } from '@storybook/react-native';

import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 

import TabBar from './TabBar';

import { radios, optionsKnob as options, boolean } from '@storybook/addon-knobs';

import { action } from '@storybook/addon-actions';

const tabBarStories = storiesOf('TabBar', module);

const Tab= createBottomTabNavigator();

const hoverOptions = ["fill", "highlight", "topFill", "topFillRounded"]
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function PhotosScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Photos!</Text>
    </View>
  );
}
function WhereScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Where!</Text>
    </View>
  );
}
function TagsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tags!</Text>
    </View>
  );
}
function AddScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add!</Text>
    </View>
  );
}
let icons=["hearto", "cloudo", "enviromento", "tagso", "pluscircleo"];
const labelOptions= ["show", "hide"]; 


tabBarStories.add('5 Tabs', () => (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} 
      icons={icons} label={radios('label', labelOptions, labelOptions[1])} hover={radios('hover', hoverOptions, hoverOptions[0])}  />}>
        <Tab.Screen name="Home" component={HomeScreen} options={boolean('Badge 1', false) == true ? {badgeCount: "99+"} : {}}/>
        <Tab.Screen name="Photos" component={PhotosScreen} options={boolean('Badge 2', false) == true ? {badgeCount: "99+"} : {}}/>
        <Tab.Screen name="Where" component={WhereScreen} options={boolean('Badge 3', false) == true ? {badgeCount: "99+"} : {}} />
        <Tab.Screen name="Tags" component={TagsScreen} options={boolean('Badge 4', false) == true ? {badgeCount: "99+"} : {}}/>
        <Tab.Screen name="Add" component={AddScreen} options={boolean('Badge 5', false) == true ? {badgeCount: "99+"} : {}}/>
      </Tab.Navigator>
    </NavigationContainer>
));

tabBarStories.add('4 Tabs', () => (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} 
      icons={icons} label={radios('label', labelOptions, labelOptions[1])} hover={radios('hover', hoverOptions, hoverOptions[0])}  />}>
        <Tab.Screen name="Home" component={HomeScreen} options={boolean('Badge 1', false) == true ? {badgeCount: "99+"} : {}}/>
        <Tab.Screen name="Photos" component={PhotosScreen} options={boolean('Badge 2', false) == true ? {badgeCount: "99+"} : {}}/>
        <Tab.Screen name="Where" component={WhereScreen} options={boolean('Badge 3', false) == true ? {badgeCount: "99+"} : {}} />
        <Tab.Screen name="Tags" component={TagsScreen} options={boolean('Badge 4', false) == true ? {badgeCount: "99+"} : {}}/>
        <Tab.Screen name="Add" component={AddScreen} options={boolean('Badge 5', false) == true ? {badgeCount: "99+"} : {}}/>
      </Tab.Navigator>
    </NavigationContainer>
));

tabBarStories.add('3 Tabs', () => (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} 
      icons={icons} label={radios('label', labelOptions, labelOptions[1])} hover={radios('hover', hoverOptions, hoverOptions[0])}  />}>
        <Tab.Screen name="Home" component={HomeScreen} options={boolean('Badge 1', false) == true ? {badgeCount: "99+"} : {}}/>
        <Tab.Screen name="Photos" component={PhotosScreen} options={boolean('Badge 2', false) == true ? {badgeCount: "99+"} : {}}/>
        <Tab.Screen name="Where" component={WhereScreen} options={boolean('Badge 3', false) == true ? {badgeCount: "99+"} : {}} />
      </Tab.Navigator>
    </NavigationContainer>
));

tabBarStories.add('2 Tabs', () => (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} 
      icons={icons} label={radios('label', labelOptions, labelOptions[1])} hover={radios('hover', hoverOptions, hoverOptions[0])}  />}>
        <Tab.Screen name="Home" component={HomeScreen} options={boolean('Badge 1', false) == true ? {badgeCount: "99+"} : {}}/>
        <Tab.Screen name="Photos" component={PhotosScreen} options={boolean('Badge 2', false) == true ? {badgeCount: "99+"} : {}}/>
      </Tab.Navigator>
    </NavigationContainer>
));


