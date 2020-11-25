import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import DashBoard from './screens/DashBoard';
import Home from './screens/Home';
import SearchEvents from './screens/SearchEvents';
import BanqueetHallList from './screens/BanqueetHallList';
import  BanqueetHallDetails from './screens/BanqueetHallDetails';
import MarqueeHallList from './screens/MarqueeHallList';
import  MarqueeHallDetails from './screens/MarqueeHallDetails';

import RoofTopHallList from './screens/RoofTopHallList';
import  RoofTopHallDetails from './screens/RoofTopHallDetails';
const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator  initialRouteName="Login" screenOptions={{headerShown:false,}} >
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
      <Stack.Screen name="DashBoard" component={DashBoard}></Stack.Screen>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="SearchEvents" component={SearchEvents}></Stack.Screen>
      <Stack.Screen name="BanqueetHallList" component={BanqueetHallList}></Stack.Screen>
      <Stack.Screen name="BanqueetHallDetails" component={BanqueetHallDetails}></Stack.Screen>
      <Stack.Screen name="MarqueeHallList" component={MarqueeHallList}></Stack.Screen>
      <Stack.Screen name="MarqueeHallDetails" component={MarqueeHallDetails}></Stack.Screen>

      <Stack.Screen name="RoofTopHallList" component={RoofTopHallList}></Stack.Screen>
      <Stack.Screen name="RoofTopHallDetails" component={RoofTopHallDetails}></Stack.Screen>

    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
