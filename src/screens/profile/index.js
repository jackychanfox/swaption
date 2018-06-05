
import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import {Ionicons} from '@expo/vector-icons';

import * as commonColors from '../../styles/commonColors'
import { screenWidth, screenHeight } from '../../styles/commonStyles';
import * as commonStyles from '../../styles/commonStyles';

import {Header} from '../../components/myHeader'

const ItemView=({isSelected, icon, title, onPress})=>(
  <TouchableOpacity onPress={()=>onPress()} style={{flexDirection:'row', backgroundColor:isSelected?'rgb(245,249, 252)':'white', alignItems:'center', borderLeftColor:commonColors.theme, borderLeftWidth:isSelected?4:0, height:50, borderBottomColor:commonColors.background, borderBottomWidth:0.5, borderRightColor:commonColors.background, borderRightWidth:0.5}}>
    <Ionicons name={icon} size={16} color={isSelected?commonColors.theme:'#333'} style={{marginLeft:8}}/>
    <Text style={{fontSize:14, color:isSelected?commonColors.theme:'#333', fontWeight:'bold', marginLeft:8}}>{title}</Text>
  </TouchableOpacity>
)

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state={
          avatar: null,
          userName: 'User Name', 
          about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Nunc fringilla cursus sodales.',
          settings:[
            {icon:'ios-people-outline', title:'Profile'}, 
            {icon:'ios-lock-outline', title:'Change password'}, 
            {icon:'ios-pricetags-outline', title:'My Categories'}, 
            {icon:'ios-people', title:'My Orders'}, 
            {icon:'ios-cart-outline', title:'My Listings'}, 
            {icon:'ios-heart-outline', title:'My Likes'}, 
            {icon:'ios-jet-outline', title:'My Offers'}, 
            {icon:'ios-chatbubbles-outline', title:'Chats'}, 
          ],
          index: 0,
        }
    }
    
    clickItem(index){
      switch ( index ){
        case 0:
          Actions.EditProfile();
          break;
        case 4:
          Actions.MyListings();
          break;
        case 5:
          Actions.MyLikes();
          break;
        default:
          break;
      }
    }

    render() {
        return (
            <View style={styles.container}>
              <Header 
                leftIcon="md-menu"
                leftCallback={()=>{}}
                title="Profile"
              />
              <ScrollView>
                <View style={{flex:1, backgroundColor:'rgb(186, 194, 213)', alignItems:'center', paddingBottom:20}}>
                  <View style={{width:100, height:100, borderRadius:50, borderColor:'white', borderWidth:1, justifyContent:'center', alignItems:'center', marginTop:20}}>
                    {this.state.avatar&&<Image source={this.state.avatar} style={{width:100, height:100, borderRadius:50}}/>}
                    {this.state.avatar==null&&<Ionicons name="ios-person" size={100} color={'white'}/>}
                  </View>
                  <Text style={{fontSize:24, color:'white', fontWeight:'bold', marginTop:10}}>{this.state.userName}</Text>
                  <Text style={{fontSize:13, color:'white', textAlign:'center', marginTop:15}}>{this.state.about}</Text>
                  <View style={{flexDirection:'row', marginTop:20}}>
                    <TouchableOpacity style={{width:40, height:40, borderRadius:20, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
                      <Ionicons name="logo-facebook" size={24} color={commonColors.lightTheme}/>
                    </TouchableOpacity>
                    <View style={{width:40}}/>
                    <TouchableOpacity style={{width:40, height:40, borderRadius:20, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
                      <Ionicons name="logo-twitter" size={24} color={commonColors.lightTheme}/>
                    </TouchableOpacity>
                    <View style={{width:40}}/>
                    <TouchableOpacity style={{width:40, height:40, borderRadius:20, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
                      <Ionicons name="md-mail" size={24} color={commonColors.lightTheme}/>
                    </TouchableOpacity>
                  </View>
                </View>
                
                <View style={{backgroundColor:commonColors.background, flex:1, padding:10 }}>
                  <View style={{backgroundColor:'white', flexDirection:'row'}}>
                    <View style={{flex:1}}>
                      {this.state.settings.map((item, index)=>{
                        if ( index >= 4 ) return null;
                        return (<ItemView isSelected={this.state.index==index} index={index} icon={item.icon} title={item.title} onPress={()=>this.clickItem(index)}/>)
                      })}
                    </View>
                    <View style={{flex:1}}>
                      {this.state.settings.map((item, index)=>{
                        if ( index < 4 ) return null;
                        return (<ItemView isSelected={this.state.index==index} index={index} icon={item.icon} title={item.title} onPress={()=>this.clickItem(index)}/>)
                      })}
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: commonColors.background,
    },
});