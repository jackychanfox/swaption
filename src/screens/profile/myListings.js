
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
const FREE = 2;

        
const ItemView = ({data, onAction, index, onPress})=>{
  let rightButtons = [{
      component: (
        <View>
          <TouchableOpacity onPress={()=>onAction('EDIT')} style={{ justifyContent: 'center', alignItems: 'center', height: '50%', backgroundColor: commonColors.theme, flexDirection:'row' }}>
              <Ionicons name="ios-home" size={14} color={'white'} />
              <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold',marginLeft:5 }}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>onAction('LIKES1')} style={{ justifyContent: 'center', alignItems: 'center', height: '50%', backgroundColor: 'rgb(231, 63, 122)', flexDirection:'row' }}>
              <Ionicons name="ios-home" size={14} color={'white'} />
              <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold',marginLeft:5 }}>Likes</Text>
          </TouchableOpacity>
        </View>
      ),
      onPress: () =>{},
  },
  {
      component: (
        <View>
          <TouchableOpacity onPress={()=>onAction('OFFERS')} style={{ justifyContent: 'center', alignItems: 'center', height: '50%', backgroundColor: 'rgb(255, 181, 20)', flexDirection:'row' }}>
              <Ionicons name="ios-home" size={14} color={'white'} />
              <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold',marginLeft:5 }}>Offers</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>onAction('LIKES2')} style={{ justifyContent: 'center', alignItems: 'center', height: '50%', backgroundColor: 'rgb(109, 71, 159)', flexDirection:'row' }}>
              <Ionicons name="ios-home" size={14} color={'white'} />
              <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold',marginLeft:5 }}>Likes</Text>
          </TouchableOpacity>
        </View>
      ),
      onPress: () => {},
  }]
  let {type, image, title, price}= data;
  return (
    <TouchableOpacity onPress={()=>onPress()} key={index} style={{width:'100%', backgroundColor:'red', borderBottomColor:commonColors.borderColor, borderBottomWidth:1}}>
      <Swipeout right={rightButtons} style={{ backgroundColor: type==SWAPPING?commonColors.background:(type==SELLING?'white':'rgb(255,243,247)') }} buttonWidth={80}>
        <View style={{flexDirection:'row', height:90, padding:15}}>
          <Image source={image} style={{width:60, height:60, borderRadius:3}}/>
          <View style={{marginLeft:10, flex:1}}>
            <View style={{flexDirection:'row'}}>
              <Text numberOfLines={1} style={{fontSize:15, color:'black', fontWeight:'bold',flex:1}}>{title}</Text>
              <View style={{borderRadius:20, paddingHorizontal:10, backgroundColor:commonColors.theme, height:16, alignItems:'center'}}>
                <Text style={{fontSize:11, color:'white'}}>Active</Text>
              </View>
            </View>
            <View style={{flexDirection:'row', marginTop:5}}>
              <View style={{flex:1}}>
                <View style={{flexDirection:'row'}}>
                  <Ionicons name="ios-home" size={14} color={type==SWAPPING?commonColors.theme:(type==SELLING?'rgb(109, 71, 159)':'rgb(231, 63, 122)')}/>
                  <Text style={{fontSize:14, color:'grey', marginLeft:5}}>{type==SWAPPING?'Swapping':type==SELLING?'Selling':'Free'}</Text>
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
    </TouchableOpacity>
  )
}

export default class MyListings extends Component {
    constructor(props) {
        super(props)
        this.state={
          likes:[
            {image:{uri:'https://placeimg.com/140/140/any'}, title:'Multicolor 100% Cotton 88 X 93 Inch...', type:SWAPPING, group:'Arts & Crafts', price:'25'},
            {image:{uri:'https://placeimg.com/140/140/any'}, title:'Pen Drive', type:SELLING, group:'Computer Equipments', price:'10'},
            {image:{uri:'https://placeimg.com/140/140/any'}, title:'Multicolor 100% Cotton 88 X 93 Inch...', type:SWAPPING, group:'Arts & Crafts', price:'12'},
            {image:{uri:'https://placeimg.com/140/140/any'}, title:'Computer', type:FREE, group:'Computer Equipments', price:'25'},
            {image:{uri:'https://placeimg.com/140/140/any'}, title:'Multicolor 100% Cotton 88 X 93 Inch...', type:SELLING, group:'Computer Equipments', price:'14'},
            {image:{uri:'https://placeimg.com/140/140/any'}, title:'Pen Drive', type:SWAPPING, group:'Computer Equipments', price:'25'},
            {image:{uri:'https://placeimg.com/140/140/any'}, title:'Multicolor 100% Cotton 88 X 93 Inch...', type:FREE, group:'Arts & Crafts', price:'32'},
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
                title="My Listings"
              />
              
              <SearchBar
                value={this.state.value}
                placeholder="Search"
                onChange={(value)=>this.setState({value})}
              />
              
              <ScrollView>
                {this.state.likes.map((item, index)=><ItemView data={item} onPress={()=>{}} index onAction={(type)=>{}}/>)}
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