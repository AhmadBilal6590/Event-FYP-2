import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, StatusBar, ListView, ImageBackground, Picker, ScrollView, Image } from 'react-native';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, List, ListItem, Right, Spinner, Body, DeckSwiper, Card, CardItem, Thumbnail, Segment } from 'native-base';
//import { Container, Content, Header, Form, Input, Item, Label, Icon, List, ListItem } from 'native-base';
//import Home2 from './login';
import { FontAwesome5 } from '@expo/vector-icons';

import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { color } from 'react-native-reanimated';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { linear } from 'react-native/Libraries/Animated/src/Easing';
import { Divider } from 'react-native-paper';




const Budget = ({ navigation }) => {

  //  const [selectedValue, setSelectedValue] = useState("Select");
  return (



    <Container >
      <Header hasSegment>
        <Left >
          <Button transparent>
            <Icon name='menu' size={25} onPress={() => navigation.navigate("DashBoardMain")} />
          </Button>
        </Left>
        <Body >
          <Segment style={{ margin: 5 }}>
            <Button first style={{ right: 8 }} onPress={() => navigation.goBack()}>
              <Text>Checklist</Text>
            </Button>
            <Button style={{ right: 5 }} active>
              <Text>Guests</Text>
            </Button>
            <Button last>
              <Text>Budget</Text>
            </Button>
          </Segment>
        </Body>

        <Right>
          <Button transparent onPress={() => navigation.navigate("Home")}>
            <Icon name='exit-to-app' size={25} />
          </Button>

        </Right>
      </Header>

      <Content padder>

        <List>
          <ListItem itemDivider>
            <Text>A</Text>
          </ListItem>
          <ListItem>
            <Text>Ali</Text>
          </ListItem>
          <ListItem>
            <Text>Ahmed</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>B</Text>
          </ListItem>
          <ListItem>
            <Text>Bilal</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>C</Text>
          </ListItem>
          <ListItem>
            <Text>Choudhary</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>D</Text>
          </ListItem>
          <ListItem>
            <Text>Danial</Text>
          </ListItem>
        </List>



        <Text style={{ fontSize: 18, left: 135, top: 20, marginBottom: 10, marginTop: 35 }}>Follow us on </Text>
        <View style={{ margin: 20, paddingLeft: 25 }}>

          <Thumbnail style={{ left: 40 }} source={{ uri: 'https://www.iconfinder.com/data/icons/vector-brand-logos/40/Instagram-512.png' }} size={10} />
          <Thumbnail style={{ left: 115, bottom: 55 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPf0C9QSm5-iGlGP1RkfgsKJOe_0N6EesgxQ&usqp=CAU' }} />
          <Thumbnail style={{ left: 190, bottom: 110 }} source={{ uri: 'https://i.pinimg.com/600x315/72/f3/8f/72f38fe442abadd278bc71eb9ef333b0.jpg' }} />

        </View>

      </Content>






    </Container>




  );

}
export default Budget;

const styles = StyleSheet.create({





});