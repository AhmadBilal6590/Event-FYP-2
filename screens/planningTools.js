import React, { Component, useState } from "react";
import {
	Text,
	View,
	StyleSheet,
} from "react-native";

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
	Thumbnail,
	Segment
} from "native-base";

const PlanningTools = props => {
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
					<Segment style={{ margin: 5 }}>
						<Button first style={{ right: 8 }} active>
							<Text>CreatePlan</Text>
						</Button>
						<Button
							style={{ right: 5 }}
							onPress={() => props.navigation.navigate("Guest")}
						>
							<Text>Guests</Text>
						</Button>
						<Button last>
							<Text>Budget</Text>
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
				<Item>
					<Input placeholder="Service" />
				</Item>
        <Item>
					<Input placeholder="Per Person" />
				</Item>
        <Item>
					<Input placeholder="Total Guest" />
				</Item>
        <Button
						style={{ backgroundColor:"#F56F6F",margin:10,padding:10,left:240,width:80,borderRadius:10
            }}
						onPress={() => {
							alert("Create Plan");
            }}
            onPress={()=>props.navigation.navigate('Guest')}
					>
            <Text style={{color:'white',padding:12}}>Next</Text>
					</Button>
          <View style={{ margin: 20, padding: 20,}}>
        <Text
					style={{
						fontSize: 18,
            textAlign:'center',
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
			</Content>


		</Container>
	);
};

const styles = StyleSheet.create({

});
export default PlanningTools;
