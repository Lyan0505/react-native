import React, { Component } from 'react';
import { Text, View ,SectionList,StyleSheet } from 'react-native';


 class MineHome extends Component {
  
  render() {
    return (
      <View>
        <SectionList
          renderItem={({ item, index, section }) => <Text  style={styles.item}  key={index}>{item}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.title}>{title}</Text>
          )}
          sections={[
            { title: "Title1", data: ["账单", "总资产管","余额","余额宝","银行卡"] },
            { title: "Title2", data: ["item3", "item4"] },
            { title: "Title3", data: ["账单", "总资产管","余额","余额宝","银行卡"] }
          ]}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  title:{
    textAlign:'center',
    marginBottom:10,
    marginTop: 10,

  },
  item:{
    backgroundColor:'#fff',
    marginBottom: 10,
    padding: 20,
  }

})

export default MineHome
