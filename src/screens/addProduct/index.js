
import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView, 
    TextInput,
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import {Ionicons} from '@expo/vector-icons';
import KeyboardSpacer from "react-native-keyboard-spacer"

import * as commonColors from '../../styles/commonColors'
import { screenWidth, screenHeight } from '../../styles/commonStyles';
import * as commonStyles from '../../styles/commonStyles';

import {Header, SearchBar} from '../../components/myHeader'

const MethodOption=({isSelected, icon, title, onPress})=>(
  <TouchableOpacity style={{paddingRight:10, paddingTop:10, flex:1}} onPress={()=>onPress()} activeOpacity={0.8}>
    <View style={{borderWidth:3, borderColor:isSelected?commonColors.theme:'#dde', alignItems:'center', justifyContent:'center', borderRadius:5, backgroundColor:isSelected?'rgb(240, 249, 255)':'rgb(242, 246, 249)', height:80}}>
      <Ionicons name={icon} size={28} color={isSelected?commonColors.theme:'rgb(127, 208, 199)'}/>
      <Text style={{fontSize:16, fontWeight:'bold', color:isSelected?commonColors.theme:'rgb(127, 208, 199)'}}>{title}</Text>
    </View>
    {isSelected&&<View style={{position:'absolute', right:0, top:0, width:30, height:30, borderRadius:15, justifyContent:'center', alignItems:'center', backgroundColor:commonColors.theme}}>
      <Ionicons name="ios-checkmark" size={28} color={'white'}/>
    </View>}
  </TouchableOpacity>
)

const SubTitle=({title})=>(
  <View style={{flexDirection:'row', marginTop:15}}>
    <Text style={{fontSize:18, color:'grey'}}>{title}</Text>
    <Text style={{fontSize:14, color:'red', marginLeft:5}}>*</Text>
  </View>
)

const UploadView=({image})=>(
  <TouchableOpacity activeOpacity={0.6} style={{borderStyle:'dashed', borderWidth:2, borderColor:'#dde', borderRadius:5, backgroundColor:'rgb(240, 249, 255)', width:200, height:200, marginTop:10, justifyContent:'center', alignItems:'center'}}>
    <Ionicons name="md-add" color={commonColors.theme} size={40}/>
    <Text style={{color:'#444', fontSize:30}}>Browse</Text>
    <Text style={{fontSize:13, color:'grey', textAlign:'center', marginTop:5}}>Images must be in PNG or JPG format and under 5mb</Text>
  </TouchableOpacity>
)

const CustomTextInput=({title, onChange})=>(
  <View style={{borderColor:commonColors.borderColor, borderWidth:1, borderRadius:3, height:50, backgroundColor:'white', width:'100%', marginTop:8, paddingHorizontal:10}}>
    <TextInput
      value={title}
      placeholderTextColor={'grey'}
      autoCorrect={false}
      style={{fontSize:16, flex:1}}
      autoCapitalize="none"
      underlineColorAndroid="transparent"
      onChangeText={(text)=>onChange(text)}
    />
  </View>
)

const CheckBox = ({isChecked, title, onChange})=>(
  <TouchableOpacity onPress={()=>onChange()} style={{marginTop:10, flexDirection:'row', alignItems:'center'}}>
    <Ionicons name={isChecked?'ios-checkbox-outline':'ios-square-outline'} size={20} color={commonColors.theme}/>
    <Text style={{color:commonColors.theme, fotnSize:14, fontWeight:'bold', marginLeft:8}}>{title}</Text>
  </TouchableOpacity>
)

const Button=({icon, title, onPress})=>(
  <TouchableOpacity style={{backgroundColor:commonColors.theme, height:50, width:120, justifyContent:'center', alignItems:'center', flexDirection:'row', marginTop:25, borderRadius:3}}>
    <Ionicons name={icon} size={24} color={'white'} />
    <Text style={{fontSize:20, fontWeight:'bold', color:'white', marginLeft:8}}>{title}</Text>
  </TouchableOpacity>
)

export default class AddProdcut extends Component {
    constructor(props) {
        super(props)
        this.state={
          swapping:true,
          selling: false,
          free: false,
          image: null,
          title: '',
          swapOffer: true,
        }
    }

    render() {
        return (
            <View style={styles.container}>
              <Header 
                leftIcon="md-menu"
                leftCallback={()=>{}}
                title="Home"
              />
              
              <SearchBar
                value={this.state.value}
                placeholder="Search"
                onChange={(value)=>this.setState({value})}
              />
              
              <ScrollView>
                <View style={{padding:10}}>
                  <Text style={{fontSize:28, color:'grey', fontWeight:'bold'}}>What are you Swapping?</Text>
                  <View style={{width:'100%', height:1, backgroundColor:'#ccc', marginVertical:8}}/>

                  <SubTitle title="Choose your option"/>
                  <View style={{flexDirection:'row', marginTop:5}}>
                    <MethodOption
                      isSelected={this.state.swapping}
                      icon={'ios-home'}
                      title="Swapping"
                      onPress={()=>this.setState({swapping:!this.state.swapping})}
                    />
                    <View style={{width:8}}/>
                    <MethodOption
                      isSelected={this.state.selling}
                      icon={'ios-home'}
                      title="Selling"
                      onPress={()=>this.setState({selling:!this.state.selling})}
                    />
                    <View style={{width:8}}/>
                    <MethodOption
                      isSelected={this.state.free}
                      icon={'ios-home'}
                      title="Free"
                      onPress={()=>this.setState({free:!this.state.free})}
                    />
                  </View>
                  
                  <SubTitle title="Upload photo of product"/>
                  <UploadView image={this.state.image}/>
                  
                  <SubTitle title="Title"/>
                  <CustomTextInput
                    value={this.state.title}
                    onChange={(title)=>this.setState({title})}
                  />
                  
                  <SubTitle title="Category"/>
                  <CustomTextInput
                    value={this.state.category}
                    onChange={(category)=>this.setState({category})}
                  />
                  
                  <Text style={{fontSize:28, color:'grey', fontWeight:'bold', marginTop:20}}>Swapping details</Text>
                  <View style={{width:'100%', height:1, backgroundColor:'#ccc', marginVertical:8}}/>
                  
                  <SubTitle title="Swap value"/>
                  <CustomTextInput
                    value={this.state.swapValue}
                    onChange={(swapValue)=>this.setState({swapValue})}
                  />
                  
                  <Text style={{fontSize:11, color:'grey', marginTop:5}}>Make sure that you provide the price which is relevant to the item condition.</Text>
                  
                  <SubTitle title="Want to swap with"/>
                  <CustomTextInput
                    value={this.state.swapWith}
                    onChange={(swapWith)=>this.setState({swapWith})}
                  />
                  
                  <SubTitle title="I would swap for"/>
                  <CustomTextInput
                    value={this.state.swapFor}
                    onChange={(swapFor)=>this.setState({swapFor})}
                  />
                  <Text style={{fontSize:11, color:'grey', marginTop:5}}>By detailing here if there is anything specific you want, it will make it easier for other users to fill your needs.\nIf there is nothing specific you want, by adding information about your interests you may get offered items that you find more interesting.</Text>
                  <CheckBox
                    isChecked={this.state.swapOffer}
                    title="I'm really open to any swap offer"
                    onChange={()=>this.setState({swapOffer:!this.state.swapOffer})}
                  />
                  
                  <Button
                    icon={'md-checkmark'}
                    title={"Save"}
                    onPress={()=>{}}
                  />
                </View>
              </ScrollView>
              <KeyboardSpacer/>
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