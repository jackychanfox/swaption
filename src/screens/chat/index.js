
import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert,
    Image,
    ScrollView
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import {Ionicons} from '@expo/vector-icons';

import * as commonColors from '../../styles/commonColors'
import { screenWidth, screenHeight } from '../../styles/commonStyles';
import * as commonStyles from '../../styles/commonStyles';

import {Header, SearchBar} from '../../components/myHeader'

const UserItemView=({avatar, username, description, date, onPress})=>(
  <TouchableOpacity onPress={()=>onPress()} style={{flexDirection:'row'}}>
    <Image source={avatar} style={{width:60, height:60, margin:10}}/>
    <View style={{borderBottomWidth:1, borderBottomColor:commonColors.borderColor, justifyContent:'center', flex:1}}>
      <View style={{flexDirection:'row', paddingRight:15}}>
        <Text style={{flex:1, fontSize:16, fontWeight:'bold', color:'black'}}>{username}</Text>
        <Text style={{fontSize:13, color:'grey'}}>{date}</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:5, paddingRight:15}}>
        <Text style={{flex:1, fontSize:13, color:'grey'}}>{description}</Text>
        <Ionicons name="ios-arrow-forward" size={16} color={'grey'}/>
      </View>
    </View>
  </TouchableOpacity>
)

export default class Chat extends Component {
    constructor(props) {
        super(props)
        this.state={
          value:'',
          users:[
            {avatar:{uri:'https://placeimg.com/140/140/any'}, username:"User Name", date:'9:39 PM', description:'Business Phone'},
            {avatar:{uri:'https://placeimg.com/140/140/any'}, username:"User Name", date:'9:39 PM', description:'Business Phone'},
            {avatar:{uri:'https://placeimg.com/140/140/any'}, username:"User Name", date:'9:39 PM', description:'Business Phone'},
            {avatar:{uri:'https://placeimg.com/140/140/any'}, username:"User Name", date:'9:39 PM', description:'Business Phone'},
            {avatar:{uri:'https://placeimg.com/140/140/any'}, username:"User Name", date:'9:39 PM', description:'Business Phone'},
            {avatar:{uri:'https://placeimg.com/140/140/any'}, username:"User Name", date:'9:39 PM', description:'Business Phone'},
            {avatar:{uri:'https://placeimg.com/140/140/any'}, username:"User Name", date:'9:39 PM', description:'Business Phone'},
            {avatar:{uri:'https://placeimg.com/140/140/any'}, username:"User Name", date:'9:39 PM', description:'Business Phone'},
          ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
              <Header 
                leftIcon="md-menu"
                leftCallback={()=>{}}
                title="Chat"
              />
              
              <SearchBar
                value={this.state.value}
                placeholder="Search"
                onChange={(value)=>this.setState({value})}
              />
              <ScrollView>
                {this.state.users.map((item, index)=>{
                  return <UserItemView {...item} onPress={()=>{Alert.alert(index.toString())}}/>
                })}
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