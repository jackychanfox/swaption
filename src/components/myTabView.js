export const Footer=({index, tabItems, onPressItem})=>(
  <View style={styles.footerContainer}>
    <View style={styles.outCircle}/>
    <View style={styles.inCircle}/>
    <View style={styles.footerBody}>
      {tabItems.map(({icon, title, iconSize, top}, idx)=>(
        <TouchableOpacity onPress={()=>onPressItem(idx)} key={idx} style={styles.itemContainer}>
          <Ionicons name={icon} size={iconSize?iconSize:15} color={index==idx?commonColors.theme:'rgb(166, 171, 186)'} style={{marginTop:top?top:0}}/>
          <Text style={{color:index==idx?commonColors.theme:'rgb(166, 171, 186)', fontSize:11}}>{title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
)

export const TabView = (props)=>(
  <View style={{flex:1}}>
    {props.tabItems[props.index].scene}
    <View style={{height:FOOTER_TAB_HEADER}}/>
    <Footer {...props}/>
  </View>
)









import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import {Ionicons} from '@expo/vector-icons';

import * as commonColors from '../styles/commonColors'
import { screenWidth, screenHeight } from '../styles/commonStyles';
import * as commonStyles from '../styles/commonStyles';

const FOOTER_HEIGHT = 64
const FOOTER_TAB_HEADER = 35
const CIRCLE_RADIUS = 39
const CIRCLE_BORDER = 4


const styles = StyleSheet.create({
    footerContainer:{
      position:'absolute', 
      bottom:0, 
      left:0, 
      height:FOOTER_HEIGHT, 
      width:'100%', 
      backgroundColor:'transparent'
    },
    outCircle:{
      position:'absolute', 
      left:screenWidth/2-CIRCLE_RADIUS, 
      top:0, 
      width:CIRCLE_RADIUS*2, 
      height:CIRCLE_RADIUS*2, 
      borderRadius:CIRCLE_RADIUS, 
      backgroundColor:'rgba(100, 100, 100, 0.6)'
    },
    inCircle:{
      left:screenWidth/2-CIRCLE_RADIUS+CIRCLE_BORDER, 
      top:CIRCLE_BORDER, 
      width:2*(CIRCLE_RADIUS-CIRCLE_BORDER), 
      height:2*(CIRCLE_RADIUS-CIRCLE_BORDER), 
      borderRadius:CIRCLE_RADIUS-CIRCLE_BORDER, 
      backgroundColor:commonColors.tabColor
    },
    footerBody:{
      flexDirection:'row', 
      position:'absolute', 
      bottom:0, 
      left:0, 
      height:FOOTER_TAB_HEADER, 
      width:'100%', 
      backgroundColor:commonColors.tabColor
    },
    itemContainer:{
      flex:1, 
      justifyContent:'center', 
      alignItems:'center'
    }
});