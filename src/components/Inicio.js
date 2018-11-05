import React from 'react';
import { AppRegistry, Image, ScrollView, Animated, StyleSheet, Text, TextInput, Button, Alert, TouchableOpacity, Dimensions, View} from 'react-native';
import firebase from 'firebase';
import { TabView, TabBar, SceneMap, type Route,
  type NavigationState } from 'react-native-tab-view';

let scrollYPos = 0;
const { State: TextInputState } = TextInput;


class Inicio extends React.Component {
  constructor(props){
    	super(props);
    this.state = {
    index: 0,
    routes: [
      { key: '1', title: 'Seu Perfil', flequix: 4 },
      { key: '2', title: 'Dicas e Informações', flequix: 6 },
    ],
    email: '',
    senha: '',
    text: '',
  };
}

    LoginListener(){
      var user = firebase.auth().currentUser;

        if (user) {
          alert("Você está logado!");
          user.providerData.forEach(function (profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
            console.log("  UserToken: " + profile.getToken());
          });
        } else {
          alert("Não está logado!");
        }
    }

    Deslogar(){
      firebase.auth().signOut().then(function() {
          alert("Você foi deslogado com sucesso!");
      }).catch(function(error) {
          alert("Parece que ocorreu um erro :(");
          console.log(error);
      });
    }


salvarDados(){
      var database = firebase.database();
      database.ref("Alimentos").child("Itambé").set(
        {
          Descricao: "Bebida Láctea Uat Sabor Chocolate",
          Informacoes_Nutricionais: {
            Valor_Energetico: { valor: "140", medida: "kcal"},
            Carboidratos: { valor: "23", medida: "g"},
            Proteinas: { valor: "3", medida: "g"},
            Gorduras_Totais: { valor: "4", medida: "g"},
            Gorduras_Saturadas: { valor: "2.4", medida: "g"},
            Colesterol: { valor: "10", medida: "mg"},
            Gorduras_Trans: { valor: "0", medida: ""},
            Fibra_Alimentar: { valor: "0.6", medida: "g"},
            Sodio: { valor: "170", medida: "mg"},
            Calcio: { valor: "172", medida: "mg"}
          }
        }
      );

    }


_renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);


    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(
              inputIndex => (inputIndex === i ? '#FFF' : '#DDD')
            ),
          });
          return (
            <TouchableOpacity style={[{ flex: route.flequix }, styles.tabItem]} key={route.key} onPress={() => props.jumpTo(route.key)}>
              <Animated.Text textTransform="uppercase" style={[{ color }, styles.tabText ]}>{route.title.toUpperCase()}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  render(){
        
    return(
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          '1': Perfil,
          '2': DicasEInformacoes,
        })}
        renderTabBar={this._renderTabBar}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ height: 0, width: Dimensions.get('window').width }}
      />
    );
  } 

      

  }


import Perfil from './Perfil.js';

import DicasEInformacoes from './DicasEInformacoes.js';


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabText: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    tabBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    tabItem: {
      backgroundColor: '#976dd0',
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


const MainStyle = StyleSheet.create({
  conteudo: {
    paddingTop: 5,
    marginHorizontal: 30,
    flex: 1,
  },
  screen: {
    marginTop: 80,
    height: Dimensions.get('window').height - 80,
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
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Inicio;
