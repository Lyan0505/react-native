/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Router from './src/index';
import {Platform, StyleSheet, Text, View,Image,TextInput,Button,Alert} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)

  }
  _onPress(){
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { 
        //阻止点击弹窗外 alert 消失
        cancelable: false
       }  
    )
    
  }
  render() {
   
    return (
      <View style={styles.container}>
          <View style={{flex: 1}}>
            <Router/>
          </View>
        
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container2: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: "#F5FCFF"
  },

  thumbnail:{
    width:100,
    height:100
  },
  rightContainer:{
    flex:1,
    textAlign:'center',
    backgroundColor:'#eee'
  },
  text:{
    textAlign:'center'
  }
});
