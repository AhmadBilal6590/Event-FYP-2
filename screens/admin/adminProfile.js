import React, { Component, useState } from "react";
import {
	Text,
	View,
	StyleSheet,
} from "react-native";
import { AntDesign, SimpleLineIcons, } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
	Avatar,
	Title,
	Caption,
	TouchableRipple,
	Divider
} from "react-native-paper";
import EditProfile from './adminProfileEdit';
import { SafeAreaView } from "react-native-safe-area-context";

const adminProfile = ({ navigation }) => {

	const [loading,setLoading]=useState(true);
	return (


		loading?
		<SafeAreaView style={styles.container}>
			<SimpleLineIcons
				style={styles.menuIcon}
				name="menu"
				size={25}
				backgroundColor="#fff"
				color="purple"
				onPress={() => navigation.openDrawer()}
			/>
			<SimpleLineIcons />
			<AntDesign
				style={styles.editProfile}
				name="edit"
				size={25}
				backgroundColor="#fff"
				color="purple"
				onPress={() => setLoading(false)}
			/>
			<AntDesign />
			<View style={styles.userInfoSection}>
				<View style={{ flexDirection: "row", marginTop: 30, marginRight: 1 }}>
					<Avatar.Image
						source={{ uri: "https://www.w3schools.com/w3images/avatar2.png" }}
						size={85}
					/>
					<View style={{ marginLeft: 10 }}>
						<Title
							style={[
								styles.titleName,
								{
									marginTop: 15,
									marginBottom: -8
								}
							]}
						>
							Faiz ur Rehman
						</Title>
						<Caption style={styles.captionName}>@faiz13</Caption>
					</View>
				</View>
			</View>
			<View style={styles.userInfoSection2}>
				<View style={styles.row}>
					<Icon name="map-marker-radius" size={20} color="purple" />
					<Text style={{ color: "#777777", marginLeft: 8 }}>
						Islamabad,Pakistan
					</Text>
				</View>
				<View>
					<View style={styles.row}>
						<Icon name="email" color="purple" size={20} />
						<Text style={{ color: "#777777", marginLeft: 10 }}>
							faiz337@email.com
						</Text>
					</View>
					<View style={styles.row}>
						<Icon name="phone" color="purple" size={20} />
						<Text style={{ color: "#777777", marginLeft: 10 }}>
							+923137545012
						</Text>
					</View>
				</View>

				<View style={styles.divider}>
					<Divider />
				</View>

				<View style={styles.menuWrapper}>
					<TouchableRipple onPress={() => {}}>
						<View style={styles.menuItem}>
							<Icon name="heart-outline" color="black" size={25} />
							<Text style={styles.menuItemText}>Your Favorites</Text>
						</View>
					</TouchableRipple>
					<TouchableRipple onPress={() => {}}>
						<View style={styles.menuItem}>
							<Icon name="cash" color="black" size={25} />
							<Text style={styles.menuItemText}>Payment</Text>
						</View>
					</TouchableRipple>
					<TouchableRipple>
						<View style={styles.menuItem}>
							<Icon name="share-outline" color="black" size={25} />
							<Text style={styles.menuItemText}>Tell Your Friends</Text>
						</View>
					</TouchableRipple>
					<TouchableRipple onPress={() => {}}>
						<View style={styles.menuItem}>
							<Icon name="account-check-outline" color="black" size={25} />
							<Text style={styles.menuItemText}>Support</Text>
						</View>
					</TouchableRipple>
					<TouchableRipple onPress={() => {}}>
						<View style={styles.menuItem}>
							<Icon name="settings-outline" color="black" size={25} />
							<Text style={styles.menuItemText}>Settings</Text>
						</View>
					</TouchableRipple>
				</View>
			</View>
		</SafeAreaView>
		:loading===false?<EditProfile />:null
	);
};
export default adminProfile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center"
	},

	profileIcon: {
		bottom: 250
	},

	contactText: {
		alignContent: "center",
		alignItems: "center",
		fontSize: 18,
		bottom: 235,
		left: 10
	},

	inputContact: {
		width: "69%",

		backgroundColor: "#E4E4E4"
	},

	addIcon: {
		left: 145,
		bottom: 45
	},

	containerContact: {
		justifyContent: "center",
		backgroundColor: "#fff",
		padding: 15
	},

	item1: {
		alignItems: "center",
		color: "black"
	},

	titleName: {
		fontSize: 15,
		fontWeight: "bold"
	},

	captionName: {
		fontSize: 14,
		lineHeight: 20,
		fontWeight: "500",
		marginBottom: 10
	},

	userInfoSection: {
		bottom: 85,
		right: 50,
		left: 23,
		marginRight: 10
	},
	userInfoSection2: {
		bottom: 55,

		left: 4
	},

	row: {
		flexDirection: "row",
		marginBottom: 10
	},

	menuWrapper: {
		marginTop: 50,
		marginRight: 30
	},

	menuItem: {
		flexDirection: "row",
		marginBottom: 20
	},
	menuItemText: {
		color: "#777777",
		marginLeft: 20,
		fontWeight: "400",
		fontSize: 16,
		lineHeight: 26
	},

	divider: {
		color: "red"
	},
	menuIcon: {
		position: "absolute",
		top: 20,
		left: 12,
		color: "black"
	},

	editProfile: {
		position: "absolute",
		top: 20,
		right: 12,
		color: "black"
	}
});
