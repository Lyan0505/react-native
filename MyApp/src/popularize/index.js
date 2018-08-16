import React, { Component } from 'react';
import { 
  Text,
  View,
  Button,
  Alert,
  DatePickerIOS,
  MaskedViewIOS,
  TouchableHighlight,
  Picker,
  Modal,
  StyleSheet
} from 'react-native';


 class MineHome extends Component {
   constructor(props){
     super(props)
     this.state={
       chooseDate:new Date(),
       isShowModal:false
     }
   }

   setDate=(newDate)=>{
     this.setState({
       chooseDate:newDate

     })
   }
   setModalVisible=(visible)=>{
     this.setState({
      isShowModal:visible

     })
   }
  onPressLearnMore=()=>{
    // Alert.alert('这是一个弹窗',{ cancelable: true })
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: true }
    )
  }
 
  
  render() {
    return (
      <View>
        <Text>这些是一些组件：</Text>
        <Button
        onPress={this.onPressLearnMore}
        title="我是一个按钮"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <View>
      <DatePickerIOS date={this.state.chooseDate} onDateChange={this.setDate}/>
      </View>
      <View>
        
      
      <Modal
          animationType="slide"  // 动画类型
          transparent={true}
          visible={this.state.isShowModal}
          
          onRequestClose={() => {
            alert("Modal has been closed."); //会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发
          }}
        >
          <View style={styles.container}>
            <View style={styles.content}> 
              <Text style={{textAlign:'center',fontSize:20,}}>我是一个 向上滑动的的弹窗。。。。。。</Text>
              <TouchableHighlight 
             underlayColor='#fff'
                onPress={() => {
                  this.setModalVisible(!this.state.isShowModal);
                }}
              >
                <Text style={{textAlign:'center',fontSize:20}}>点击隐藏 Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View> 

      <View>
       <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="dad" />
          <Picker.Item label="JavaScript" value="jdasds" />
          <Picker.Item label="Java" value="dsdsdsd" />
          <Picker.Item label="JavaScript" value="jddds" />
          <Picker.Item label="Java" value="javddda" />
          <Picker.Item label="JavaScript" value="jdddcds" />
        </Picker>
      </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    flex:1,
    backgroundColor:'rgba(0,0,0,0.1)',

  },
  content:{
    backgroundColor:'#fff',
    borderRadius:10,
    borderWidth:1,
    height:130,
    marginLeft:30,
    marginRight:30,
    borderColor:'lightgrey',

   
  }

})

export default MineHome
