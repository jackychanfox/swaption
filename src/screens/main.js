
import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    Platform,
    TouchableOpacity,
    Alert,
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import {Ionicons} from '@expo/vector-icons';

import * as commonColors from '../styles/commonColors'
import { screenWidth, screenHeight } from '../styles/commonStyles';
import * as commonStyles from '../styles/commonStyles';

import Home from './home'
import Profile from './profile'
import AddProduct from './addProduct'
import Products from './products'
import Chat from './chat'

import {TabView} from '../components/myTabView'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state={
          index: 1,
        }
        this.tabItems=[
            {scene:<Home/>, title:'Home', icon:'md-home'},
            {scene:<Profile/>, title:'Profile', icon:'md-person'},
            {scene:<AddProduct/>, title:'', icon:'md-add', iconSize:36, top:-10},
            {scene:<Products/>, title:'Products', icon:'md-shuffle'},
            {scene:<Chat/>, title:'Chat', icon:'md-chatbubbles'},
        ]
    }

    render() {
        return (
            <View style={styles.container}>
              <TabView
                index={this.state.index}
                tabItems={this.tabItems}
                onPressItem={(index)=>{this.setState({index})}}
              />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
});