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

const vendorCheckList = ({ navigation }) => {
	const [activeBookedServices, setActiveBookedServices] = useState(true);
	const [activeServices, setActiveServices] = useState(false);
	const [listData, setListData] = useState([
		{
			CustomerName: "ahmad",
			phoneNumber: "03422839515",
			venueName: "Ajmal Marquee",
			VenueType: "Marquee",
			PerPrice: "1000",
			Location: "lahore"
		},

		{
			CustomerName: "ahmad",
			phoneNumber: "03422839515",
			venueName: "Ajmal Marquee",
			VenueType: "Marquee",
			PerPrice: "1000",
			Location: "lahore"
		},
		{
			CustomerName: "ahmad",
			phoneNumber: "03422839515",
			venueName: "Ajmal Marquee",
			VenueType: "Marquee",
			PerPrice: "1000",
			Location: "lahore"
		},

		{
			CustomerName: "ahmad",
			phoneNumber: "03422839515",
			venueName: "Ajmal Marquee",
			VenueType: "Marquee",
			PerPrice: "1000",
			Location: "lahore"
		}
	]);

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
					<Button transparent onPress={() => navigation.goBack()}>
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
								renderItem={({ item }) => (
									<Card>
										<CardItem>
											<Body>
												<Text style={styles.servicesText}>
													Customer Name : {item.CustomerName}
												</Text>
												<Text style={styles.servicesText}>
													Customer Phone Number : {item.phoneNumber}
												</Text>
												<Text style={styles.servicesText}>
													Venue Name : {item.venueName}
												</Text>
												<Text style={styles.servicesText}>
													Venue Type : {item.VenueType}
												</Text>
												<Text style={styles.servicesText}>
													Per Price : {item.PerPrice}
												</Text>
												<Text style={styles.servicesText}>
													Location : {item.Location}
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
								data={listData}
								renderItem={({ item }) => (
									<Card>
										<CardItem>
											<Body>
												<Text style={styles.servicesText}>
													Customer Name : {item.CustomerName}
												</Text>
												<Text style={styles.servicesText}>
													Customer Phone Number : {item.phoneNumber}
												</Text>
												<Text style={styles.servicesText}>
													Venue Name : {item.venueName}
												</Text>
												<Text style={styles.servicesText}>
													Venue Type : {item.VenueType}
												</Text>
												<Text style={styles.servicesText}>
													Per Price : {item.PerPrice}
												</Text>
												<Text style={styles.servicesText}>
													Location : {item.Location}
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
