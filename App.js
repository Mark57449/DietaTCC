import React from 'react';
import { AppRegistry, Image, ScrollView, StyleSheet, Text, TextInput, Button, Alert, TouchableOpacity, Dimensions, View, Platform} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
/*
var React = require('react');
var Text = require('react-native').Text;
var View = require('react-native').View;
var Button = require('react-native').Button;
var AppRegistry = require('react-native').AppRegistry;
var StyleSheet = require('react-native').StyleSheet;
var ScrollView = require('react-native').ScrollView;
var TextInput = require('react-native').TextInput;
var Alert = require('react-native').Alert;

var
*/

let scrollYPos = 0;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: Dimensions.get('window').height,      
      screenWidth: Dimensions.get('window').width,
      index: 0,
      routes: [
        { key: '0', title: 'Inicio' },
        { key: '1', title: 'Rotinas' },
        { key: '2', title: 'Alimentos' },
      ],
    };
  }

  scrollToB = () => {
    scrollYPos = this.state.screenHeight * 1;
    this.scroller.scrollTo({x: 0, y: scrollYPos});
  };
  scrollToC = () => {
    scrollYPos = this.size.screenHeight * 2;
    this.scroller.scrollTo({x: 0, y: scrollYPos});
  };
  scrollToTop = () => {
    this.scroller.scrollTo({x: 0, y: 0});
  };
  

  render() {
    return (
      
        <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          '0': Inicio,
          '1': Rotinas,
          '2': Alimentos,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ height: 0, width: Dimensions.get('window').width, marginTop: 20 }}
      />

    );
 }
};

function Rotinas(){
  scrollToEnd({animated: true});
};

Inicio = () => (
  
      <ScrollView style={MainStyle.conteudo} ref={(scroller) => {this.scroller = scroller}}>
        <View>
          <Image source={require('./src/img/Geeko!!.png')} style={{width: 320, height: 100, marginVertical: 13, resizeMode: 'contain'}} />
          <Text style={MainStyle.InfoText}>Seja bem-vindo, o nosso aplicativo tem a proposta de sugerir um meio de tornar a sua dieta mais fácil com a simples ideia de um diário alimentar, e um filtro de alimentos.</Text>

          <TouchableOpacity style={[MainStyle.buttonMain, MainStyle.BtnRoxo]} accessibilityLabel="Learn more about this purple button">
            <Text style={MainStyle.buttonText}>FAÇA O CADASTRO DO SEU PERFIL</Text>
          </TouchableOpacity>  
          <TouchableOpacity style={[MainStyle.buttonMain, MainStyle.BtnLaranja]} accessibilityLabel="Learn more about this purple button">
            <Text style={MainStyle.buttonText}>CRIE A SUA PRIMEIRA ROTINA</Text>
          </TouchableOpacity>  
          <TouchableOpacity style={[MainStyle.buttonMain, MainStyle.BtnAzul]} accessibilityLabel="Learn more about this purple button">
            <Text style={MainStyle.buttonText}>ENCONTRE SOBRE OS ALIMENTOS</Text>
          </TouchableOpacity>  
          <TouchableOpacity style={[MainStyle.buttonMain, MainStyle.BtnVerde]} accessibilityLabel="Learn more about this purple button">
            <Text style={MainStyle.buttonText}>NOS DE O SEU FEEDBACK :)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={MainStyle.center} onPress={this.scrollToB} accessibilityLabel="Learn more about this purple button">
            <Image source={require('./src/img/arrow-down.png')} style={{width: 40, height: 40, resizeMode: 'contain'}}/>
          </TouchableOpacity>
        </View>

        <View style={MainStyle.screen}>
          <Text style={MainStyle.InfoText}>Seja bem-vindo, o nosso aplicativo tem a proposta de sugerir um meio de tornar a sua dieta mais fácil com a simples ideia de um diário alimentar, e um filtro de alimentos.</Text>
          <Text style={MainStyle.InfoText}>Seja bem-vindo, o nosso aplicativo tem a proposta de sugerir um meio de tornar a sua dieta mais fácil com a simples ideia de um diário alimentar, e um filtro de alimentos.</Text>
          <Text style={MainStyle.InfoText}>Seja bem-vindo, o nosso aplicativo tem a proposta de sugerir um meio de tornar a sua dieta mais fácil com a simples ideia de um diário alimentar, e um filtro de alimentos.</Text>
          <Text style={MainStyle.InfoText}>Seja bem-vindo, o nosso aplicativo tem a proposta de sugerir um meio de tornar a sua dieta mais fácil com a simples ideia de um diário alimentar, e um filtro de alimentos.</Text>
          <Text style={MainStyle.InfoText}>Seja bem-vindo, o nosso aplicativo tem a proposta de sugerir um meio de tornar a sua dieta mais fácil com a simples ideia de um diário alimentar, e um filtro de alimentos.</Text>
        </View>
      </ScrollView> 
);
const Rotinas = () => (
  <ScrollView style={{ backgroundColor: '#673ab7' }} />
);

const Alimentos = () => (
  <ScrollView style={{ backgroundColor: '#673ab7' }} />
);


const MainStyle = StyleSheet.create({
  conteudo: {
    paddingTop: 5,
    marginHorizontal: 30,
    flex: 1,
  },
  screen: {
    height: Dimensions.get('window').height,
  },
  buttonMain: {
    padding: 12,
    borderWidth: 0,
    borderRadius: 3,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
  },
  BtnRoxo: {
    backgroundColor: '#976dd0',
  },
  BtnLaranja: {
    backgroundColor: '#ff8039',
  },
  BtnAzul: {
    backgroundColor: '#00a6ff',
  },
  BtnVerde: {
    backgroundColor: '#69bc49',
  },
  InfoText: {
    color: '#777',
    fontWeight: 'normal',
    fontSize: 16,
  },
  center: {
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

AppRegistry.registerComponent('JustDietNative', () => App);
