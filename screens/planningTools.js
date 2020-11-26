import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, StatusBar, ListView, FlatList, ImageBackground, Picker, ScrollView, Image } from 'react-native';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, List, Right, Spinner, Input, Item, Body, DeckSwiper, Card, CardItem, Thumbnail, Segment } from 'native-base';
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
import { render } from 'react-dom';


const PlanningTools = (props) => {




  return (



    <Container>
      <Header hasSegment>
        <Left >
          <Button transparent>
            <Icon name='menu' size={25} onPress={() => props.navigation.openDrawer()} />
          </Button>
        </Left>
        <Body >
          <Segment style={{ margin: 5 }}>
            <Button first style={{ right: 8 }} active >
              <Text>Checklist</Text>
            </Button>
            <Button style={{ right: 5 }} onPress={() => props.navigation.navigate("Guest")}>
              <Text>Guests</Text>
            </Button>
            <Button last >
              <Text>Budget</Text>
            </Button>
          </Segment>
        </Body>

        <Right>
          <Button transparent onPress={() => props.navigation.popToTop()}>
            <Icon name='exit-to-app' size={25} />
          </Button>

        </Right>
      </Header>

      <Content padder>

        <Item>
          <Input placeholder="Add To List" />
          <Button style={{ padding: 15 }} onPress={() => { alert("checkList") }}>
            <Icon name="plus" color={"white"} />
          </Button>
        </Item>




        <Text style={{ fontSize: 18, left: 135, top: 20, marginBottom: 10, marginTop: 35 }}>Follow us on </Text>
        <View style={{ margin: 20, paddingLeft: 25 }}>

          <Thumbnail style={{ left: 40 }} source={{ uri: 'https://www.iconfinder.com/data/icons/vector-brand-logos/40/Instagram-512.png' }} size={10} />
          <Thumbnail style={{ left: 115, bottom: 55 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPf0C9QSm5-iGlGP1RkfgsKJOe_0N6EesgxQ&usqp=CAU' }} />
          <Thumbnail style={{ left: 190, bottom: 110 }} source={{ uri: 'https://i.pinimg.com/600x315/72/f3/8f/72f38fe442abadd278bc71eb9ef333b0.jpg' }} />

        </View>

      </Content>






    </Container>




  )
}


const styles = StyleSheet.create({





});
export default PlanningTools;