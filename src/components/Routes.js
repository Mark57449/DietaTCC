import { createStackNavigator } from 'react-navigation';

import Login from './Login.js';
import Logged from './Logged.js';

export const SignedOutRoutes = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Entrar"
    }
  },
});

export const SignedInRoutes = createStackNavigator({
  Logged: {
    screen: Logged,
    navigationOptions: {
      title: "Meu perfil"
    }
  },
});

export const createRootNavigator = (signedIn = false) => {
  return createStackNavigator({
    SignedIn: { screen: SignedInRoutes },
    SignedOut: { screen: SignedOutRoutes }
  },
  {
    headerMode: "none",
    mode: "modal",
    initialRouteName: signedIn ? "SignedIn" : "SignedOut",
    navigationOptions: {
      gesturesEnabled: false
    }
  });
};