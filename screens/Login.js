import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity
} from "react-native";
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
				console.log(email)
				console.log(password)

				instance.post("/signin", { email: email, password: password })
					.then((res, error) => {
						console.log(res.data.user.role)
						if (res.status == 200) {
							if (res.data.user.role == "admin") {
								Alert.alert("admin")
							}
							if (res.data.user.role == "user") {
								props.navigation.navigate("DashBoardMain")
							}
							if (res.data.user.role == "vendor") {
								Alert.alert("vendor")
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
			<Text style={styles.login}>Log in</Text>

			<TextInput style={styles.input} placeholder="Email"
				value={email}
				onChangeText={text => { setEmail(text) }}
			/>
			<Text style={{ marginTop: 0, fontSize: 10, color: "red" }}> {requiredEmail}</Text>
			<TextInput
				style={styles.input}
				placeholder="Password"
				secureTextEntry
				value={password}
				onChangeText={text => { setPassword(text) }}
			/>
			<Text style={{ marginTop: 0, fontSize: 10, color: "red" }}> {requiredpassword}</Text>
			<View style={styles.btnContainer}>
				<TouchableOpacity
					style={styles.userBtn}
					onPress={() => props.navigation.navigate("DashBoardMain")}
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
		</View>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center"
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
		padding: 10,
		margin: 10,
		fontSize: 30,
		color: "black"
	},

	input: {
		width: "90%",
		padding: 18,
		backgroundColor: "#E4E4E4",
		marginBottom: 5
	},

	su: {
		color: "#F56F6F",
		fontWeight: "500",
		fontSize: 14,
		padding: 12,
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
		width: "90%",
		alignItems: "center",
		borderRadius: 25,
		borderWidth: 0,
		marginRight: 5,
		marginLeft: 5,
		marginTop: 1
	},

	// userBtnV: {
	// 	backgroundColor: "#C381EE",
	// 	padding: 17,
	// 	width: "90%",
	// 	alignItems: "center",
	// 	borderRadius: 25,
	// 	borderWidth: 0,
	// 	marginRight: 5,
	// 	marginLeft: 5,
	// 	marginTop: 1
	// },

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