import { Right } from "native-base";
import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity,
	ImageBackground
} from "react-native";
const image = require('../assets/images/login.jpg');
import { Alert } from 'react-native'

import axios from 'react-native-axios';
// import * as firebase from 'firebase';

const Login = (props) => {
	const [requiredEmail, setRequiredEmail] = React.useState('');
	const [requiredpassword, setRequiredpassword] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const signIn = () => {
		const instance = axios.create({
			baseURL: "https://demo-ajmal.herokuapp.com/api"
		});
		try {
			if ((email == '') || (password === "")) {
				if (email === "") {
					setRequiredEmail("Emailrequired")

				}
				else {
					setRequiredEmail("")
				}

				if (password === "") {
					setRequiredpassword("passwordrequired")

				}
				else {
					setRequiredpassword("")
				}
			}
			else {
				setRequiredpassword("")
				setRequiredEmail("")


				instance.post("/signin", { email: email, password: password })
					.then((res, error) => {
						console.log(res.data)
						if (res.status == 200) {
							if (res.data.user.role == "admin") {
								let user_id = res.data.user._id
								props.navigation.navigate("AdminDrawer", { user_id: user_id, email: res.data.user.email, password: res.data.user.password, firstName: res.data.user.firstName, lastName: res.data.user.lastName, fullName: res.data.user.fullName, phone: res.data.user.phone })
							}
							if (res.data.user.role == "user") {

								let user_id = res.data.user._id

								props.navigation.navigate("DashBoardMain", { user_id: user_id, email: res.data.user.email, password: res.data.user.password, firstName: res.data.user.firstName, lastName: res.data.user.lastName, fullName: res.data.user.fullName, phone: res.data.user.phone })
							}
							if (res.data.user.role == "vendor") {
								let user_id = res.data.user._id
								props.navigation.navigate("VendorDrawer", { user_id: user_id, email: res.data.user.email, password: res.data.user.password, firstName: res.data.user.firstName, lastName: res.data.user.lastName, fullName: res.data.user.fullName, phone: res.data.user.phone })
							}
						}

						else if (res.status == 500) {
							Alert.alert(res.data.message)
						}
						if (error) {
							Alert.alert("error");
						}
					})
					.catch((error) => { Alert.alert("Invalid Email And Password") })


			}

		} catch (error) {
			console.log(error.toString());
		}
	};


	return (
		<View style={styles.container}>
			<ImageBackground source={image} style={styles.image}>
				<Text style={styles.login}>Log in</Text>

				<TextInput style={styles.input} placeholder="Email"
					value={email}
					onChangeText={text => { setEmail(text) }}
				/>
				<Text style={{ marginTop: 0, fontSize: 10, color: "red", textAlign: "center" }}> {requiredEmail}</Text>
				<TextInput
					style={styles.input}
					placeholder="Password"
					secureTextEntry
					value={password}
					onChangeText={text => { setPassword(text) }}
				/>
				<Text style={{ marginTop: 0, fontSize: 10, color: "red", textAlign: "center" }}> {requiredpassword}</Text>
				<View style={styles.btnContainer}>
					<TouchableOpacity
						style={styles.userBtn}
						onPress={() => signIn()}
					>
						<Text style={styles.btnText}> Login</Text>
					</TouchableOpacity>
				</View>




				<TouchableOpacity
					// onPress={() => this.props.navigation.navigate("About")}

					onPress={() => props.navigation.navigate("SignUp")}
				>
					<Text style={styles.su}>Do you have account? Create one</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		flexDirection: "column"

	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
	},

	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},

	title: {
		fontSize: 36,
		marginBottom: 25
	},

	login: {
		padding: 5,
		margin: 5,
		fontSize: 30,
		color: "black",
		textAlign: "center",
		color: "white"

	},

	input: {
		width: "80%",
		marginLeft: 30,
		padding: 18,
		backgroundColor: "#E4E4E4",
		borderWidth: 1,
		borderStyle: 'solid',
		fontSize: 15,
		borderRadius: 25

	},

	su: {
		color: "white",
		fontWeight: "500",
		fontSize: 14,
		padding: 12,
		marginLeft: 70,
		marginBottom: 10
	},

	btnContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%"
	},

	userBtn: {
		backgroundColor: "#F56F6F",
		padding: 17,
		width: "80%",
		alignItems: "center",
		borderRadius: 25,
		borderWidth: 0,
		marginRight: 20,
		marginLeft: 5,
		marginTop: 1
	},

	userBtnV: {
		backgroundColor: "#C381EE",
		padding: 17,
		width: "90%",
		alignItems: "center",
		borderRadius: 25,
		borderWidth: 0,
		marginRight: 5,
		marginLeft: 5,
		marginTop: 1
	},

	btnText: {
		color: "white",
		fontSize: 18
	},
	btnTextV: {
		color: "white",
		fontSize: 18
	},

	errorMsg: {
		color: "#FF0000",
		fontSize: 12
	}
});

export default Login;