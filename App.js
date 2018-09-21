import React from 'react';
import { AppRegistry, Image, ScrollView, StyleSheet, Text, TextInput, Button, Alert, StatusBar, TouchableOpacity, Dimensions, View, Platform} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Constants } from 'expo';

import TabBarMenu from './src/components/StatusB.js';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: Dimensions.get('window').height,      
      screenWidth: Dimensions.get('window').width,
      index: 0,
      routes: [
        { key: '0', title: 'Inicio' },
        { key: '1', title: 'Alimentos' },
        { key: '2', title: 'Rotinas' },
      ],
    };
  }


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
        style={{ marginTop: Constants.statusBarHeight }}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleChangeTab}
        initialLayout={{ height: 0, width: Dimensions.get('window').width, marginTop: 20 }}
      />
    );
 }
};

  import Inicio from './src/components/Inicio.js';  

  const Rotinas = () => (
    <ScrollView><Text>aaaaaaa</Text></ScrollView>
  );

  import Alimentos from './src/components/Alimentos.js';

AppRegistry.registerComponent('JustDietNative', () => App);
