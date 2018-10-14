import React from 'react';
import { AppRegistry, Animated, Image, ScrollView, StyleSheet, Text, TextInput, Button, Alert, Icon, StatusBar, TouchableOpacity, Dimensions, View, Platform} from 'react-native';
import { TabView, TabBar, SceneMap, type Route,
  type NavigationState } from 'react-native-tab-view';
import { Constants } from 'expo';
import firebase from 'firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: Dimensions.get('window').height,      
      screenWidth: Dimensions.get('window').width,
      index: 0,
      routes: [
        { key: '0', title: 'Inicio', icon: '#976dd0' },
        { key: '1', title: 'Alimentos', icon: '#00a6ff' },
        { key: '2', title: 'Rotinas', icon: '#ff8039' },
      ],
    };
  }

  componentWillMount(){

        let config = {
          apiKey: "AIzaSyDXD-picai3jwrFuBhVNewtMk0HDjcek0A",
          authDomain: "justdiet-exc.firebaseapp.com",
          databaseURL: "https://justdiet-exc.firebaseio.com",
          projectId: "justdiet-exc",
          storageBucket: "justdiet-exc.appspot.com",
          messagingSenderId: "508483125958"
        };
        firebase.initializeApp(config);
    }

    


  _renderIcon = ({ route }) => {
     return <Image source={{ uri: this.props.route }} style={{ width: 32, height: 32 }} />;
   }

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(
              inputIndex => (inputIndex === i ? '#333' : '#BBB')
            ),
          });
          return (
            <TouchableOpacity
              style={styles.tabItem} key={route.key}
              onPress={() => props.jumpTo(route.key)}>
              <View style={{ width: 24, height: 24, backgroundColor: route.icon, borderRadius: 4, borderWidth: 1, borderColor: '#FFF'}}></View>
              <Animated.Text style={{ color, marginTop: 3 }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _handleChangeTab = index => this.setState({ index });

  _renderHeader = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    '0': Inicio,
    '1': Alimentos,
    '2': Rotinas,
  });

  render() {
    return (
        <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleChangeTab}
        initialLayout={{ height: 0, width: Dimensions.get('window').width }}
      />
    );
 }
};

  import Inicio from './src/components/Inicio.js';  

  import Rotinas from './src/components/Rotinas.js';

  import Alimentos from './src/components/Alimentos.js';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    tabItem: {
      flex: 1,
      backgroundColor: '#FFF',
      borderLeftWidth: 0.5,
      borderBottomWidth: 1,
      borderColor: '#d6d7da',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 11,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: 'rgba(0, 0, 0, .2)',
      paddingTop: 4.5,
  },
    iconContainer: {
    height: 26,
    width: 26,
  },
  });

AppRegistry.registerComponent('JustDietNative', () => App);
