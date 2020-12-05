import React, { Component, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Picker
} from "react-native";
import axios from 'react-native-axios'
const instance = axios.create({
	baseURL: "https://demo-ajmal.herokuapp.com/api"
})


const createService = (props) => {
	const [pickerValue, setPikerValue] = useState("Marquee");
	console.log("ajmal", props)
	const [venueName, setVenueName] = useState("");
	const [personPrice, setPersonPrice] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [location, setLocation] = useState("");
	const [venueType, setVenueType] = useState();
	// const [procceedbtn, setProccedbtn] = useState();

	const [venueNameError, setVenueNameError] = useState("");
	const [personPriceError, setPersonPriceError] = useState("");
	const [phoneNumberError, setPhoneNumberError] = useState("");
	const [locationError, setLocationError] = useState("");

	const venueValidator = () => {
		if (venueName == "") {
			setVenueNameError("venue field can't be empty");

		} else {
			setVenueNameError("");
		}
	};

	const priceValidator = () => {
		if (personPrice == "") {
			setPersonPriceError("price feild can't be empty");
		} else {
			setPersonPriceError("");
		}
	};

	const phoneNumberValidator = () => {
		if (phoneNumber == "") {
			setPhoneNumberError("phone field can't be empty");
		} else {
			setPhoneNumberError("");
		}
	};
	const locationValidator = () => {
		if (location == "") {
			setLocationError("location field can't be empty");
		} else {
			setLocationError("");
		}
	};

	const buttonValidator = async () => {
		if (
			venueName == "" ||
			location == "" ||
			phoneNumber == "" ||
			personPrice == ""
		) {
			alert("you have to fill the fields first");
		} else {
			// navigation.navigate("CreateVendor")
			try {
				console.log(props.route.params.route.params.route.params.email)
				const res = await instance.post("/service/create", { email: props.route.params.route.params.route.params.email, vendor_id: props.route.params.route.params.route.params.user_id, venueName: venueName, serviceName: pickerValue, perPersonCharge: personPrice, phone: phoneNumber, address: location })

				if (res.status === 200) {

					alert("successfullyBooked")
					props.navigation.navigate("VendorDrawer");

				}
				if (res.status === 400) {
					alert("statusErrorBy400")
				}
			}
			catch (error) {
				alert(error)
			}
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.login}>Create Your Service</Text>

			<TextInput
				onBlur={() => venueValidator()}
				onChangeText={text => {
					setVenueName(text);
				}}
				style={styles.input}
				placeholder="Venue Name"
			/>
			<Text style={styles.errorText}>{venueNameError}</Text>
			<Picker
				style={{ width: "90%" }}
				mode="dropdown"
				selectedValue={pickerValue}
				onValueChange={(itemValue, itemIndex) => setPikerValue(itemValue)}
			>
				{/* <Picker.Item label="Venue Type" /> */}
				<Picker.Item label="Marquee" value="Marquee" />
				<Picker.Item label="RoofTop" value="RoofTop" />
				<Picker.Item label="Banquet" value="Banquet" />
			</Picker>

			<TextInput
				style={styles.input}
				onChangeText={text => {
					setPersonPrice(text);
				}}
				onBlur={() => priceValidator()}
				placeholder="Per Person Price"
				keyboardType="number-pad"
			/>
			<Text style={styles.errorText}>{personPriceError}</Text>

			<TextInput
				style={styles.input}
				onChangeText={text => setPhoneNumber(text)}
				onBlur={() => phoneNumberValidator()}
				placeholder="Phone Number"
				keyboardType="number-pad"
				maxLength={11}
			/>
			<Text
				style={{
					color: "red",
					marginRight: "38%"
				}}
			>
				{phoneNumberError}
			</Text>

			<TextInput
				onChangeText={text => setLocation(text)}
				onBlur={() => locationValidator()}
				style={styles.input}
				placeholder="Location"
				multiline
			/>
			<Text
				style={{
					color: "red",
					marginRight: "35%"
				}}
			>
				{locationError}
			</Text>

			<View style={styles.btnContainer}>
				<TouchableOpacity
					style={styles.userBtn}
					onPress={() =>

						buttonValidator()

					}
				>
					<Text style={styles.btnText}>Create</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

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
		// padding: '10%',
		marginTop: "30%",
		marginBottom: "10%",
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
		width: "50%",
		alignItems: "center",
		borderRadius: 25,
		borderWidth: 0,
		marginRight: 5,
		marginLeft: 5,
		marginTop: 5
	},

	errorText: {
		color: "red",
		marginRight: "40%"
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

export default createService;
