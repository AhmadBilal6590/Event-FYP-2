import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
	Container,
	Header,
	Content,
	Button,
	Left,
	Right,
	Body,
	Card,
	Input,
	Item,
	CardItem,
	Thumbnail
} from "native-base";
import { TextInput } from "react-native-paper";

const Home = (props) => {
	//  const [selectedValue, setSelectedValue] = useState("Select");
	return (
		<Container>
			<Header>
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
					<Text style={styles.textStyles}>Home</Text>
				</Body>

				<Right>
					<Button transparent onPress={() => props.navigation.popToTop()}>
						<Icon name="exit-to-app" size={25} />
					</Button>
				</Right>
			</Header>

			<Content>
				<Text
					style={{
						fontSize: 24,
						textAlign:"center",
						margin: 10,
						fontWeight: "bold"
					}}
				>
					Discover and book your dream wedding
				</Text>
				<Text
					style={{ fontSize: 15, textAlign:"center", borderRadius: 5,fontStyle:"italic"}}
				>
					Explore the best wedding suppliers in your area. Create your shortlist and when you’re ready, easily book and manage communications through Wedding Planner.
					
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
								<Text>Create Your Event Now</Text>
							</Body>
						</Left>
					</CardItem>
					<CardItem cardBody>
						<Image
							source={require('../assets/images/wediing.jpg')}

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
								onPress={() => {
									let user_id = props.route.params.props.route.params.user_id


									props.navigation.navigate("DashBoard", { user_id: user_id })
								}}
							>
								<Text style={{width:130,color:"blue"}}>Find wedding Venue</Text>
								<Icon active name="chevron-right" size={19} />
							</Button>
						</Body>
						<Right>
							<Text></Text>
						</Right>
					</CardItem>
				</Card>
				<Card>
					
					<Text 
						style={{
							fontSize: 24,
							textAlign:"center",
							margin: 10,
							fontWeight: "bold"
						}}
					>
						Plan your wedding from home and on the go.</Text>
						<CardItem cardBody>
						<Image
							source={require('../assets/images/wediing2.jpg')}

							style={{ height: 200, width: null, flex: 1 }}
						/>
					</CardItem>
						<Text
						style={{ fontSize: 15, textAlign:"center", borderRadius: 5,fontStyle:"italic"}}
						>
						With our free, intuitive and simple to use planning tools, you can keep up to date on your wedding admin wherever you are. From checklists to table plans and budget trackers, we've got you covered.
						
						</Text>
				<Item
				style={{ marginTop:30 }}
				>
					<Input
					
						placeholder="Enter your email"
							/>

					<Button
						style={{ marginRight: 20,padding:10, width: 90 }}
						onPress={() => {
							alert("You have successfully subscribed")
						}}
						// onPress={()=>props.navigation.navigate('')}
					>
						<Text style={{ color: "white" }}>Subscribe</Text>
					</Button>
				</Item>
						
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
