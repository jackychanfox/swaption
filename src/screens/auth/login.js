import React, { Component } from 'react'

import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import { Actions } from 'react-native-router-flux'
import {Ionicons} from '@expo/vector-icons';

import * as commonColors from '../../styles/commonColors'
import { screenWidth, screenHeight } from '../../styles/commonStyles';
import * as commonStyles from '../../styles/commonStyles';

import { Facebook, Google } from "expo";

const MyButton = ({style, icon, title, onPress})=>(
  <TouchableOpacity activeOpacity={0.8} onPress={()=>onPress()} style={[styles.buttonContainer, style]}>
    {icon && <Ionicons name={icon} size={30} color={'white'} style={{marginRight:10}}/>}
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
)

const Separator = ()=>(
  <View style={{flexDirection:'row', alignItems:'center', marginVertical:20}}>
    <View style={{flex:1, backgroundColor:'rgb(200,200,200)', height:1}}/>
    <Text style={{color:'grey', fontSize:12, marginHorizontal:5}}>or, fill out with</Text>
    <View style={{flex:1, backgroundColor:'rgb(200,200,200)', height:1}}/>
  </View>
)

const MyTextInput = ({value, placeholder, icon, onChange, isEncrypt})=>(
  <View style={{flexDirection:'row', height:60, alignItems:'center'}}>
    <Ionicons name={icon} color={'grey'} size={30} style={{marginHorizontal:10, width:20}}/>
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor={'grey'}
      autoCorrect={false}
      style={{fontSize:16, flex:1}}
      autoCapitalize="none"
      underlineColorAndroid="transparent"
      secureTextEntry={isEncrypt}
      onChangeText={(text)=>onChange(text)}
    />
    {value=='' && <Text style={{color:'red', position:'absolute', left:55+placeholder.length*7.5, top:20, fontSize:18}}>*</Text>}
  </View>
)

export default class Login extends Component {
  constructor(props) {
      super(props)
      this.state={
        email:'',
        password:'',
      }
  }

  Login(){
    Actions.Main()
  }

  ForgotPassword(){
    
  }

  LoginWithFacebook = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '1201211719949057', // Replace with your own app id in standalone app
        { permissions: ['public_profile'] }
      );

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const profile = await response.json();
          Alert.alert(
            'Logged in!',
            `Hi ${profile.name}!`,
          );
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
      Alert.alert(
        'Oops!',
        'Login failed!',
      );
    }
  };

  LoginWithGoogle = async () => {
    try {
      const { type, user } = await Google.logInAsync({
        androidStandaloneAppClientId: '<ANDROID_CLIENT_ID>',
        iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
        androidClientId: '603386649315-9rbv8vmv2vvftetfbvlrbufcps1fajqf.apps.googleusercontent.com',
        iosClientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      });

      switch (type) {
        case 'success': {
          Alert.alert(
            'Logged in!',
            `Hi ${user.name}!`,
          );
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
      Alert.alert(
        'Oops!',
        'Login failed!',
      );
    }
  };

  render() {
      return (
          <View style={styles.container}>
            <MyButton 
              style={{backgroundColor:commonColors.facebook}}
              icon="logo-facebook"
              onPress={()=>this.LoginWithFacebook()}
              title="Login With Facebook"
            />
          
            <MyButton 
              style={{backgroundColor:commonColors.google}}
              icon="logo-google"
              onPress={()=>this.LoginWithGoogle()}
              title="Login With Google"
            />
            <Separator/>
            
            <View style={styles.inputContainer}>
              <MyTextInput
                value={this.state.email}
                isEncrypt={false}
                placeholder="Username or Email"
                icon={'ios-person-outline'}
                onChange={(email)=>this.setState({email})}
              />
              <View style={styles.inputSeparator}/>
              <MyTextInput
                value={this.state.password}
                icon={'ios-lock-outline'}
                placeholder="Password"
                isEncrypt={true}
                onChange={(password)=>this.setState({password})}
              />
            </View>
            
            <MyButton
              onPress={()=>this.Login()}
              title="Login"
            />
            
            <View style={{width:'100%', alignItems:'center'}}>
              <TouchableOpacity onPress={()=>this.ForgotPassword} style={{marginTop:20, marginBottom:40}}>
                <Text style={styles.forgotText}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
            
          </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical:10,
    },
    buttonContainer: {
      height:56, 
      width:'100%', 
      backgroundColor:commonColors.theme, 
      marginTop:20, 
      borderRadius:4,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row'
    },
    buttonText:{
      fontSize:21, 
      color:'white',
      fontWeight:'bold'
    },
    inputContainer:{
      borderRadius:4, 
      borderColor:'grey', 
      borderWidth:1
    },
    inputSeparator:{
      height:1, 
      width:'100%', 
      backgroundColor:'grey'
    },
    forgotText:{
      color:commonColors.theme, 
      fontSize:18, 
      fontWeight:'bold'
    }
});