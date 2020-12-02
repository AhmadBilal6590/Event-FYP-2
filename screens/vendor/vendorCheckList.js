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

const vendorCheckList = (props) => {
	let _id = props.route.params.route.params.user_id
	let vendorChecklist = []
	let vendorCheck = []

	React.useEffect(() => {
		async function fetchData() {

			const res = await instance.post('/getAllbook/services', { vendor_id: _id })
			if (res.status == 200) {
				let data = res.data.message;

				data.map((text, index) => {

					vendorChecklist.push({
						venueName: text.venueName,
						venueType: text.serviceName,
						perPerson: text.perPerson,
						totalGuest: text.totalGuest,
						CustomerName: text.user_id.fullName,
						CustomerPhoneNumber: text.user_id.phone,
						TotaltBudget: text.perPerson * text.totalGuest
					})

				})
				setListData(vendorChecklist)
				setLoading(true)
			}


		}
		fetchData();

	}, []);

	React.useEffect(() => {
		async function fetchList() {

			const res = await instance.post('/service/get', { vendor_id: _id })
			if (res.status == 200) {
				let data = res.data.message;
				console.log(data)
				data.map((text, index) => {

					vendorCheck.push({
						phone: text.phone,
						serviceName: text.serviceName,
						perPersonCharge: text.perPersonCharge,
						address: text.address,
						venueName: text.venueName
					})
					console.log("ajmal", vendorCheck)
				})
				setListService(vendorCheck)
				setLoading(true)
			}


		}
		fetchList()

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
						<Button
							last
							active={activeServices}
							onPress={() => tabHandler("Services")}
							style={{ flex: 1 }}
						>
							<Text style={{ paddingLeft: "25%" }}>Services</Text>
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
												<Text style={styles.servicesText}>
													Customer Name : {item.CustomerName}
												</Text>
												<Text style={styles.servicesText}>
													Customer Phone Number : {item.CustomerPhoneNumber}
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
											</Body>
										</CardItem>
									</Card>
								)}
								keyExtractor={item => item.id}
							/>
						</View>
					</View>
				</Content>
			) : activeServices ? (
				<Content>
					<View style={styles.body}>
						<View style={styles.title}>
							<Text style={styles.textTitle}>Services</Text>
						</View>
						<View style={{ flex: 1 }}>
							<FlatList
								data={listService}
								renderItem={({ item }) => (
									<Card>
										<CardItem>
											<Body>
												<Text style={styles.servicesText}>
													address : {item.address}
												</Text>
												<Text style={styles.servicesText}>
													phone : {item.phone}
												</Text>
												<Text style={styles.servicesText}>
													Venue Name : {item.venueName}
												</Text>
												<Text style={styles.servicesText}>
													Venue Type : {item.serviceName}
												</Text>
												<Text style={styles.servicesText}>
													Per Price : {item.perPersonCharge}
												</Text>

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

export default vendorCheckList;
