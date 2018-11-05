import React from 'react';
import { AppRegistry, AsyncStorage, Animated, Image, ScrollView, StyleSheet, Text, TextInput, Button, Alert, Icon, Keyboard, StatusBar, TouchableOpacity, Dimensions, View, Platform, UIManager} from 'react-native';
import { TabView, TabBar, SceneMap, type Route,
  type NavigationState } from 'react-native-tab-view';
import { createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import firebase from 'firebase';
import PopupDialog, { DialogTitle, FadeAnimation, DialogButton } from 'react-native-popup-dialog';

import { onSignIn } from "./adds/Auth.js";

var loginBoolean = null;
var n = 1;
const { State: TextInputState } = TextInput;
var logado = null;

async function signInWithGoogleAsync() {
      try {
        const result = await Expo.Google.logInAsync({
          androidClientId: '733208892568-mgisq0la41r30ig47gutmm8vhv9hhmtv.apps.googleusercontent.com',
          iosClientId: '733208892568-6eloato5hjamiab0ktb56pcemb26u81v.apps.googleusercontent.com',
          scopes: ['profile', 'email'],
        });

        if (result.type === 'success') {

          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
          .then(function() {
            var credential = firebase.auth.GoogleAuthProvider.credential(result.idToken);

            // Sign in with credential from the Google user.
             return firebase.auth().signInAndRetrieveDataWithCredential(credential);
           }).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              alert(error);
            });

          return result;
        } else {
          return {cancelled: true};
        }
      } catch(e) {
        return {error: true};
      }



    }

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: Dimensions.get('window').height,
      screenWidth: Dimensions.get('window').width,
      index: 0,
      email: '',
      senha: '',
      text: '',
      shift: new Animated.Value(0)
    };
  }

  componentWillMount(){

      this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
      this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
    }

    componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  showFadeAnimationDialog = () => {
      this.fadeAnimationDialog.show();
  }


    LoginListener(){
        var user = firebase.auth().currentUser;
        if (user) {
          console.log("Você está logado!");
          user.providerData.forEach(function (profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
            n++;
            return this.logado = true;
          });
        } else {
          console.log("Não está logado!");
          n++;
          return this.logado = false;
        }
        n++;
        return this.logado = false;
    };




  render() {
    const { shift } = this.state;

  return (
    <Animated.View style={{ transform: [{translateY: shift}] }}>
      <Image source={require('../img/wallpaper-login.jpeg')} style={{ position: 'absolute', top: 0, backgroundColor: '#00000080', width: Dimensions.get('window').width, flex: 1, zIndex: 2 }} />
      <View style={{backgroundColor:'rgba(0,0,0,.4)', position: 'absolute', top: -20, height: Dimensions.get('window').height, width: Dimensions.get('window').width, flex: 1, zIndex: 3}}/>

      <View style={NaoLogado.viewMain}>

      <View style={{ paddingVertical: 10, paddingHorizontal: 15 }}>
      <Image source={require('../img/drop-up-arrow.png')} style={{ position: 'absolute', right: 100, top: -8, width: 24, height: 24 }} />
        <View style={{ backgroundColor: '#FFF', paddingVertical: 10, paddingHorizontal: 20 , borderRadius: 30 }}>
          <Text style={{ fontSize: 15 }}>As funções não estaram disponíveis até você entrar com uma conta!</Text>
        </View>
      </View>

        <View style={{ borderRadius: 20, backgroundColor: '#FFF', padding: 15, marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 27, color: '#00000098'}}>Fazer Login no Just Diet!</Text>

        <View style={[InfoStyle.ladoALado, { }]}>
          <Text style={{ fontSize: 18, marginVertical: 10, color: '#00000090', marginBottom: 13 }}>
            Ou <Text style={{ color: '#0095ff95' }}>Criar uma Conta</Text>
          </Text>
        </View>


        <TextInput
          placeholder = "Endereço de E-Mail:"
          multiline = {false}
          numberOfLines = {1}
          maxLength={42}
          style={{ height: 50, paddingLeft: 15, marginVertical: 5, fontSize: 18 }}
          onChangeText={(email) => this.setState({email})}
          editable = {true}
          maxLength = {40}
          value={this.state.email}
          keyboardType="email-address"
          autoFocus={true}
        />

        <TextInput
          placeholder = "Senha:"
          secureTextEntry = {true}
          numberOfLines = {1}
          maxLength={30}
          style={{ height: 50, paddingLeft: 15, marginVertical: 5, fontSize: 18 }}
          onChangeText={(senha) => this.setState({senha})}
          editable = {true}
          maxLength = {40}
          value={this.state.senha}
        />

        <PopupDialog ref={(fadeAnimationDialog) => { this.fadeAnimationDialog = fadeAnimationDialog; }}
              dialogTitle={<DialogTitle title="Criar sua conta no Just Diet!" />}
              containerStyle={{}}
              height={0.6} width={0.9}>
                <View style={{}}>
                    <View>
                      <Text style={{ fontWeight: 'bold' }}>E-mail:</Text>
                      <TextInput
                        multiline = {false}
                        numberOfLines = {1}
                        maxLength={30}
                        style={{ height: 50, paddingLeft: 15 }}
                        onChangeText={(text) => this.setState({text})}
                        editable = {true}
                        maxLength = {40}
                        value={this.state.text}
                      />
                    </View>
                  <View style={InfoStyle.ladoALado}>
                    <DialogButton text="CANCELAR" align="center" onPress={() => this.fadeAnimationDialog.dismiss()}/>
                    <DialogButton text="CRIAR A CONTA" buttonStyle={{}} textStyle={{ color: '#FFF' }} align="center" onPress={() => alert("O CARALHO, TÁ FUNCIONADNO!")}/>
                  </View>
                </View>
        </PopupDialog>

          <TouchableOpacity style={NaoLogado.btnLoginEmail} onPress={() => onSignIn().then(() => {navigation.navigate("SignedIn"); console.log("Foi?");  })}>
            <Text style={NaoLogado.txtBtnLogin}>Entrar com Conta Pessoal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={NaoLogado.btnLoginGoogle} onPress={() => signInWithGoogleAsync()}>
            <Text style={[NaoLogado.txtBtnLogin, { color: '#FFF' }]}>Entrar com o Google</Text>
          </TouchableOpacity>
        </View>
      </View>
      </Animated.View>
    );
 }

