import React, { Component } from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { MainStackNavigator } from './MainStack';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

// import Contact2 from './contact2';
// import Contact4 from './contact4';
import Home from "./Home.js";
import PlanningTools from './planningTools'
const Drawer = createDrawerNavigator();



const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
    >

      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Planning tools" component={PlanningTools} />


    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

