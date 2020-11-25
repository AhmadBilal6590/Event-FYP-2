import React, { Component, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Left,
	Right,
	Body,
	Card,
	CardItem,
	Thumbnail
} from "native-base";

const RoofTopHallList = ({ navigation }) => {
	//  const [selectedValue, setSelectedValue] = useState("Select");
	return (
		<Container>
			<Header>
				<Left>
					<Button transparent onPress={() =>navigation.goBack()}>
						<Icon name="keyboard-backspace" size={25} />
					</Button>
				</Left>
				<Body>
					<Text style={styles.textStyles}>Home</Text>
				</Body>
			</Header>

			<Content>
				<Text
					style={{
						fontSize: 24,
						margin: 10,
						paddingLeft: 20,
						fontWeight: "bold"
					}}
				>
					Welcome to Wedding Planner
				</Text>
				<Text
					style={{ fontSize: 15, margin: 10, paddingLeft: 15, borderRadius: 5 }}
				>
					We provide best ways to create and manage your events, You can
					instantly jump to bookings from home now.
				</Text>

				<Card>
					<CardItem>
						<Left>
							<Thumbnail
								source={{
									uri:
										"https://www.kindpng.com/picc/m/33-337804_transparent-booking-icon-png-calendar-icon-png-blue.png"
								}}
							/>
							<Body>
								<Text>Roof Top Hall</Text>
							</Body>
						</Left>
					</CardItem>
					<CardItem cardBody>
						<Image
							source={{
								uri:
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCNgmFCzotQPxvB2TQuSU0baS6eMfldIiNfQ&usqp=CAU"
							}}
							style={{ height: 200, width: null, flex: 1 }}
						/>
					</CardItem>
					<CardItem>
						<Left>
							<Button transparent>
								<Text></Text>
							</Button>
						</Left>
						<Body>
							<Button
								transparent
								onPress={() => navigation.navigate("BanqueetHallDetails")}
							>
								<Icon active name="chevron-down" size={19} />
								<Text>See more</Text>
							</Button>
						</Body>
						<Right>
							<Text></Text>
						</Right>
					</CardItem>
				</Card>


				<Text
					style={{
						fontSize: 18,
						left: 135,
						top: 20,
						marginBottom: 10,
						marginTop: 35
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
		</Container>
	);
};
export default RoofTopHallList;

const styles = StyleSheet.create({
	textStyles: {
		paddingLeft: "20%",
		fontSize: 20,
		color: "white"
	}
});
