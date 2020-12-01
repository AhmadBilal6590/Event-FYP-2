import React, { Component, useState } from "react";
import { Text, View, StyleSheet, ImageBackground, Header, Button, Left, Body } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import axios from 'react-native-axios'
const instance = axios.create({
	baseURL: "https://demo-ajmal.herokuapp.com/api"
})
const UserProfileEdit = (props) => {
	const _id = props.route.params._id;
	const fullName = props.route.params.fullName;
	const email = props.route.params.email;
	const firstName = props.route.params.firstName;


	const lastName = props.route.params.lastName;
	const password = props.route.params.password;
	const phone = props.route.params.phone;
	console.log(phone)
	const [updatedfullName, setfullName] = React.useState(fullName)
	const [updatedEmail, setupdatedEmail] = React.useState(email)
	const [updatedfirstName, setfirstName] = React.useState(firstName)
	const [updatedlastName, setlastName] = React.useState(lastName)
	const [updatedPassword, setpassword] = React.useState(password)
	const [updatedPhone, setphone] = React.useState(phone)

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
		}
	}


	return (
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
					<TouchableOpacity onPress={() => { props.navigation.goBack() }}>
						<Text style={{ color: "black", fontSize: 15 }}>ClickmeForgoBack</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
export default UserProfileEdit;

const styles = StyleSheet.create({

});
