import React from 'react';
import { AppRegistry, AsyncStorage, Animated, Image, ScrollView, StyleSheet, Text, TextInput, Button, Alert, Icon, Keyboard, StatusBar, TouchableOpacity, Dimensions, View, Platform, UIManager} from 'react-native';
import { TabView, TabBar, SceneMap, type Route,
  type NavigationState } from 'react-native-tab-view';
import { createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import firebase from 'firebase';
import PopupDialog, { DialogTitle, FadeAnimation, DialogButton } from 'react-native-popup-dialog';

import { isSignedIn } from "./src/components/adds/Auth.js";

import { createRootNavigator, SignedOutRoutes, SignedInRoutes } from './src/components/Routes.js';

// var loginBoolean = null;
// var n = 1;
const { State: TextInputState } = TextInput;
// var logado = null;

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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: Dimensions.get('window').height,
      screenWidth: Dimensions.get('window').width,
      index: 0,
      routes: [
        { key: '0', title: 'Inicio', icon: '#976dd0'},
        { key: '1', title: 'Alimentos', icon: '#00a6ff'},
        { key: '2', title: 'Rotinas', icon: '#ff8039'},
      ],
      email: '',
      senha: '',
      text: '',
      shift: new Animated.Value(0),
      signed: false,
      signLoaded: false,
    };
  }

  componentWillMount(){
      var config = {
        apiKey: "AIzaSyDXD-picai3jwrFuBhVNewtMk0HDjcek0A",
        authDomain: "justdiet-exc.firebaseapp.com",
        databaseURL: "https://justdiet-exc.firebaseio.com",
        projectId: "justdiet-exc",
        storageBucket: "justdiet-exc.appspot.com",
        messagingSenderId: "508483125958"
      };
      firebase.initializeApp(config);

      this.LoginListener();
      alert(this.logado);

      isSignedIn()
      .then(res => this.setState({ signed: res, signLoaded: true }))
      .catch(err => alert("Erro"));

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
    const { signLoaded, signed } = this.state;

    if (!signLoaded) {
      return null;
    }

    const Layout = createRootNavigator(signed);
    return <Layout />;
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

AppRegistry.registerComponent('JustDietNative', () => App);
