import React, { Component } from "react";
import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home.js";
import PlanningTools from "./planningTools";
import UserProfile from "./UserProfile";
import UserCheckList from "./userCheckList";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	const dimensions = useWindowDimensions();
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Home" component={Home} />
			<Drawer.Screen name="Planning tools" component={PlanningTools} />
            <Drawer.Screen name="UserProfile" component={UserProfile} />
			<Drawer.Screen name="CheckList" component={UserCheckList} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
