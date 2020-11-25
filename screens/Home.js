import React, { Component, useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	StatusBar,
	ListView,
	ImageBackground,
	Picker,
	ScrollView,
	Image
} from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
	Container,
	Header,
	Title,
	Content,
	Footer,
	FooterTab,
	Button,
	Left,
	Right,
	Spinner,
	Body,
	DeckSwiper,
	Card,
	CardItem,
	Thumbnail
} from "native-base";
//import { Container, Content, Header, Form, Input, Item, Label, Icon, List, ListItem } from 'native-base';

import { FontAwesome5 } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { color } from "react-native-reanimated";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { linear } from "react-native/Libraries/Animated/src/Easing";
import { Divider } from "react-native-paper";

const Home = ({ navigation }) => {
	//  const [selectedValue, setSelectedValue] = useState("Select");
	return (
		<Container>
			<Header>
				<Left>
					<Button transparent>
						<Icon
							name="menu"
							size={25}
							onPress={() => navigation.openDrawer()}
						/>
					</Button>
				</Left>
				<Body>
					<Text style={styles.textStyles}>Home</Text>
				</Body>

				<Right>
					<Button transparent onPress={() => navigation.popToTop()}>
						<Icon name="exit-to-app" size={25} />
					</Button>
				</Right>
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
								<Text>Instantly Create Event Now</Text>
							</Body>
						</Left>
					</CardItem>
					<CardItem cardBody>
						<Image
							source={{
								uri:
									"https://colorlib.com/wp/wp-content/uploads/sites/2/appointment-booking-wp-plugins.png"
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
								onPress={() => navigation.navigate("DashBoard")}
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

				<Card>
					<CardItem>
						<Left>
							<Thumbnail
								source={{
									uri:
										"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqOWokBUaDI1lDzQVOTRKQbqwKna-cPWaTBw&usqp=CAU"
								}}
							/>
							<Body>
								<Text>Show Venues</Text>
							</Body>
						</Left>
					</CardItem>
					<CardItem cardBody>
						<Image
							source={{
								uri:
									"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTxG4C6pxXUhStpdGkq3SiiOciGzJT1nVFiA&usqp=CAU"
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
							<Button transparent>
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
export default Home;

const styles = StyleSheet.create({
	textStyles: {
		paddingLeft: "55%",
		fontSize: 20,
		color: "white"
	}
});
