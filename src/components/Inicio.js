import React from 'react';
import { AppRegistry, Image, ScrollView, StyleSheet, Text, TextInput, Button, Alert, TouchableOpacity, Dimensions, View, Platform} from 'react-native';

let scrollYPos = 0;

class Inicio extends React.Component {
  
  render(){
    return(
      <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} style={MainStyle.conteudo} ref={(scroller) => {this.scroller = scroller}}>
        <View>
          <Image source={require('../img/Geeko!!.png')} style={{width: 320, height: 100, marginVertical: 13, resizeMode: 'contain'}} />
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

          <TouchableOpacity style={MainStyle.center} onPress={() => {
            scrollYPos = Dimensions.get('window').height * 1;
            this.scroller.scrollTo({x: 0, y: scrollYPos});}} accessibilityLabel="Learn more about this purple button">

            <Image source={require('../img/arrow-down.png')} style={{width: 40, height: 40, resizeMode: 'contain'}}/>
          </TouchableOpacity>
        </View>

        <View style={[MainStyle.screen, MainStyle.BtnRoxo]}>

          <InformationComponent titulo='Beneficios de uma boa alimentação!' data='20/09/2018' tag='Dietas'></InformationComponent>

          <TouchableOpacity style={MainStyle.center} onPress={() => {
            scrollYPos = Dimensions.get('window').height * 1;
            this.scroller.scrollTo({x: 0, y: 0});}} accessibilityLabel="Learn more about this purple button">

            <Image source={require('../img/arrow-down.png')} style={{width: 40, height: 40, resizeMode: 'contain'}}/>
          </TouchableOpacity>
        </View>
        

      </ScrollView>
    );
  } 
};

class InformationComponent extends React.Component {
  render(){
    return(
      <View>
        <Text>{this.props.titulo}</Text>
        <Text>{this.props.data}</Text>
        <Text>{this.props.tag}</Text>
      </View>
    );
  }
};

const MainStyle = StyleSheet.create({
  conteudo: {
    paddingTop: 5,
    marginHorizontal: 30,
    flex: 1,
  },
  screen: {
    marginTop: 45,
    height: Dimensions.get('window').height - 45,
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

export default Inicio;