
import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import {Ionicons} from '@expo/vector-icons';

import * as commonColors from '../../styles/commonColors'
import { screenWidth, screenHeight } from '../../styles/commonStyles';
import * as commonStyles from '../../styles/commonStyles';

import {Header, SearchBar} from '../../components/myHeader'


export default class Prodcuts extends Component {
    constructor(props) {
        super(props)
        this.state={
          swapping:true,
          selling: false,
          free: false,
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