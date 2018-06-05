
import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert,
    KeyboardAvoidingView,
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import {Ionicons} from '@expo/vector-icons';

import * as commonColors from '../../styles/commonColors'
import { screenWidth, screenHeight } from '../../styles/commonStyles';
import * as commonStyles from '../../styles/commonStyles';

import Login from './login'
import Register from './register'

const TabView = ({index, onChange, titles, scenes})=>(
  <View>
    <View style={{flexDirection:'row'}}>
      {titles.map((item, idx)=>{
        let borderBottomColor=(index==idx)?commonColors.theme:'rgb(200,200,200)'
        let color=(index==idx)?commonColors.theme:'grey'
        return(
          <TouchableOpacity onPress={()=>onChange(idx)} key={idx} style={{flex:1, borderBottomWidth:5, borderBottomColor}}>
            <View style={{height:34, width:'100%', alignItems:'center', justifyContents:'center'}}>
              <Text style={{fontSize:18, color}}>{item}</Text>
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
    {scenes[index]}
  </View>
)

export default class Auth extends Component {
    constructor(props) {
        super(props)
        this.state={
          index: 0,
        }
    }
    
    componentDidMount(){
    }
    
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <ScrollView>
                <View style={{paddingHorizontal:70, marginTop:50}}>
                  <Image source={commonStyles.logo} style={{height:200, width:'100%', resizeMode:'contain'}}/>
                </View>
                <View style={{paddingHorizontal:20}}>
                  <TabView
                    index={this.state.index}
                    onChange={(index)=>this.setState({index})}
                    titles={['Login', 'Register']}
                    scenes={[<Login/>, <Register/>]}
                  />
                </View>
                
              </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
});