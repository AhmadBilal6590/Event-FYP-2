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
import axios from 'react-native-axios';
const instance = axios.create({
	baseURL: "https://demo-ajmal.herokuapp.com/api"
})
const MarqueeHallList = (props) => {
	//  const [selectedValue, setSelectedValue] = useState("Select");
	let data = [];
	const [res, setRes] = useState(data);
	let item={
		serviceName:props.route.params.item.selectedValue,
		user_id:props.route.params.item.user_id,

	}

	React.useEffect(() => {
		async function fetchData() {
			const res = await instance.post('/service/getall')
			// console.log(props.route.params.item.selectedValue)
			setRes(res.data.message)

		}
		fetchData()
	}, []);
	return (
		<Container>
			<Header>
				<Left>
					<Button transparent onPress={() => props.navigation.goBack()}>
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

				{/* {props.route.params.selectedValue} */}

				<Text
					style={{ fontSize: 15, margin: 10, paddingLeft: 15, borderRadius: 5 }}
				>
					We provide best ways to create and manage your events, You can
					instantly jump to bookings from home now.

				</Text>
				{res.map((text, index) => {

						if (text.serviceName == props.route.params.item.selectedValue) {
							return (
								<Card>
									<CardItem>
										<Left>

											{props.route.params.item.selectedValue === "Marquee" ?
												<Thumbnail

													source={{

														uri:
															"https://www.kindpng.com/picc/m/33-337804_transparent-booking-icon-png-calendar-icon-png-blue.png"
													}}
												/> : null}
											{props.route.params.item.selectedValue === "Banquet" ?
												<Thumbnail

													source={{

														uri:
															"https://www.kindpng.com/picc/m/33-337804_transparent-booking-icon-png-calendar-icon-png-blue.png"
													}}
												/> : null}
											{props.route.params.selectedValue === "RoofTop" ?
												<Thumbnail

													source={{

														uri:
															"https://www.kindpng.com/picc/m/33-337804_transparent-booking-icon-png-calendar-icon-png-blue.png"
													}}
												/> : null}
											<Body>
												<Text><Text>Venue Type  :  {text.serviceName}</Text>{"\n"}
													<Text >  Venue Name  :   {text.venueName}</Text></Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem cardBody>
										{props.route.params.item.selectedValue === "Marquee" ? <Image
											source={{
												uri:
													"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCNgmFCzotQPxvB2TQuSU0baS6eMfldIiNfQ&usqp=CAU"
											}}
											style={{ height: 200, width: null, flex: 1 }}
										/> : null}
										{props.route.params.item.selectedValue === "Banquet" ? <Image
											source={{
												uri:
													"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCNgmFCzotQPxvB2TQuSU0baS6eMfldIiNfQ&usqp=CAU"
											}}
											style={{ height: 200, width: null, flex: 1 }}
										/> : null}
										{props.route.params.item.selectedValue === "RoofTop" ? <Image
											source={{
												uri:
													"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCNgmFCzotQPxvB2TQuSU0baS6eMfldIiNfQ&usqp=CAU"
											}}
											style={{ height: 200, width: null, flex: 1 }}
										/> : null}
								</CardItem>
								<CardItem>
									<Left>
										<Button transparent>
											<Text></Text>
										</Button>
									</Left>
									<Body>







										{props.route.params.item.selectedValue ?
											<Button
												transparent
												onPress={() => props.navigation.navigate("Guest",{item,serviceId:text._id,venueName:text.venueName,perPerson:text.perPersonCharge,vendor_Id:text.vendor_id})}
											>
												<Icon active name="chevron-right" size={50} />
												<Text>See more</Text>

											</Button>
											: null}



									</Body>
									<Right>
										<Text></Text>
									</Right>
								</CardItem>
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
export default MarqueeHallList;

const styles = StyleSheet.create({
	textStyles: {
		paddingLeft: "20%",
		fontSize: 20,
		color: "white"
	}
});
