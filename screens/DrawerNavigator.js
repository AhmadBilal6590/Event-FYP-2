import React, { Component } from "react";
import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home.js";
import PlanningTools from "./planningTools";
import UserProfile from "./UserProfile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
	const dimensions = useWindowDimensions(props);
	return (
		<Drawer.Navigator >
			<Drawer.Screen name="Home" component={Home} initialParams={{ props }} />
			<Drawer.Screen name="Planning tools" component={PlanningTools} />
			<Drawer.Screen name="UserProfile" component={UserProfile} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
