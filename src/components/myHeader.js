export const Header = ({leftIcon, leftCallback, title})=>(
  <LinearGradient
    colors={[commonColors.lightTheme, commonColors.theme, commonColors.theme]}
    style={{height:70, width:'100%', paddingTop:20, backgroundColor:commonColors.theme, paddingHorizontal:10, justifyContent:'center', alignItems:'center', flexDirection:'row', borderBottomColor:commonColors.darkTheme, borderBottomWidth:1}}
  >
    <TouchableOpacity onPress={()=>leftCallback()}>
      <Ionicons name={leftIcon} size={28} color={'white'}/>
    </TouchableOpacity>
    <Text style={{color:'white', fontSize:20, flex:1, textAlign:'center'}}>{title}</Text>
    <TouchableOpacity onPress={()=>{}}>
      <Ionicons name="ios-options" size={28} color={'white'}/>
    </TouchableOpacity>
  </LinearGradient>
)

export const MyTextInput = ({value, placeholder, icon, onChange, isEncrypt, isRequire})=>(
  <View style={{flexDirection:'row', height:34, alignItems:'center', backgroundColor:'white'}}>
    <Ionicons name={icon} color={'grey'} size={24} style={{marginHorizontal:10, width:20}}/>
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
    {isRequire && value=='' && <Text style={{color:'red', position:'absolute', left:55+placeholder.length*7.5, top:20, fontSize:18}}>*</Text>}
  </View>
)

export const SearchBar = ({value, placeholder, onChange})=>(
  <View style={{height:54, width:'100%', padding:10, backgroundColor:commonColors.theme}}>
    <MyTextInput
      value={value}
      placeholder={placeholder}
      icon="ios-search"
      onChange={(text)=>onChange(text)}
      isEncrypt={false}
    />
  </View>
)

import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import {Ionicons} from '@expo/vector-icons';

import * as commonColors from '../styles/commonColors'
import { screenWidth, screenHeight } from '../styles/commonStyles';
import * as commonStyles from '../styles/commonStyles';

import { LinearGradient } from "expo";

const styles = StyleSheet.create({
})