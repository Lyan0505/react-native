import {createStackNavigator,TabNavigator} from 'react-navigation';

import HomePage from './home/index';
import TaskPage from './popularize/index';
import Mine from './mine/index';
import AlbumList from './albumList/index';
import ComponentsPage from './ComponentsPage/index'

export const TabNav = TabNavigator(
  {
      Home: {
          screen: HomePage,
      },
      Task: {
          screen: TaskPage,
          navigationOptions: {
            title: '专辑列表',  
            tabBarLabel: "专辑列表", 
          }
      },
      Components:{
          screen:ComponentsPage,
          navigationOptions:{
              title:'三方组件库',
              tabBarLabel:'第三方'
          }
      },
      
      Mine: {
          screen: Mine,
          navigationOptions:({navigation})=>( {
            headerTitle: "个人中心",
            tabBarLabel: "我的",
          })
      }
  },
  {
      tabBarOptions: {
          //当前选中的tab bar的文本颜色和图标颜色
          activeTintColor: '#4BC1D2',
          //当前未选中的tab bar的文本颜色和图标颜色
          inactiveTintColor: '#000',
          //是否显示tab bar的图标，默认是false
          showIcon: false,
          //showLabel - 是否显示tab bar的文本，默认是true
          showLabel: true,
          //是否将文本转换为大小，默认是true
          upperCaseLabel: false,
          //material design中的波纹颜色(仅支持Android >= 5.0)
          pressColor: '#788493',
          //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
          pressOpacity: 0.8,
          //tab bar的样式
          style: {
              backgroundColor: '#fff',
              paddingBottom: 1,
              borderTopWidth: 0.2,
              paddingTop:1,
              borderTopColor: '#ccc',
          },
          //tab bar的文本样式
          labelStyle: {
              fontSize: 11,
              margin: 1
          },
          //tab 页指示符的样式 (tab页下面的一条线).
          indicatorStyle: {height: 0},
      },
      //tab bar的位置, 可选值： 'top' or 'bottom'
      tabBarPosition: 'bottom',
      //是否允许滑动切换tab页
      swipeEnabled: true,
      //是否在切换tab页时使用动画
      animationEnabled: true,
      //是否懒加载
      lazy: true,
      //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
      backBehavior: 'none',
  }
);



// 注册所有的页面
export default createStackNavigator({
  Main: {
    screen: TabNav,
  },
  AlbumList: {
    screen: AlbumList,
    navigationOptions: () => ({
        title: `A`,
        headerBackTitle: null
      }),
  }
},
{
 
  headerMode: 'screen',  // 标题导航
  initialRouteName: 'Main', // 默认先加载的页面组件
  mode: 'card'       // 定义跳转风格(card、modal)
} 
)


// import React from 'react';
// import { Text, View, Button } from 'react-native';
// import { createBottomTabNavigator, createStackNavigator} from 'react-navigation';

// class HomeScreen extends React.Component {
//     static navigationOptions = {
//         title: '首页',
//         headerTitle:'首页头部'
//       };
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>我是首页!</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//     static navigationOptions = {
//         title: '个人中心',
//       };
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>我是个人中心!</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//     static navigationOptions = {
//         title: '详情的头部',
//       };
//     render() {
//       return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>Details!</Text>
//         </View>
//       );
//     }
//   }

  

// export const TabNav = createBottomTabNavigator(
//   {
//     Home: HomeScreen,
//     // Settings: SettingsScreen,
//     Settings: {
//         screen: SettingsScreen,
//         navigationOptions:({navigation})=>( {
//         headerTitle: "个人中心",
//         tabBarLabel: "我的",
//         })
//     }
//   },
 
// );

// export default createStackNavigator({
//     Home: TabNav,  // 输出的是 底部tab
//     Details: DetailsScreen, // 不在tab 上的路由
//   });

  





