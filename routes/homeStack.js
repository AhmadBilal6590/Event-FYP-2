import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initailRoute>
				<Stack.Screen name="Login" component={Login}></Stack.Screen>
				<Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export { MainStackNavigator };
