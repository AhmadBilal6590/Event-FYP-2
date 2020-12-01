import React from 'react';
import { } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from './adminHome';
import Profile from './adminProfile';
import CheckList from './adminCheckList';
// import EditProfile from './adminProfileEdit';

const drawer=createDrawerNavigator();

const adminDrawer=()=>{
    // const dimensions = useWindowDimensions();
    return(
        <drawer.Navigator>
            <drawer.Screen  name="Home" component={Home}/>
            <drawer.Screen  name="Profile" component={Profile}/>
            <drawer.Screen  name="CheckList" component={CheckList}/>
            {/* <drawer.Screen  name="EditProfile" component={EditProfile}/> */}


        </drawer.Navigator>


    )

}
export default adminDrawer;