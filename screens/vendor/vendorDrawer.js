import React, { Component } from "react";
import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CreateVendor from "./createVendor";
import VendorCheckList from "./vendorCheckList";
const Drawer = createDrawerNavigator();
import vendorProfile from './vendorProfile'

const vendorDrawer = (props) => {

	const dimensions = useWindowDimensions();

	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Home" component={CreateVendor} initialParams={props} />
			<Drawer.Screen name="CheckList" component={VendorCheckList} initialParams={props} />
			<Drawer.Screen name="profile" component={vendorProfile} initialParams={props} />

		</Drawer.Navigator>
	);
};

export default vendorDrawer;
