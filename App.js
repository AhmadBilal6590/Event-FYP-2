import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import DashBoard from "./screens/DashBoard";
import BanqueetHallDetails from "./screens/BanqueetHallDetails";
import MarqueeHallList from "./screens/Halls";
import MarqueeHallDetails from "./screens/MarqueeHallDetails";
import DrawerNavigator from "./screens/DrawerNavigator";
import RoofTopHallDetails from "./screens/RoofTopHallDetails";
import Guest from "./screens/Guest";
import UserProfileEdit from "./screens/UserProfileEdit";
const Stack = createStackNavigator();

export default function App(props) {
	return (

		<NavigationContainer>

			<Stack.Navigator
				initialRouteName="Login"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Login" component={Login}></Stack.Screen>
				<Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
				<Stack.Screen name="DashBoard" component={DashBoard}></Stack.Screen>

				<Stack.Screen
					name="BanqueetHallDetails"
					component={BanqueetHallDetails}
				></Stack.Screen>
				<Stack.Screen
					name="MarqueeHallList"
					component={MarqueeHallList}
				></Stack.Screen>
				<Stack.Screen
					name="MarqueeHallDetails"
					component={MarqueeHallDetails}
				></Stack.Screen>
				<Stack.Screen
					name="DashBoardMain"
					component={DrawerNavigator}
					user_id={props}
				></Stack.Screen>

				<Stack.Screen
					name="RoofTopHallDetails"
					component={RoofTopHallDetails}
				></Stack.Screen>
				<Stack.Screen
					name="UserProfileEdit"
					component={UserProfileEdit}
				></Stack.Screen>
				<Stack.Screen name="Guest" component={Guest} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
