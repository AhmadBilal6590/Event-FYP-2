import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Picker,
	FlatList
} from "react-native";

import {
	Button,
	Left,
	Right,
	Body,
	Card,
	CardItem,
	Container,
	Header,
	Segment,
	Content,
	Icon
} from "native-base";
import axios from 'react-native-axios';
const instance = axios.create({
	baseURL: "https://demo-ajmal.herokuapp.com/api"
})

const userCheckList = (props) => {
	console.log("props", props.route.params.props.route.params.user_id)
	let _id = props.route.params.props.route.params.user_id;
	let vendorChecklist = []
	let vendorCheck = []

	React.useEffect(() => {
		async function fetchData() {

			const res = await instance.post('/getUserbook/services', { _id: _id })
			if (res.status == 200) {
				if (res.data.message == "") {
					vendorChecklist.push({ message: "NotBookedTill" })
					return;
				}
				let data = res.data.message;

				data.map((text, index) => {

					vendorChecklist.push({
						venueName: text.venueName,
						venueType: text.serviceName,
						perPerson: text.perPerson,
						totalGuest: text.totalGuest,
						CustomerName: text.vendor_id.fullName,
						CustomerPhoneNumber: text.vendor_id.phone,
						TotaltBudget: text.perPerson * text.totalGuest
					})

				})
				setListData(vendorChecklist)
				setLoading(true)
			}


		}
		fetchData();

	}, []);


	const [activeBookedServices, setActiveBookedServices] = useState(true);
	const [activeServices, setActiveServices] = useState(false);
	const [loading, setLoading] = useState(false);
	const [listData, setListData] = useState(

		vendorChecklist
	);
	const [listService, setListService] = useState(

		vendorCheck
	);

	const tabHandler = type => {
		if (type == "Booked Services") {
			setActiveBookedServices(true);
			setActiveServices(false);
		} else if (type == "Services") {
			setActiveServices(true);
			setActiveBookedServices(false);
		}
	};

	return (
		<Container>
			<Header hasSegment>
				<Left>
					<Button transparent onPress={() => props.navigation.goBack()}>
						<Icon name="arrow-back" />
					</Button>
				</Left>
				<Body style={{ marginRight: "15%", flex: 1 }}>
					<Segment>
						<Button
							first
							active={activeBookedServices}
							onPress={() => tabHandler("Booked Services")}
						>
							<Text style={{ paddingLeft: "2%" }}>Booked Services </Text>
						</Button>

					</Segment>
				</Body>
			</Header>
			{activeBookedServices ? (
				<Content>
					<View style={styles.body}>
						<View style={styles.title}>
							<Text style={styles.textTitle}>Booked Services</Text>
						</View>
						<View style={{ flex: 1 }}>

							<FlatList
								data={listData}
								keyExtractor={(item, index) => item.id}
								renderItem={({ item }) => (

									<Card id={item.id} >
										<CardItem>
											<Body>
												{item.message ?
													<Text style={styles.servicesText}>
														message : {item.message}
													</Text>
													:

													<View>
														<Text style={styles.servicesText}>
															vendorName : {item.CustomerName}
														</Text>
														<Text style={styles.servicesText}>
															vendorName Phone Number : {item.CustomerPhoneNumber}
														</Text>
														<Text style={styles.servicesText}>
															Venue Name : {item.venueName}
														</Text>
														<Text style={styles.servicesText}>
															Venue Type : {item.venueType}
														</Text>
														<Text style={styles.servicesText}>
															Per Price : {item.perPerson}
														</Text>
														<Text style={styles.servicesText}>
															TotalGuest : {item.totalGuest}
														</Text>
														<Text style={styles.servicesText}>
															TotaltBudget : {item.TotaltBudget}
														</Text>
													</View>
												}


											</Body>
										</CardItem>
									</Card>
								)}
								keyExtractor={item => item.id}
							/>
						</View>
					</View>
				</Content>
			) : null}
		</Container>
	);
};

styles = StyleSheet.create({
	body: {
		flex: 1,
		// padding: "5%",
		backgroundColor: "white"
	},

	title: {
		marginTop: "10%",
		marginBottom: "10%",
		alignItems: "center"
	},
	textTitle: {
		fontSize: 30,
		color: "black"
	},
	servicesText: {
		padding: "3%"
	}
});

export default userCheckList;
