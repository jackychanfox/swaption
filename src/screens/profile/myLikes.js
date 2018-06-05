
import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import {Ionicons} from '@expo/vector-icons';
import Swipeout from 'react-native-swipeout'

import * as commonColors from '../../styles/commonColors'
import { screenWidth, screenHeight } from '../../styles/commonStyles';
import * as commonStyles from '../../styles/commonStyles';

import {Header, SearchBar} from '../../components/myHeader'

const SWAPPING = 0;
const SELLING = 1;


        
const ItemView = ({data, unLike, index})=>{
  let rightButtons = [{
      component: (
          <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: commonColors.theme }}>
              <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', transform:[{rotate:'270deg'}] }}>Unlike</Text>
          </View>
      ),
      onPress: () => unLike(),
  }]
  let {type, image, title, price}= data;
  return (
    <View key={index} style={{width:'100%', backgroundColor:'red', borderBottomColor:commonColors.borderColor, borderBottomWidth:1}}>
      <Swipeout right={rightButtons} style={{ backgroundColor: type==SWAPPING?commonColors.background:'white' }} buttonWidth={60}>
        <View style={{flexDirection:'row', height:90, padding:15}}>
          <Image source={image} style={{width:60, height:60, borderRadius:3}}/>
          <View style={{marginLeft:10, flex:1}}>
            <Text numberOfLines={1} style={{fontSize:16, color:'black', fontWeight:'bold'}}>{title}</Text>
            <View style={{flexDirection:'row', marginTop:5}}>
              <View style={{flex:1}}>
                <View style={{flexDirection:'row'}}>
                  <Ionicons name="ios-home" size={14} color={type==SWAPPING?commonColors.theme:'rgb(109, 71, 159)'}/>
                  <Text style={{fontSize:14, color:'grey', marginLeft:5}}>{type==SWAPPING?'Swapping':'Selling'}</Text>
                </View>
                <Text style={{fontSize:14, color:commonColors.theme, marginTop:5}}>Arts & Crafts</Text>
              </View>
              <Text style={{fontSize:14, color:commonColors.theme}}>$</Text>
              <Text style={{fontSize:24, color:commonColors.theme}}>{price}</Text>
              <Text style={{fontSize:14, color:commonColors.theme}}>.00</Text>
            </View>
          </View>
        </View>
      </Swipeout>
    </View>
  )
}

export default class MyLikes extends Component {
    constructor(props) {
        super(props)
        this.state={
          likes:[
            {image:{uri:'https://placeimg.com/140/140/any'}, title:'Multicolor 100% Cotton 88 X 93 Inch...', type:SWAPPING, group:'Arts & Crafts', price:'25'},
            {image:{uri:'https://placeimg.com/140/140/any'}, title:'Pen Drive', type:SELLING, group:'Computer Equipments', price:'10'},
            {image:{uri:'https://placeimg.com/140/140/any'}, title:'Multicolor 100% Cotton 88 X 93 Inch...', type:SWAPPING, group:'Arts & Crafts', price:'12'},
            {image:{uri:'https://placeimg.com/140/140/any'}, title:'Computer', type:SELLING, group:'Computer Equipments', price:'25'},
            {image:{uri:'https://placeimg.com/140/140/any'}, title:'Multicolor 100% Cotton 88 X 93 Inch...', type:SELLING, group:'Computer Equipments', price:'14'},
            {image:{uri:'https://placeimg.com/140/140/any'}, title:'Pen Drive', type:SWAPPING, group:'Computer Equipments', price:'25'},
            {image:{uri:'https://placeimg.com/140/140/any'}, title:'Multicolor 100% Cotton 88 X 93 Inch...', type:SELLING, group:'Arts & Crafts', price:'32'},
            {image:{uri:'https://placeimg.com/140/140/any'}, title:'Multicolor 100% Cotton 88 X 93 Inch...', type:SELLING, group:'Arts & Crafts', price:'25'},
          ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
              <Header 
                leftIcon="md-arrow-back"
                leftCallback={()=>{Actions.pop()}}
                title="My Likes"
              />
              
              <SearchBar
                value={this.state.value}
                placeholder="Search"
                onChange={(value)=>this.setState({value})}
              />
              
              <ScrollView>
                {this.state.likes.map((item, index)=><ItemView data={item} unLike={()=>{}} index />)}
              </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:commonColors.background
    },
});