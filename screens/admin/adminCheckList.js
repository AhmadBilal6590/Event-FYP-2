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

const adminCheckList = ({ navigation }) => {
	const [activeBookedServices, setActiveBookedServices] = useState(true);
	const [activeServices, setActiveServices] = useState(false);
	const [listData, setListData] = useState([
		{
			vendorName: "ahmad",
			vendorService: "Marquee",
			venueName: "Ajmal Marquee"
		},
		{
			vendorName: "ahmad",
			vendorService: "Marquee",
			venueName: "Ajmal Marquee"
		},
		{
			vendorName: "ahmad",
			vendorService: "Marquee",
			venueName: "Ajmal Marquee"
		}
	]);

	return (
		<Container>
			<Header hasSegment>
				<Left>
					<Button transparent onPress={() => navigation.goBack()}>
						<Icon name="arrow-back" />
					</Button>
				</Left>
				<Body style={{ marginRight: "15%", flex: 1 }}></Body>
			</Header>
			<Content>
				<View style={styles.body}>
					<View style={styles.title}>
						<Text style={styles.textTitle}>Vendor List</Text>
					</View>
					<View style={{ flex: 1 }}>
						<FlatList
							data={listData}
							renderItem={({ item }) => (
								<Card>
									<CardItem>
										<Body>
											<Text style={styles.servicesText}>
												Vendor Name : {item.vendorName}
											</Text>

											<Text style={styles.servicesText}>
												Venue Name : {item.venueName}
											</Text>

											<Text style={styles.servicesText}>
												Vendor Service : {item.vendorService}
											</Text>
											<View style={{ flexDirection: "row" }}>
												<Button style={{ margin: 10, padding: 10 }}>
													<Text>update</Text>
												</Button>
												<Button
													style={{
														margin: 10,
														padding: 12,
														backgroundColor: "red"
													}}
												>
													<Text>delete</Text>
												</Button>
											</View>
										</Body>
									</CardItem>
								</Card>
							)}
							keyExtractor={item => item.id}
						/>
					</View>
				</View>
			</Content>
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

export default adminCheckList;
