
import React, { Component } from 'react'

import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, TextInput, Switch } from 'react-native';

import { Actions } from 'react-native-router-flux'
import {Ionicons} from '@expo/vector-icons';

import * as commonColors from '../../styles/commonColors'
import { screenWidth, screenHeight } from '../../styles/commonStyles';
import * as commonStyles from '../../styles/commonStyles';

import {Header} from '../../components/myHeader'

const ItemView=({isSelected, index, icon, title, onChange})=>(
  <TouchableOpacity onPress={()=>onChange(index)} style={{flexDirection:'row', backgroundColor:isSelected?'rgb(245,249, 252)':'white', alignItems:'center', borderLeftColor:commonColors.theme, borderLeftWidth:isSelected?4:0, height:50, borderBottomColor:commonColors.background, borderBottomWidth:0.5, borderRightColor:commonColors.background, borderRightWidth:0.5}}>
    <Ionicons name={icon} size={16} color={isSelected?commonColors.theme:'#333'} style={{marginLeft:8}}/>
    <Text style={{fontSize:14, color:isSelected?commonColors.theme:'#333', fontWeight:'bold', marginLeft:8}}>{title}</Text>
  </TouchableOpacity>
)

const CustomTextInput=({value, onChange})=>(
  <View style={{borderColor:commonColors.borderColor, borderWidth:1, borderRadius:3, height:50, backgroundColor:'white', width:'100%', marginTop:8, paddingHorizontal:10}}>
    <TextInput
      value={value}
      placeholderTextColor={'grey'}
      autoCorrect={false}
      style={{fontSize:16, flex:1}}
      autoCapitalize="none"
      underlineColorAndroid="transparent"
      onChangeText={(text)=>onChange(text)}
    />
  </View>
)

const SubTitle=({title})=>(
  <View style={{flexDirection:'row', marginTop:15}}>
    <Text style={{fontSize:18, color:'#333'}}>{title}</Text>
  </View>
)

const Button=({icon, title, onPress})=>(
  <TouchableOpacity style={{width:200, backgroundColor:commonColors.theme, height:50, justifyContent:'center', alignItems:'center', flexDirection:'row', marginTop:25, borderRadius:3}}>
    <Ionicons name={icon} size={24} color={'white'} />
    <Text style={{fontSize:20, fontWeight:'bold', color:'white', marginLeft:8}}>{title}</Text>
  </TouchableOpacity>
)

export default class EditProfile extends Component {
  constructor(props) {
      super(props)
      this.state={
        avatar: {uri:'https://placeimg.com/140/140/any'},
        userName: 'Ravi Gupta',
        email: 'ravi@networkhandlers.com',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Nunc fringilla cursus sodales.',

        index: 0,
        switchValue: true
      }
  }

  _handleToggleSwitch = () => this.setState(state => ({
    switchValue: !state.switchValue
  }));

  render() {
      return (
          <View style={styles.container}>
            <Header 
              leftIcon="md-arrow-back"
              leftCallback={()=>{Actions.pop()}}
              title="Profile"
            />
            <ScrollView>
              <View style={{flex:1, backgroundColor:'rgb(186, 194, 213)', alignItems:'center', paddingBottom:20}}>
                <View style={{width:100, height:100, borderRadius:50, borderColor:'white', borderWidth:1, justifyContent:'center', alignItems:'center', marginTop:20}}>
                  {this.state.avatar&&<Image source={this.state.avatar} style={{width:100, height:100, borderRadius:50}}/>}
                  {this.state.avatar==null&&<Ionicons name="ios-person" size={100} color={'white'}/>}
                </View>
                <Text style={{fontSize:24, color:'#333', fontWeight:'bold', marginTop:10}}>{this.state.userName}</Text>
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
              
              <View style={{backgroundColor:commonColors.background, width:'100%', padding:10 }}>
                <SubTitle title="Name"/>
                <CustomTextInput value={this.state.userName} onChange={(text)=>this.setState({userName:text})}/>
                
                <SubTitle title="Email"/>
                <CustomTextInput value={this.state.email} onChange={(text)=>this.setState({email:text})}/>
                
                <SubTitle title="Address"/>
                <CustomTextInput value={this.state.address} onChange={(text)=>this.setState({address:text})}/>
                
                <SubTitle title="City"/>
                <CustomTextInput value={this.state.city} onChange={(text)=>this.setState({city:text})}/>
                
                <SubTitle title="State"/>
                <CustomTextInput value={this.state.state} onChange={(text)=>this.setState({state:text})}/>

                <SubTitle title="Zipcode"/>
                <CustomTextInput value={this.state.zipcode} onChange={(text)=>this.setState({zipcode:text})}/>

                <SubTitle title="Country"/>
                <CustomTextInput value={this.state.country} onChange={(text)=>this.setState({country:text})}/>

                <SubTitle title="Email Notification Alert"/>
                <View style={{alignItems:'flex-start'}}>
                  <Switch
                    onValueChange={this._handleToggleSwitch}
                    value={this.state.switchValue}
                    tintColor={commonColors.theme}
                    thumbTintColor={'white'}
                    onTintColor={commonColors.theme}
                    style={{marginTop:8}}
                  />
                </View>
                
                <Button
                  icon={'md-checkmark'}
                  title={"Save Changes"}
                  onPress={()=>{}}
                />
              </View>
            </ScrollView>
          </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
});