import React, { Component } from 'react';
import Swiper from 'react-native-swiper';

import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    Image,
    Dimensions,
    Toast,
    TouchableOpacity
} from 'react-native';

import AlbumList from '../albumList/index'

type Props = {};

export default class App extends Component<Props> {
    static navigationOptions = {
        title: '首页',
        headerTitle:'shoueye'


    };
    _onPress=()=> {
        console.log(this.props)
        const { navigate } = this.props.navigation;
        // this.props.navigator.push({
        // title: 'dsds',
        // component: 'AlbumList',
        // })
        navigate('AlbumList', { name: 'AlbumList',headerTitle:'上个页面传的标题' })
    }
    render() {
        console.log(this.props)
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
            <Swiper style={styles.wrapper} height={100} horizontal={true} autoplay autoplayTimeout={3}>  
                <View style={styles.silder1}>
                <Image
                    style={{ height: 300 }}
                    source={{ uri: 'http://fdfs.xmcdn.com/group24/M0A/9F/EB/wKgJMFhJCUSzPLqyAAL6XsL-fnQ714_android_small.jpg' }}
                    />
                </View>
                <View style={styles.silder2}>
                <Image
                    style={{ height: 300 }}
                    source={{ uri: 'http://fdfs.xmcdn.com/group26/M0A/80/93/wKgJRlkBY9fiDEjaAAMnZ66V_ZE539_android_small.jpg' }}
                    />
                </View>
                <View style={styles.silder3}>
                <Image
                    style={{ height: 300 }}
                    source={{ uri: 'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg' }}
                    />
                </View>
            </Swiper>

            {/* 列表 */}
            
            <View style={styles.listtitle}>
                <Text>热门专辑</Text>
                <Text>更多</Text>
            </View>
            <View style={styles.listcontent}>
          
              <TouchableOpacity onPress={this._onPress}>
                <View style={{ height: 100, backgroundColor: 'skyblue'}} style={styles.item}>
                    <Text>热门</Text>  
                </View>
              </TouchableOpacity>
              <View  style={styles.item}>
                  <Text>热门</Text>
              </View>
              <View style={styles.item}>
                  <Text>热门</Text>
              </View>
              <View style={styles.item}>
                  <Text>热门</Text>
              </View>
              <View style={styles.item}>
                  <Text style={{textAlign:'center'}}>热门</Text>
              </View>
           
            </View>
            </View>
        );
    }
}

const styles =StyleSheet.create({
    container:{
        flex: 1,
    },
    wrapper:{

    },
    silder1:{
       flex:1,
       backgroundColor:'#9DD6EB',
    },
    silder2:{
        flex:1,
        backgroundColor:'#eee',
    },
    silder3:{
        flex:1,
        backgroundColor:'red'
    },
    listtitle:{
        backgroundColor:'#fff',
        height:40,
        lineHeight:40,
        backgroundColor:'#fff',
        textAlignVertical:'center',
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-between'
        
    },
    listcontent:{
        flex:1,
        flexDirection: 'row',
        backgroundColor:'#fff',
        width: Dimensions.get('window').width,
        flexWrap: 'wrap',
        justifyContent:'space-around',
        textAlignVertical:'center',
        textAlign:'center',
        // paddingLeft: 10,
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
        marginBottom:50,

    },
   item:{
       width:100,
       height:100,
       backgroundColor:'pink',
       borderColor: '#333',
       marginBottom: 10,
       borderWidth:2,
       borderColor:'#00ff00',
       borderStyle:'dotted',
       textAlign:'center',
       textAlignVertical:'center',
       justifyContent:'center',
       

      


   }


})