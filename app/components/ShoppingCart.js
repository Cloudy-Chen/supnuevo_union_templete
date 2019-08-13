/**
 * ShoppingCart.js
 */

import React, {Component} from 'react';
import {ScrollView, View,StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../resources/colors';
import { SCREEN_WIDTH} from '../utils/tools';
import {Badge} from "react-native-elements";

export default class ShoppingCart extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state={
    }
  }

  render() {
    const cartList = this.props.cartList;
    return(
        <View style={styles.container}>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={true}
        >
          {this._renderCartItems(cartList)}
        </ScrollView>
        </View>
    )
  }

  _renderCartItems(cartList){
    var cartItemList = [];
    cartList.map((item,i)=>{
      cartItemList.push
      (
          <TouchableOpacity
              key={i}
              onPress={() => {}}
              onLongPress={() => {}}>
            <View style={styles.picStyle}>
              <Badge value="2" status="error" containerStyle={{ position: 'absolute', top: -5, right: -5 }}/>
              <Image resizeMode="contain" style={{width: 100, height: 80,}} source={{uri: item.thumburl}}/></View>
          </TouchableOpacity>
      );
    })
    return cartItemList;
  };

}

var styles = StyleSheet.create({
  container:{
    height:140,
    width:SCREEN_WIDTH,
  },
  IconContainerStyle:{
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainerStyle:{
    flex:1,
    justifyContent:'flex-start',
    alignItems: 'center',
  },
  textStyle:{
    color:'#fff',
    fontSize:18
  },
  picStyle: {
    width: 120,
    height: 120,
    margin:5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.8,
    borderColor: colors.primaryGrayLight,
  },
})

