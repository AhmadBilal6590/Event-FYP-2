import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity
} from "react-native";
// import * as firebase from 'firebase';

export default class Home2 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}
	signIn = (email, password) => {
		try {
			if ((this.state.email, this.state.password)) {
				firebase.auth().signInWithEmailAndPassword(email, password);

				return;
			} else {
				alert("Logged in Sucessfully");
				this.props.navigation.navigate("Dashboard");
				return;
			}
		} catch (error) {
			console.log(error.toString());
		}
		alert("Logged In SucessFully");
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.login}>Log in</Text>

				<TextInput style={styles.input} placeholder="Username" />

				<TextInput
					style={styles.input}
					placeholder="Password"
					secureTextEntry
				/>

				<View style={styles.btnContainer}>
					<TouchableOpacity
						style={styles.userBtn}
						// onPress={() => this.signIn(this.state.email, this.state.password)}
						onPress={() => this.props.navigation.navigate('DashBoardMain')}
					>
						<Text style={styles.btnText}> Login</Text>
					</TouchableOpacity>
				</View>

				{/* <View style={styles.btnContainer}>
					<TouchableOpacity
						style={styles.userBtnV}
						// onPress={() => this.props.navigation.navigate("loginVendor")}
					>
						<Text style={styles.btnTextV}> Log in as Vendor</Text>
					</TouchableOpacity>
				</View> */}

				<TouchableOpacity
					// onPress={() => this.props.navigation.navigate("About")}

					onPress={() => this.props.navigation.navigate("SignUp")}
				>
					<Text style={styles.su}>Do you have account? Create one</Text>
				</TouchableOpacity>
			</View>
		);
	}
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
