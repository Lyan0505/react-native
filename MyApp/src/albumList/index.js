import React, { Component } from 'react';
import { 
  Text,
   View,
   FlatList,
   StyleSheet,
   Image
  } from 'react-native';


 class AlbumList extends Component {
  static navigationOptions=({navigation, screenProps})=>({
    //设置title
    title: navigation.state.params.headerTitle,
    // 设置有点 文案以及事件
    headerRight: (
      <Text style={{color: '#333', marginRight: 13}}
            onPress={() => navigation.state.params ? navigation.state.params.menuClick() : null}>添加
      </Text>),
    // 可以隐藏 左边的 返回按钮
    //  headerLeft: (<View/>),
   // headerRight: (< View/>) ===> 设置顶部导航栏右边的视图 和 解决当有返回箭头时，文字不居中

});
componentDidMount() {
  // 通过在componentDidMount里面设置setParams
  this.props.navigation.setParams({
      menuClick: this.menuClick,
  });
}
  
  render() {
    return (
    <View>
       <FlatList style={styles.listContent}
            data={[
                {key: '热门'},
                {key: '有声小说'},
                {key: '相声'},
                {key: '音乐'},
                {key: '娱乐'},
                {key: '儿童'},
                {key: '教育'},
                {key: '生活'},
              ]}
              renderItem={({item})=><View style={styles.listItem}>
                  <Image
                    style={{ height: 100 ,width:100}}
                    source={require('../assest/img/img_null.png')}
                    />
                  <Text style={styles.listText}>{item.key}</Text>
              </View>
              }
              />
      </View>
    );
  }
}

const styles= StyleSheet.create({
  listContent:{
    // flexDirection: 'row',

  },
  listItem:{
    color:'#333',
    backgroundColor:'#fff',
    marginBottom:10,
    flexDirection:'row',
    alignItems:'center'
    
  },
  listText:{
    color:'#333',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
    alignItems: 'center',

  }
})

export default AlbumList
