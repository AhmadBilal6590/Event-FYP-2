import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
	Container,
	Header,
	Picker,
	DatePicker,
	Content,
	Button,
	Left,
	Right,
	Form,
	Body,
	Card,
	CardItem,
	Thumbnail,
	ListItem,
	CheckBox,
	Textarea
} from "native-base";

import { Alert } from 'react-native'
import axios from 'react-native-axios';
const instance = axios.create({
	baseURL: "https://demo-ajmal.herokuapp.com/api"
})

const RoofTopHallDetails = (props) => {
	const [chosenDate, setDate] = React.useState("");
	const [Day, setday] = React.useState("day");
	const [totalGuest, settotalGuest] = React.useState(100);
	const [others, setOthers] = React.useState("");

	const booked=async ()=>{
		let user_id=props.route.params.item.user_id;
		let service_id=props.route.params.item.serviceId;
		let vendor_id=props.route.params.item.vendorId;
		let venueName=props.route.params.item.venueName;
		let selectedValue=props.route.params.item.selectedValue;
		let guest= props.route.params.selectedValue;
	
		let perPerson=props.route.params.item.perPerson;
		let date=chosenDate.toString().substr(4, 12);
		let day=Day;
		console.log("ajmal",date)
		let item={
			user_id:user_id,
			service_id:service_id,
			vendor_id:vendor_id,
			venueName:venueName,
			selectedValue:selectedValue,
			guest:guest,
			totalGuest:totalGuest,
			others:others,
			date:date,
			day:day,
			perPerson:perPerson
		}
		try{
			const res=	await instance.post("/book/services",item)
	
			if (res.status===200) {
				alert("successfullyBooked")
				
			}
			if(res.status===400)
			{
				alert("statusErrorBy400")
			}
		}
		catch(error){
             alert(error)
		}
	

			
	}
	return (
		<Container>
			<Header>
				<Left>
					<Button transparent onPress={() => props.navigation.goBack()}>
						<Icon name="keyboard-backspace" size={25} />
					</Button>
				</Left>
				<Body>
					<Text style={styles.textStyles}>Details</Text>
				</Body>

				<Right />
				<Right>
					<Button transparent onPress={() => props.navigation.popToTop()}>
						<Icon name="exit-to-app" size={25} />
					</Button>
				</Right>
			</Header>

			<Content>
				<Image
					source={{
						uri:
							"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCNgmFCzotQPxvB2TQuSU0baS6eMfldIiNfQ&usqp=CAU"
					}}
					style={{ height: 200, width: null, flex: 1 }}
				/>

				<Card>
					<CardItem header>
						<Text style={{ fontWeight: "bold" }}>{props.route.params.item.selectedValue}</Text>
					</CardItem>
					<CardItem>
						<Body>
							<Text>
								We will provide you the best Services for the event, We
								provide best quality of Event management and allow external
								decorators for your comfort.
								
							</Text>
						</Body>
					</CardItem>


					<Form style={{ marginTop: 100, marginBottom: 20, left: 120 }}>
						<Picker
							mode="dropdown"
							iosHeader="Select your Venue Type"
							iosIcon={<Icon name="arrow-down" />}
							style={{ width: 140 }}
							placeholder="No of Guests"

						selectedValue={totalGuest}
						onValueChange={text=>{settotalGuest(text)}}
						>
							<Picker.Item label="100" value={100} />
							<Picker.Item label="200" value={200} />
							<Picker.Item label="300" value={300} />
							<Picker.Item label="400" value={400} />
							<Picker.Item label="500" value={500} />
							<Picker.Item label="600" value={600} />

						</Picker>
					</Form>
					<Form style={{ marginTop: 20, marginBottom: 20, left: 120 }}>
						<Picker
							mode="dropdown"
							iosHeader="Select your Venue Type"
							iosIcon={<Icon name="arrow-down" />}
							style={{ width: 140 }}
							placeholder="Day/ Evening"

						selectedValue={Day}
						onValueChange={setday}
						>
							<Picker.Item label="Day" value="day" />
							<Picker.Item label="Evening" value="night" />


						</Picker>
					</Form>

					<Form style={{ left: 130 }}>
						<DatePicker
							defaultDate={new Date(2020, 10, 4)}
							minimumDate={new Date(2020, 4, 1)}
							maximumDate={new Date(2020, 12, 31)}
							locale={"en"}
							timeZoneOffsetInMinutes={undefined}
							modalTransparent={false}
							animationType={"fade"}
							androidMode={"default"}
							Icon={"arrow-down"}

							placeHolderText="Click For Select Date"
							textStyle={{ color: "black" }}
							placeHolderTextStyle={{ color: "red" }}
							onDateChange={setDate}
							disabled={false}
						/>
						<Text >
							Date: {chosenDate.toString().substr(4, 12)}
						</Text>

					</Form>
					<Form style={{ marginTop: 25 }}>
						<Textarea 
						value={others}
						onChangeText={(text)=>{setOthers(text)}}
						rowSpan={5} 
						bordered placeholder="Other" />
					</Form>
					<View style={{ marginTop: 50 }}>
						<Button
							block
							success
							onPress={() => 
								
									{
										booked()
								
						}}
						>
							<Text style={{}}>Book Now</Text>
						</Button>
					</View>
				</Card>
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
		</Container>
	);

}
const styles = StyleSheet.create({
	// textStyles: {
	// 	paddingLeft: "55%",
	// 	fontSize: 20,
	// 	color: "white"
	// }
});
export default RoofTopHallDetails
