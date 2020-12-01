import React from "react";
import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home.js";
import PlanningTools from "./planningTools";
import UserProfile from "./UserProfile";
import UserCheckList from "./userCheckList";

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
	const dimensions = useWindowDimensions(props);
	return (
		<Drawer.Navigator >
			<Drawer.Screen name="Home" component={Home} initialParams={{ props }} />
			<Drawer.Screen name="Planning tools" component={PlanningTools} />
<<<<<<< HEAD
			<Drawer.Screen name="UserProfile" component={UserProfile} initialParams={{ props }} />
=======
            <Drawer.Screen name="UserProfile" component={UserProfile} />
			<Drawer.Screen name="CheckList" component={UserCheckList} />
>>>>>>> 1368e12f0b7a9da98e49a26bfa75d5316cf8e5db
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
