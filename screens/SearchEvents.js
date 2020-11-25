import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
	Container,
	Header,
	Content,
	List,
	ListItem,
	Text,
	Left,
	Right,
	Button,
	Body
} from "native-base";
export default class SearchEvents extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="keyboard-backspace" size={25} />
						</Button>
					</Left>
					<Body>
						<Text style={styles.textStyles}>SearchEvents</Text>
					</Body>
				</Header>
				<Content>
					<List>
						<ListItem>
							<Left>
								<TouchableOpacity
									transparent
									onPress={() =>
										this.props.navigation.navigate("BanqueetHallList")
									}
								>
									<Text>Banquet Halls</Text>
								</TouchableOpacity>
							</Left>
						</ListItem>
						<ListItem>
							<Left>
								<TouchableOpacity
									transparent
									onPress={() =>
										this.props.navigation.navigate("MarqueeHallList")
									}
								>
									<Text>Marquee</Text>
								</TouchableOpacity>
							</Left>
						</ListItem>
						<ListItem>
							<Left>
								<TouchableOpacity
									transparent
									onPress={() =>
										this.props.navigation.navigate("RoofTopHallList")
									}
								>
									<Text>RoofTop</Text>
								</TouchableOpacity>
							</Left>
							<Left></Left>
						</ListItem>
					</List>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	textStyles: {
		paddingLeft: "9%",
		fontSize: 20,
		color: "white"
	}
});
