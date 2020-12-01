import React, { Component, useState } from "react";
import { Text, View, StyleSheet, YellowBox } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
	Container,
	Header,
	Content,
	Footer,
	FooterTab,
	Button,
	Left,
	Right,
	Picker,
	Form,
	Body,
	Thumbnail
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { round } from "react-native-reanimated";

const Dashboard = (props) => {
	const [selectedValue, setSelectedValue] = useState("Banquet");

	return (
		<Container>
			<Header>
				<Left>
					<Button transparent onPress={() => props.navigation.goBack()}>
						<Icon name="keyboard-backspace" size={25} />
					</Button>
				</Left>
				<Body>
					<Text style={styles.textStyles}>Venue</Text>
				</Body>
				<Right>
					<Button
						transparent
						onPress={() => this.props.navigation.popToTop()}
					>
						<Icon name="exit-to-app" size={25} />
					</Button>
				</Right>
			</Header>

			<Content>
				<Thumbnail
					large
					style={{ left: 155, top: 50, marginBottom: 35 }}
					source={{
						uri:
							"https://f0.pngfuel.com/png/136/22/profile-icon-illustration-user-profile-computer-icons-girl-customer-avatar-png-clip-art-thumbnail.png"
					}}
				/>

				<Text style={{ top: 35, fontSize: 13, right: 25, textAlign: "center" }}>
					Your Venue
					</Text>

				<Text style={{ fontWeight: "bold", fontSize: 18, top: 80, left: 83 }}>
					{" "}
						Select your Venue type?
					</Text>
				<Form style={{ marginTop: 100, marginBottom: 20, left: 120 }}>
					<Picker
						mode="dropdown"
						iosHeader="Select your Venue Type"
						iosIcon={<Icon name="arrow-down" />}
						style={{ width: 120 }}
						placeholder="select one"
						selectedValue={selectedValue}
						onValueChange={(value, index) => setSelectedValue(value)}
					>
						<Picker.Item label="Banquet" value="Banquet" />
						<Picker.Item label="Marquee" value="Marquee" />
						<Picker.Item label="RoofTop" value="RoofTop" />
					</Picker>
				</Form>

				<TouchableOpacity

					style={{
						backgroundColor: "#F56F6F",
						padding: 17,
						width: "50%",
						marginLeft: 90,
						alignItems: "center",
						borderRadius: 25,
						borderWidth: 0,
					}}
					onPress={() => {

						let user_id = props.route.params.user_id;
						console.log("as", user_id)
						let item = {
							selectedValue: selectedValue,
							user_id: user_id
						}
						props.navigation.navigate("MarqueeHallList", { item })
					}}
				>
					<Text style={{ left: 0 }}>Search</Text>
				</TouchableOpacity>

				<Text
					style={{
						fontSize: 18,
						left: 135,
						top: 20,
						marginBottom: 10,
						marginTop: 70
					}}
				>
					Follow us on{" "}
				</Text>
				<View style={{ margin: 20, paddingLeft: 25 }}>
					<Thumbnail
						style={{ left: 40 }}
						source={{
							uri:
								"https://www.iconfinder.com/data/icons/vector-brand-logos/40/Instagram-512.png"
						}}
						size={10}
					/>
					<Thumbnail
						style={{ left: 115, bottom: 55 }}
						source={{
							uri:
								"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPf0C9QSm5-iGlGP1RkfgsKJOe_0N6EesgxQ&usqp=CAU"
						}}
					/>
					<Thumbnail
						style={{ left: 190, bottom: 110 }}
						source={{
							uri:
								"https://i.pinimg.com/600x315/72/f3/8f/72f38fe442abadd278bc71eb9ef333b0.jpg"
						}}
					/>
				</View>
			</Content>

		</Container >
	);
}


const styles = StyleSheet.create({
	textStyles: {
		paddingLeft: "30%",
		fontSize: 20,
		color: "white"
	}
});
export default Dashboard;