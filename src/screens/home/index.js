
import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Image
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import {Ionicons} from '@expo/vector-icons';

import * as commonColors from '../../styles/commonColors'
import { screenWidth, screenHeight } from '../../styles/commonStyles';
import * as commonStyles from '../../styles/commonStyles';

import {Header, SearchBar} from '../../components/myHeader'

const TabView = ({index, onChange, titles})=>(
  <View style={{backgroundColor:'white', paddingTop:10, margin:10}}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {titles.map((item, idx)=>{
        let borderBottomColor=(index==idx)?commonColors.theme:'rgb(200,200,200)'
        let color=(index==idx)?commonColors.theme:'#333'
        return(
          <TouchableOpacity activeOpacity={0.8} onPress={()=>onChange(idx)} key={idx} style={{paddingHorizontal:20, borderBottomWidth:5, borderBottomColor}}>
            <View style={{height:28, width:'100%', alignItems:'center'}}>
              <Text style={{fontSize:12, color}}>{item}</Text>
            </View>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  </View>
)

const INTERVAL = 15
const WIDTH = (screenWidth-20-INTERVAL)/2
const HEIGHT = 240

const ProductList =({products, onPress})=>(
  <ScrollView style={{paddingHorizontal:10}}>
    <View style={{height:HEIGHT*parseInt(products.length/2), width:'100%'}}>
      {products.map((item, index)=>{
        let left=(index%2==0)?0:WIDTH+INTERVAL
        let top=parseInt(index/2)*(HEIGHT+INTERVAL)
        return (
          <TouchableOpacity onPress={()=>onPress(item, index)} key={index} style={{position:'absolute', left, top, width:WIDTH, height:HEIGHT, backgroundColor:'white', elevation:2, shadowRadius:2, shadowColor:'black', shadowOffset:{width:1, height:1}, shadowOpacity:0.5}}>
            <View style={{flex:1}}>
              <Image source={item.image} style={{flex:1}}/>
              <View style={{flexDirection:'row', position:'absolute', left:0, bottom:0, width:'100%', height:30, backgroundColor:'rgba(0, 0, 0, 0.7)', paddingLeft:10, alignItems:'center'}}>
                <Ionicons name="ios-home" size={18} color={'white'}/>
                <Text style={{color:'white', fontSize:13, marginLeft:5}}>{item.group}</Text>
              </View>
            </View>
            <View style={{backgroundColor:'white', width:'100%', padding:8}}>
              <Text style={{fontSize:13, color:commonColors.theme, fontWeight:'bold'}}>{item.productName}</Text>
              <View style={{flexDirection:'row', marginTop:5}}>
                <Image source={item.avatar} style={{width:20, height:20, borderRadius:10}}/>
                <Text style={{fontSize:11, color:commonColors.theme, marginLeft:5}}>{item.userName}</Text>
              </View>
              <View style={{position:'absolute', right:8, bottom:8, width:24, height:24, borderRadius:12, backgroundColor:'#ccc', justifyContent:'center', alignItems:'center'}}>
                <Ionicons name="ios-paper-plane-outline" size={15} color={commonColors.theme}/>
              </View>
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
  </ScrollView>
)

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state={
          value:'',
          index: 0,
          categories: ['hello', 'everybody', 'how', 'are', 'you', 'everybody', 'how', 'are', 'you'],
          products:[
            {image:{uri:'https://placeimg.com/140/140/any'},avatar:{uri:'https://placeimg.com/50/50/any'}, group:'Clothing & Shoes', productName:'Jeans on Sale', userName:'Ravi Gupta'},
            {image:{uri:'https://placeimg.com/140/140/any'},avatar:{uri:'https://placeimg.com/50/50/any'}, group:'Clothing & Shoes', productName:'Jeans on Sale', userName:'Ravi Gupta'},
            {image:{uri:'https://placeimg.com/140/140/any'},avatar:{uri:'https://placeimg.com/50/50/any'}, group:'Clothing & Shoes', productName:'Jeans on Sale', userName:'Ravi Gupta'},
            {image:{uri:'https://placeimg.com/140/140/any'},avatar:{uri:'https://placeimg.com/50/50/any'}, group:'Clothing & Shoes', productName:'Jeans on Sale', userName:'Ravi Gupta'},
            {image:{uri:'https://placeimg.com/140/140/any'},avatar:{uri:'https://placeimg.com/50/50/any'}, group:'Clothing & Shoes', productName:'Jeans on Sale', userName:'Ravi Gupta'},
            {image:{uri:'https://placeimg.com/140/140/any'},avatar:{uri:'https://placeimg.com/50/50/any'}, group:'Clothing & Shoes', productName:'Jeans on Sale', userName:'Ravi Gupta'},
            {image:{uri:'https://placeimg.com/140/140/any'},avatar:{uri:'https://placeimg.com/50/50/any'}, group:'Clothing & Shoes', productName:'Jeans on Sale', userName:'Ravi Gupta'},
            {image:{uri:'https://placeimg.com/140/140/any'},avatar:{uri:'https://placeimg.com/50/50/any'}, group:'Clothing & Shoes', productName:'Jeans on Sale', userName:'Ravi Gupta'},
            {image:{uri:'https://placeimg.com/140/140/any'},avatar:{uri:'https://placeimg.com/50/50/any'}, group:'Clothing & Shoes', productName:'Jeans on Sale', userName:'Ravi Gupta'},
            {image:{uri:'https://placeimg.com/140/140/any'},avatar:{uri:'https://placeimg.com/50/50/any'}, group:'Clothing & Shoes', productName:'Jeans on Sale', userName:'Ravi Gupta'},
            
          ]
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
              
              <TabView
                index={this.state.index}
                onChange={(index)=>this.setState({index})}
                titles={this.state.categories}
              />
              
              <ProductList
                onPress={(item, index)=>{}}
                products={this.state.products}
              />
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