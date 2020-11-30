import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import DashBoard from "./screens/DashBoard";
import BanqueetHallList from "./screens/BanqueetHallList";
import BanqueetHallDetails from "./screens/BanqueetHallDetails";
import MarqueeHallList from "./screens/MarqueeHallList";
import MarqueeHallDetails from "./screens/MarqueeHallDetails";
import DrawerNavigator from "./screens/DrawerNavigator";
import RoofTopHallList from "./screens/RoofTopHallList";
import RoofTopHallDetails from "./screens/RoofTopHallDetails";
import Guest from "./screens/Guest";
import UserProfileEdit from "./screens/UserProfileEdit";
// import CreateVendor from "./screens/vendor/createVendor";
import VendorDrawer from "./screens/vendor/vendorDrawer";
const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Login"
				screenOptions={{ headerShown: false }}
			>
				 {/* <Stack.Screen
					name="CreateVendor"
					component={CreateVendor}
				></Stack.Screen> */}
				<Stack.Screen
					name="VendorDrawer"
					component={VendorDrawer}
				></Stack.Screen>

				<Stack.Screen name="Login" component={Login}></Stack.Screen>

				<Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
				<Stack.Screen name="DashBoard" component={DashBoard}></Stack.Screen>
				<Stack.Screen
					name="BanqueetHallList"
					component={BanqueetHallList}
				></Stack.Screen>
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
				></Stack.Screen>
				<Stack.Screen
					name="RoofTopHallList"
					component={RoofTopHallList}
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