handleKeyboardDidShow = (event) => {
      const { height: windowHeight } = Dimensions.get('window');
      const keyboardHeight = event.endCoordinates.height;
      const currentlyFocusedField = TextInputState.currentlyFocusedField();
      UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
        const fieldHeight = height;
        const fieldTop = pageY;
        const gap = (windowHeight - (keyboardHeight + 140 ) ) - (fieldTop + fieldHeight);
        if (gap >= 0) {
          return;
        }
        Animated.timing(
          this.state.shift,
          {
            toValue: gap,
            duration: 500,
            useNativeDriver: true,
          }
        ).start();
      });
    }

  handleKeyboardDidHide = () => {
      Animated.timing(
        this.state.shift,
        {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }
      ).start();
    }

};

  const NaoLogado = StyleSheet.create({
  viewMain: {
    padding: 15,
    height: Dimensions.get('window').height,
    zIndex: 5,
  },
  btnLoginEmail: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#976dd0',
    borderRadius: 5,
    marginVertical: 8,
  },
  btnLoginGoogle: {
    padding: 10,
    backgroundColor: '#DB4437',
    borderWidth: 0,
    borderRadius: 5,
    marginVertical: 5
  },
  txtBtnLogin: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 19
  }
});

  const InfoStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#d6d7da',
    borderRadius: 6,
  },
  titulo: {
    color: '#555',
    fontSize: 18,
  },
  ladoALado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

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
