import React, { Component } from "react";
import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CreateVendor from "./createVendor";
import VendorCheckList from "./vendorCheckList";
const Drawer = createDrawerNavigator();

const vendorDrawer = (props) => {
	const dimensions = useWindowDimensions();

	return (
		<Drawer.Navigator>
<<<<<<< HEAD
			<Drawer.Screen name="Home" component={CreateVendor} />
			<Drawer.Screen name="CreateService" component={CreateService} initialParams={{ props }} />
=======
            <Drawer.Screen name="Home" component={CreateVendor} />
			<Drawer.Screen name="CheckList" component={VendorCheckList}/>
>>>>>>> 1368e12f0b7a9da98e49a26bfa75d5316cf8e5db

		</Drawer.Navigator>
	);
};

export default vendorDrawer;
