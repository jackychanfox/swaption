import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';


import {Actions, ActionConst, Scene, Router} from 'react-native-router-flux'

import Auth from './src/screens/auth'
import Main from './src/screens/main'

import EditProfile from './src/screens/profile/editProfile'
import MyListings from './src/screens/profile/myListings'
import MyLikes from './src/screens/profile/myLikes'

export default class App extends Component {
  render() {
    const scenes = Actions.create(
            <Scene key="root">
                <Scene key="Auth" component={Auth} type={ActionConst.RESET} hideNavBar/>
                <Scene key="Main" component={Main}  type={ActionConst.RESET} hideNavBar/>
                
                <Scene key="EditProfile" component={EditProfile} hideNavBar/>
                <Scene key="MyListings" component={MyListings} hideNavBar/>
                <Scene key="MyLikes" component={MyLikes} hideNavBar/>
            </Scene>)
    return (
      <Router hideNavBar scenes={scenes}/>
    );
  }
}