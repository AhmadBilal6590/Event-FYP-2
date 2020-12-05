import React, { Component, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Guest from "./Guest";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
	Header,
	Title,
	Card,
	CardItem,
	Container,
	Content,
	Button,
	Left,
	Right,
	Input,
	Item,
	Body,
	Picker,
	Form,
	Thumbnail,
	Segment
} from "native-base";
import axios from "react-native-axios";

const PlanningTools = props => {
	const [selectedValue, setSelectedValue] = useState("Marque");
	const [planactive, setplanactive] = useState(true);
	const [guestactive, setguestactive] = useState(false);
	const [service, setService] = useState(false);
	const [perPerson, setperPerson] = useState("");
	const [totaltGuest, settotalGuest] = useState("");
	const [perp, setP] = useState("");
	let data = [];
	const [res, setRes] = useState(data);
	console.log(selectedValue);
	const instance = axios.create({
		baseURL: "https://demo-ajmal.herokuapp.com/api"
	});
	React.useEffect(() => {
		async function fetchData() {
			const res = await instance.post("/service/getall");
			console.log(res);
			setRes(res.data.message);
		}
		fetchData();
	}, []);
	return (
		<Container>
			<Header hasSegment>
				<Left>
					<Button transparent>
						<Icon
							name="menu"
							size={25}
							onPress={() => props.navigation.openDrawer()}
						/>
					</Button>
				</Left>
				<Body>
					<Segment style={{ margin: 8 }}>
						<Button
							first
							style={{ right: 0 }}
							active={planactive}
							onPress={() => {
								setguestactive(false);
								setplanactive(true);
								setService(false);
							}}
						>
							<Text style={{ padding: 2 }}>CreatePlan</Text>
						</Button>
						<Button
							active={service}
							onPress={() => {
								setService(true);
								setguestactive(false);
								setplanactive(false);
							}}
						>
							<Text style={{ padding: 2 }}>Services</Text>
						</Button>
						<Button
							last
							active={guestactive}
							onPress={() => {
								setguestactive(true);
								setplanactive(false);
								setService(false);
							}}
						>
							<Text style={{ padding: 2 }}>Budget</Text>
						</Button>
					</Segment>
				</Body>

				<Right>
					<Button transparent onPress={() => props.navigation.popToTop()}>
						<Icon name="exit-to-app" size={25} />
					</Button>
				</Right>
			</Header>

			<Content padder>
				{planactive ? (
					<View>
						<Text
							style={{
								fontSize: 18,
								textAlign: "center",
								top: 20,
								textAlign: "center",
								marginBottom: 40,
								marginTop: 3
							}}
						>
							Select Venue For Services
						</Text>
						<Form style={{ marginTop: 0, marginBottom: 20, left: 150 }}>
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
						<Item>
							<Input
								placeholder="Per Person"
								keyboardType="numeric"
								value={perPerson}
								onChangeText={text => {
									setperPerson(text);
								}}
							/>
						</Item>
						<Item>
							<Input
								placeholder="Total Guest"
								keyboardType="numeric"
								value={totaltGuest}
								onChangeText={text => {
									settotalGuest(text);
								}}
							/>
						</Item>
						<Button
							style={{
								backgroundColor: "#F56F6F",
								margin: 10,
								padding: 10,
								left: 240,
								width: 80,
								borderRadius: 10
							}}
							onPress={() => {
								setService(true);
								setguestactive(false);
								setplanactive(false);
							}}
						>
							<Text style={{ color: "white", padding: 12 }}>Next</Text>
						</Button>
						<View style={{ margin: 20, padding: 20 }}>
							<Text
								style={{
									fontSize: 18,
									textAlign: "center",
									top: 20,
									marginBottom: 25,
									marginTop: 35
								}}
							>
								Follow us on
							</Text>
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
					</View>
				) : guestactive ? (
					<View>
						<Text
							style={{
								fontSize: 20,

								fontWeight: "bold",
								textAlign: "center"
							}}
						>
							View Your Budget Stats
						</Text>
						<Text
							style={{
								marginTop: 30,
								fontSize: 20,
         						fontWeight: "italic"
							}}
						>
							Service Name : {selectedValue}
						</Text>
						<Text
							style={{
								marginTop: 30,
								fontSize: 20,
								fontWeight: "italic"
							}}
						>
							Per-Person Budget : {perp}
						</Text>
						<Text
							style={{
								marginTop: 30,
								fontSize: 20,
								fontWeight: "italic"
							}}
						>
							Total Guest : {totaltGuest}
						</Text>
						<Text
							style={{
								marginTop: 50,
								fontSize: 20,
								textAlign: "right",
								padding: 10,
								fontWeight: "bold"
							}}
						>
							Total Budget={perp * totaltGuest}
						</Text>
					</View>
				) : service ? (
					selectedValue === "Marquee" ||
					selectedValue === "RoofTop" ||
					selectedValue === "Banquet" ? (
						<Container>
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
									style={{
										fontSize: 15,
										margin: 10,
										paddingLeft: 15,
										borderRadius: 5
									}}
								>
									We provide best ways to create and manage your events, You can
									instantly jump to bookings from home now.
								</Text>
								{res.map((text, index) => {
									if (
										text.serviceName == selectedValue &&
										text.perPersonCharge <= perPerson
									) {
										return (
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
															<Text>Venue Type : {text.serviceName}</Text>
															<Text style={{ marginTop: 20 }}>
																Venue Name : {text.venueName}
															</Text>
														</Body>
													</Left>
												</CardItem>
												<Button
													style={{
														backgroundColor: "#F56F6F",
														margin: 10,
														padding: 10,
														left: 240,
														width: 80,
														borderRadius: 10
													}}
													onPress={() => {
														setService(false);
														setguestactive(true);
														setplanactive(false);
														setP(text.perPersonCharge);
													}}
												>
													<Text style={{ color: "white", padding: 12 }}>
														Next
													</Text>
												</Button>
											</Card>
										);
									}
								})}

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
									{console.log("ajmal")}
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
					) : null
				) : null}
			</Content>
		</Container>
	);
};

const styles = StyleSheet.create({});
export default PlanningTools;
