import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, StatusBar, ListView, ImageBackground, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Picker, Form, Body, DeckSwiper, Card, CardItem, Thumbnail, DatePicker, ListItem, CheckBox } from 'native-base';
//import { Container, Content, Header, Form, Input, Item, Label, Icon, List, ListItem } from 'native-base';




export default class Hall01Book extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: undefined
        };
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    /* onSelect(value){
   
       this.props.navigation.navigate("SearchEvent")({
         selected:value
         
       });
     }*/
    render() {
        return (



            <Container >
                <Header >
                    <Left >
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='keyboard-backspace' size={25} />
                        </Button>
                    </Left>
                    <Body >
                        <Title> Booking</Title>
                    </Body>

                    <Right />
                </Header>

                <Content >
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCNgmFCzotQPxvB2TQuSU0baS6eMfldIiNfQ&usqp=CAU' }} style={{ height: 200, width: null, flex: 1 }} />

                    <Card>
                        <CardItem header>
                            <Text style={{ fontWeight: "bold" }}>Tulip Banquet Hall</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    We will provide you the best Services for the event, We provide best quality of Event management
                                    and allow external decorators for your comfort.
                </Text>


                            </Body>

                        </CardItem>
                        <CardItem footer>
                            <Text style={{ fontWeight: "bold" }}>Timmings 12 am - 10 pm</Text>
                        </CardItem>
                    </Card>

                    <Text style={{ fontWeight: 'bold', fontSize: 18, top: 45, left: 40 }}> Fill in your booking requirements?</Text>
                    <Form style={{ marginTop: 100, marginBottom: 20, left: 120 }}>
                        <Picker
                            mode="dropdown"
                            iosHeader="Select your Venue Type"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: 140 }}
                            placeholder="No of Guests"

                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="100-200" value="key0" />
                            <Picker.Item label="200-300" value="key1" />
                            <Picker.Item label="300-400" value="key2" />

                        </Picker>
                    </Form>
                    <Form style={{ marginTop: 20, marginBottom: 20, left: 120 }}>
                        <Picker
                            mode="dropdown"
                            iosHeader="Select your Venue Type"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: 140 }}
                            placeholder="Day/ Evening"

                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Day" value="key0" />
                            <Picker.Item label="Evening" value="key1" />


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
                            placeHolderText="Select date"
                            textStyle={{ color: "black" }}
                            placeHolderTextStyle={{ color: "black" }}
                            onDateChange={this.setDate}
                            disabled={false}
                        />
                        <Text >
                            Date: {this.state.chosenDate.toString().substr(4, 12)}
                        </Text>

                    </Form>
                    <View style={{ top: 20 }}>
                        <Button block success>
                            <Text>Check Availablity</Text>
                        </Button>
                    </View>





                    <Text style={{ fontSize: 18, left: 135, top: 20, marginBottom: 10, marginTop: 70 }}>Follow us on </Text>
                    <View style={{ margin: 20, paddingLeft: 25 }}>

                        <Thumbnail style={{ left: 40 }} source={{ uri: 'https://www.iconfinder.com/data/icons/vector-brand-logos/40/Instagram-512.png' }} size={10} />
                        <Thumbnail style={{ left: 115, bottom: 55 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPf0C9QSm5-iGlGP1RkfgsKJOe_0N6EesgxQ&usqp=CAU' }} />
                        <Thumbnail style={{ left: 190, bottom: 110 }} source={{ uri: 'https://i.pinimg.com/600x315/72/f3/8f/72f38fe442abadd278bc71eb9ef333b0.jpg' }} />

                    </View>



                </Content>






            </Container>




        );
    }
}


const styles = StyleSheet.create({





});