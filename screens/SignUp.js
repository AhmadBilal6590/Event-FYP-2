import React, { Component } from "react";
import { RadioButton } from 'react-native-paper';
import { Alert } from 'react-native'
import axios from 'react-native-axios';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity
} from "react-native";
// import * as firebase from 'firebase';

const Signup = (props) => {
	const instance = axios.create({
		baseURL: "https://demo-ajmal.herokuapp.com/api"
	});

	const [requiredfirstName, setRequiredfirstName] = React.useState('');
	const [requiredlastName, setrequiredlastName] = React.useState('');

	const [role, setRole] = React.useState('user');
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [requiredEmail, setRequiredEmail] = React.useState('');
	const [requiredpassword, setRequiredpassword] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');



	const signIn = () => {
		try {
			if ((email == '') || (firstName === '') || (lastName === "") || (password === "")) {
				if (email === "") {
					setRequiredEmail("Emailrequired")

				}
				else {
					setRequiredEmail("")
				}
				if (firstName === "") {
					setRequiredfirstName("firstNameRequired")

				}
				else {

					setRequiredfirstName("")

				}
				if (lastName === "") {
					setrequiredlastName("lastNamerequired")

				}
				else {
					setrequiredlastName("")
				}
				if (password === "") {
					setRequiredpassword("passwordrequired")

				}
				else {
					setRequiredpassword("")
				}

			}
			else {
				setRequiredEmail("")
				setRequiredfirstName("")
				setrequiredlastName("")
				setRequiredpassword("")
				console.log(firstName)
				console.log(lastName)
				console.log(email)
				console.log(password)
				console.log(role)
				instance.post("/signup", { firstName: firstName, lastName: lastName, email: email, password: password, role: role })
					.then((res, error) => {
						if (res.status == 200) {
							Alert.alert(res.data.message);
						}
						if (res.status == 201) {
							Alert.alert(res.data.message);
						}
						else if (res.status == 400) {
							Alert.alert(res.data.message)
						}
						if (error) {
							Alert.alert("error");
						}
					})
					.catch((error) => { Alert.alert("Please fill all fields") })


			}
		} catch (error) {
			console.log(error.toString());
		}


	};

	return (
		<View style={styles.container}>
			<Text style={styles.login}>Sign Up</Text>

			<TextInput
				style={styles.input}

				placeholder="FirstName"
				value={firstName}
				onChangeText={text => { setFirstName(text) }} />
			<Text style={{ marginTop: 0, fontSize: 10, color: "red" }}>{requiredfirstName}</Text>
			<TextInput
				style={styles.input}
				placeholder="lastName"
				value={lastName}
				onChangeText={text => { setLastName(text) }}
			/>
			<Text style={{ marginTop: 0, fontSize: 10, color: "red" }}>{requiredlastName}</Text>
			<TextInput
				style={styles.input}
				placeholder="Email"
				value={email}
				onChangeText={text => { setEmail(text) }}
			/>
			<Text style={{ marginTop: 0, fontSize: 10, color: "red" }}> {requiredEmail}</Text>

			<TextInput
				style={styles.input}
				placeholder="Password Atleast 6 charcters"
				secureTextEntry
				value={password}
				onChangeText={text => { setPassword(text) }}
			/>

			<Text style={{ marginTop: 0, fontSize: 10, color: "red" }}> {requiredpassword}</Text>

			<RadioButton.Group onValueChange={value => setRole(value)} value={role}>
				<RadioButton.Item label="User" value="user" />
				<RadioButton.Item label="Vendor" value="vendor" />
			</RadioButton.Group>


			<View style={styles.btnContainer}>
				<TouchableOpacity
					style={styles.userBtn}
					onPress={() => signIn()}
				>
					<Text style={styles.btnText}> Sign Up</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity
				// onPress={() => this.props.navigation.navigate("About")}

				onPress={() => props.navigation.navigate('Login')}
			>
				<Text style={styles.su}>Do you have account? Login</Text>
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

	userBtnV: {
		backgroundColor: "#C381EE",
		paddingLeft: 85,
		paddingRight: 85,
		paddingTop: 18,
		paddingBottom: 18,
		width: "100%",
		alignItems: "center",
		borderRadius: 25,
		borderWidth: 0,
		marginRight: 5,
		marginLeft: 5,
		marginTop: 5
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

export default Signup;