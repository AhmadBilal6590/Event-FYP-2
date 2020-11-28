import React, { Component, useState } from "react";
import {
	Text,
	View,
	StyleSheet,
} from "react-native";
import Guest from './Guest'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
	Container,
	Header,
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

const PlanningTools = props => {
	const [selectedValue, setSelectedValue] = useState("");
	const [planactive, setplanactive] = useState(true);
	const [guestactive, setguestactive] = useState(false);
	const [service, setService] = useState(false);
	const [perPerson, setperPerson] = useState("");
	const [totaltGuest, settotalGuest] = useState("");

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
						<Button first style={{ right: 0 }} active={planactive} onPress={() => {
							setguestactive(false)
							setplanactive(true)
							setService(false)

						}}>
							<Text>CreatePlan</Text>
						</Button>
						<Button active={service} onPress={() => {
							setService(true)
							setguestactive(false)
							setplanactive(false)

						}}>



							<Text>Services</Text>
						</Button>
						<Button last active={guestactive} onPress={() => {

							setguestactive(true)
							setplanactive(false)
							setService(false)

						}}>
							<Text>AddGuest</Text>
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
				{planactive ?
					<View>
						<Text style={{
							fontSize: 18,
							textAlign: 'center',
							top: 20,
							textAlign: "center",
							marginBottom: 40,
							marginTop: 3
						}}>Select Venue For Services</Text>
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
								<Picker.Item label="Banquet Halls" value="Banquet Halls" />
								<Picker.Item label="Marquee" value="Marquee" />
								<Picker.Item label="RoofTop" value="RoofTop" />
							</Picker>
						</Form>
						<Item>
							<Input placeholder="Per Person" />
						</Item>
						<Item>
							<Input placeholder="Total Guest" />
						</Item>
						<Button
							style={{
								backgroundColor: "#F56F6F", margin: 10, padding: 10, left: 240, width: 80, borderRadius: 10
							}}
							onPress={() => {
								alert("Create Plan");
							}}
							onPress={() => props.navigation.navigate('Guest')}
						>
							<Text style={{ color: 'white', padding: 12 }}>Next</Text>
						</Button>
						<View style={{ margin: 20, padding: 20, }}>
							<Text
								style={{
									fontSize: 18,
									textAlign: 'center',
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
					: guestactive ? <Guest /> : null}

			</Content>


		</Container>
	);
};

const styles = StyleSheet.create({

});
export default PlanningTools;
