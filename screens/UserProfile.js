import React, { Component, useEffect, useState } from "react";

import { Text, View, StyleSheet, ImageBackground, Header, Button, Left, Body } from "react-native";


import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { AntDesign, SimpleLineIcons, } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
	Avatar,
	Title,
	Caption,
	TouchableRipple,
	Divider
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from 'react-native-axios'
const instance = axios.create({
	baseURL: "https://demo-ajmal.herokuapp.com/api"
})
const UserProfile = (props) => {

	const _id = props.route.params.props.route.params.user_id;
	const email = props.route.params.props.route.params.email;
	// const firstName = props.route.params.props.route.params.firstName;
	// console.log(firstName)
	// const fullName = props.route.params.props.route.params.fullName;
	// const lastName = props.route.params.props.route.params.lastName;
	const password = props.route.params.props.route.params.password;
	// const phone = props.route.params.props.route.params.phone;
	const [updatedfullName, setfullName] = React.useState("")
	const [updatedEmail, setupdatedEmail] = React.useState("")
	const [updatedfirstName, setfirstName] = React.useState("")
	const [updatedlastName, setlastName] = React.useState("")
	const [updatedPassword, setpassword] = React.useState("")
	const [updatedPhone, setphone] = React.useState("")
	const [loading, setLoading] = React.useState(false)
	useEffect(() => {

		instance.post("/signin", { email: email, password: password })
			.then((res, error) => {
				console.log(res.data.user.phone)
				if (res.status == 200) {
					setfullName(res.data.user.fullName);
					setfirstName(res.data.user.firstName);
					setlastName(res.data.user.lastName);
					setpassword(res.data.user.password);
					setupdatedEmail(res.data.user.email);
					setphone(res.data.user.phone);
					console.log(updatedfullName, updatedfirstName, updatedEmail, updatedPhone)

				}


				else if (res.status == 500) {
					Alert.alert(res.data.message)
				}
				if (error) {
					Alert.alert("error");
				}
			})
	}, [loading])
	const updated = async () => {

		const f = updatedfirstName + " " + updatedlastName
		console.log(f)
		setfullName(f);
		console.log("phone", updatedPhone, updatedEmail, updatedPassword)
		const res = await instance.post('update',
			{
				_id: _id,
				email: updatedEmail,
				password: updatedPassword,
				updatedPhone: updatedPhone,
				firstName: updatedfirstName,
				lastName: updatedlastName
			})
		if (res.status == 201) {
			alert("updatedSuccessfully")
			props.navigation.popToTop()
		}
	}




	return (

		loading === false ?

			<SafeAreaView style={styles.container}>

				<SimpleLineIcons
					style={styles.menuIcon}
					name="menu"
					size={25}
					backgroundColor="#fff"
					color="purple"
					onPress={() => props.navigation.openDrawer()}
				/>
				<SimpleLineIcons />

				<AntDesign
					style={styles.editProfile}
					name="edit"
					size={25}
					backgroundColor="#fff"
					color="purple"

					onPress={() => {
						console.log(props)
						setLoading(true)

					}}
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
								{updatedfullName}
							</Title>
							<Caption style={styles.captionName}>@{updatedfirstName}</Caption>
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
								{updatedEmail}
							</Text>
						</View>
						<View style={styles.row}>
							<Icon name="phone" color="purple" size={20} />
							<Text style={{ color: "#777777", marginLeft: 10 }}>
								+92{updatedPhone}
							</Text>
						</View>
					</View>

					<View style={styles.divider}>
						<Divider />
					</View>

					{/* <View style={styles.menuWrapper}>
				<TouchableRipple onPress={() => { }}>
					<View style={styles.menuItem}>
						<Icon name="heart-outline" color="black" size={25} />
						<Text style={styles.menuItemText}>Your Favorites</Text>
					</View>
				</TouchableRipple>
				<TouchableRipple onPress={() => { }}>
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
				<TouchableRipple onPress={() => { }}>
					<View style={styles.menuItem}>
						<Icon name="account-check-outline" color="black" size={25} />
						<Text style={styles.menuItemText}>Support</Text>
					</View>
				</TouchableRipple>
				<TouchableRipple onPress={() => { }}>
					<View style={styles.menuItem}>
						<Icon name="settings-outline" color="black" size={25} />
						<Text style={styles.menuItemText}>Settings</Text>
					</View>
				</TouchableRipple>
			</View> */}
				</View>

			</SafeAreaView>
			:
			loading === true ?

				<View style={styles.container}>

					<View style={{ Margin: 20 }}>
						<View style={{ alignItems: "center" }}>
							<TouchableOpacity>
								<View
									style={{
										height: 180,
										width: 100,
										borderRadius: 15,
										justifyContent: "center",
										alignItems: "center"
									}}
								>
									<ImageBackground
										source={{
											uri: "https://www.w3schools.com/w3images/avatar2.png"
										}}
										style={{ height: 100, width: 100 }}
										imageStyle={{ borderRadius: 15 }}
									>
										<View>
											<Icon
												name="camera"
												size={22}
												color="black"
												style={{
													opacity: 0.55,
													alignItems: "center",
													justifyContent: "center",
													borderWidth: 1,
													borderColor: "#fff",
													borderRadius: 10
												}}
											></Icon>
										</View>
									</ImageBackground>
								</View>
							</TouchableOpacity>
							<Text
								style={{
									marginTop: -25,
									marginLeft: 7.5,
									fontSize: 18,
									fontWeight: "bold"
								}}
							>
								{updatedfullName}
							</Text>
						</View>
						<View style={styles.actionIcon}>
							<FontAwesome name="user-o" size={25} style={styles.iconStyle} />
							<TextInput
								placeholder="First Name"
								value={updatedfirstName}
								onChangeText={(text) => { setfirstName(text) }}
								backgroundColor="#F5F5F5"
								placeholderTextColor="#666666"
								autoCorrect={false}
								style={[styles.textInput]}
							/>
						</View>
						<View style={styles.actionIcon}>
							<FontAwesome name="user-o" size={25} style={styles.iconStyle} />
							<TextInput
								placeholder="Last name"
								backgroundColor="#F5F5F5"
								placeholderTextColor="#666666"
								autoCorrect={false}
								style={[styles.textInput]}
								value={updatedlastName}
								onChangeText={(text) => { setlastName(text) }}
							/>
						</View>
						<View style={styles.actionIcon}>
							<FontAwesome name="phone" size={25} style={styles.iconStyle} />
							<TextInput
								placeholder="Phone Number"
								keyboardType="numeric"
								backgroundColor="#F5F5F5"
								placeholderTextColor="#666666"

								style={[styles.textInput]}
								value={updatedPhone}
								onChangeText={(text) => { setphone(text) }}
							/>
						</View>

						<View style={styles.actionIcon}>
							<FontAwesome name="envelope-o" size={20} style={styles.iconStyle} />
							<TextInput
								placeholder="Email"
								keyboardType="email-address"
								backgroundColor="#F5F5F5"
								placeholderTextColor="#666666"
								autoCorrect={false}
								style={[styles.textInput]}
								value={updatedEmail}
								onChangeText={(text) => { setupdatedEmail(text) }}
							/>
						</View>

						<View style={styles.actionIcon}>
							<FontAwesome
								name="location-arrow"
								size={25}
								style={styles.iconStyle}
							/>
							<TextInput
								secureTextEntry
								placeholder="password"
								backgroundColor="#F5F5F5"
								placeholderTextColor="#666666"
								autoCorrect={false}
								style={[styles.textInput]}
								value={updatedPassword}
								onChangeText={(text) => { setpassword(text) }}
							/>
						</View>
						<View style={styles.btnContainer}>
							<TouchableOpacity style={styles.userBtn} onPress={() => { updated() }}>
								<Text style={styles.btnText}>Submit</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.btnContainer}>
							<TouchableOpacity onPress={() => { setLoading(false) }}>
								<Text style={{ color: "black", fontSize: 15 }}>ClickmeForgoBack</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>


				: null



	);
};
export default UserProfile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white"
	},

	actionIcon: {
		flexDirection: "row",
		marginTop: 8,
		marginLeft: 6,
		borderBottomWidth: -20,
		borderBottomColor: "#f2f2f2",

		width: "90%",
		padding: -10,
		paddingLeft: 18
	},

	textInput: {
		flex: 1,
		color: "#05375a"
	},

	btnContainer: {
		alignContent: "center",
		alignItems: "center",
		paddingLeft: 90,
		paddingTop: 10,
		width: "75%"
	},

	userBtn: {
		backgroundColor: "#F56F6F",
		paddingTop: 20,
		paddingBottom: 20,
		paddingRight: 35,
		paddingLeft: 35,
		width: "100%",
		alignContent: "center",
		alignItems: "center",
		borderRadius: 15,
		borderWidth: 0,
		marginRight: 20,
		marginLeft: 20
	},

	btnText: {
		backgroundColor: "#F56F6F",
		color: "white",
		fontSize: 17,
		color: "white"
	},
	iconStyle: {
		marginTop: 15,
		marginLeft: 0,
	},
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
