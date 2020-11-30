import React, { Component, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
	Container,
	Header,
	Content,
	Button,
	Left,
	Item,
	Input,
	Right,
	Body,
	Thumbnail,
	Segment
} from "native-base";

const Budget = (props) => {
	let item = {
		selectedValue: props.route.params.item.serviceName,
		user_id: props.route.params.item.user_id,
		perPerson: props.route.params.perPerson,
		serviceId: props.route.params.serviceId,
		vendorId: props.route.params.vendor_Id,
		venueName: props.route.params.venueName,

	}
	console.log("ajmal", item)
	let data = [];
	const [selectedValue, setSelectedValue] = useState(data);
	const [addText, setAddText] = useState("");

	const addData = () => {
		let us = selectedValue.push(addText);

		setAddText("");
		console.log(props)

	}
	return (
		<Container>


			<Content padder>
				<Item>
					<Input
						value={addText}
						placeholder="Add to list"
						onChangeText={text => setAddText(text)}
					/>

					<Button
						style={{ marginRight: 12, padding: 10, width: 50 }}
						onPress={() => {
							addData()
						}}
					// onPress={()=>props.navigation.navigate('')}
					>
						<Text style={{ color: "white" }} >Add</Text>
					</Button>

				</Item>

				<FlatList
					data={selectedValue}
					renderItem={({ item }) => {
						return <Text style={styles.itemStyle}>{item}</Text>

					}} />

				<Button
					style={{
						backgroundColor: "#F56F6F",
						margin: 10,
						padding: 10,
						left: 240,
						width: 80,
						borderRadius: 10
					}}
					// onPress={() => {
					// 	<MarqueeHallDetails />
					// }}
					onPress={
						() => {
							console.log("guest", selectedValue)
							if (item.selectedValue == "RoofTop") {
								props.navigation.navigate("RoofTopHallDetails", { item, selectedValue })

							}
							else if (item.selectedValue == "Banquet Halls") {
								props.navigation.navigate("BanqueetHallDetails", item, selectedValue)
							}
							else if (item.selectedValue == "Marquee") {
								props.navigation.navigate("MarqueeHallDetails", item, selectedValue)
							}
						}
					}
				>
					<Text style={{ color: "white", padding: 12 }}>Next</Text>
				</Button>

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
export default Budget;

const styles = StyleSheet.create({

	itemStyle: {
		width: '100%',
		height: 50,
		paddingLeft: 7,
		paddingRight: 5,
		paddingBottom: 4,
		paddingTop: 12,
		fontSize: 17,
		borderBottomWidth: 1,
		borderColor: "#c6c2c2",
	}
});
