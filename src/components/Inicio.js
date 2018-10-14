import React from 'react';
import { AppRegistry, Image, ScrollView, StyleSheet, Text, TextInput, Button, Alert, TouchableOpacity, Dimensions, View, Platform} from 'react-native';
import firebase from 'firebase';

let scrollYPos = 0;

async function signInWithGoogleAsync() {
      try {
        const result = await Expo.Google.logInAsync({
          androidClientId: '733208892568-mgisq0la41r30ig47gutmm8vhv9hhmtv.apps.googleusercontent.com',
          iosClientId: '733208892568-6eloato5hjamiab0ktb56pcemb26u81v.apps.googleusercontent.com',
          scopes: ['profile', 'email'],
        });

        if (result.type === 'success') {
          alert(result.accessToken);

          var credential = firebase.auth.GoogleAuthProvider.credential(result.idToken);

            // Sign in with credential from the Google user.
          firebase.auth().signInAndRetrieveDataWithCredential(credential).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...

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

class Inicio extends React.Component {
    
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


  render(){
    return(
      <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} style={MainStyle.conteudo} ref={(scroller) => {this.scroller = scroller}}>
        <View>
          <View style={{ width: 320, height: 100, backgroundColor: '#976dd0' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#FFF', padding: 30, paddingLeft: 90 }}>Logotipo</Text>
          </View>

          
          <Text style={MainStyle.InfoText}>Seja bem-vindo, o nosso aplicativo tem a proposta de sugerir um meio de tornar a sua dieta mais fácil com a simples ideia de um diário alimentar, e um filtro de alimentos.</Text>

          <TouchableOpacity onPress={() => { this.salvarDados(); }} style={[MainStyle.buttonMain, MainStyle.BtnRoxo]} accessibilityLabel="Learn more about this purple button">
            <Text style={MainStyle.buttonText}>FAÇA O CADASTRO DO SEU PERFIL</Text>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => { signInWithGoogleAsync(); }} style={[MainStyle.buttonMain, MainStyle.BtnLaranja]} accessibilityLabel="Learn more about this purple button">
            <Text style={MainStyle.buttonText}>CRIE A SUA PRIMEIRA ROTINA</Text>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => { this.LoginListener(); }} style={[MainStyle.buttonMain, MainStyle.BtnAzul]} accessibilityLabel="Learn more about this purple button">
            <Text style={MainStyle.buttonText}>ENCONTRE SOBRE OS ALIMENTOS</Text>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => { this.Deslogar(); }} style={[MainStyle.buttonMain, MainStyle.BtnVerde]} accessibilityLabel="Learn more about this purple button">
            <Text style={MainStyle.buttonText}>NOS DE O SEU FEEDBACK :)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={MainStyle.center} onPress={() => {
            scrollYPos = Dimensions.get('window').height * 1;
            this.scroller.scrollTo({x: 0, y: scrollYPos});}} accessibilityLabel="Learn more about this purple button">

            <Image source={require('../../img/squareOk.png')} style={{width: 40, height: 40, resizeMode: 'contain'}}/>
          </TouchableOpacity>
        </View>

        <ScrollView style={MainStyle.screen}>

          <TouchableOpacity style={MainStyle.center} onPress={() => {
            scrollYPos = Dimensions.get('window').height * 1;
            this.scroller.scrollTo({x: 0, y: 0});}} accessibilityLabel="Learn more about this purple button">

            <Image source={require('../../img/squareOk.png')} style={{width: 40, height: 40, }}/>
          </TouchableOpacity>

          <InformationComponent titulo='Beneficios de uma boa alimentação!' data='20/09/2018'
           autor='Fulano' imagem="../img/Geeko!!.png" />
          <InformationComponent titulo='Beneficios de uma boa alimentação!' data='20/09/2018'
           autor='Fulano' imagem="../img/uvas.png" />
          <InformationComponent titulo='Beneficios de uma boa alimentação!' data='20/09/2018'
           autor='Fulano' imagem="../img/uvas.png" />
          <InformationComponent titulo='Beneficios de uma boa alimentação!' data='20/09/2018'
           autor='Fulano' imagem="../img/uvas.png" />
          <InformationComponent titulo='Beneficios de uma boa alimentação!' data='20/09/2018'
           autor='Fulano' imagem="../img/uvas.png" />
          <InformationComponent titulo='Beneficios de uma boa alimentação!' data='20/09/2018'
           autor='Fulano' imagem="../img/uvas.png" />
          <InformationComponent titulo='Beneficios de uma boa alimentação!' data='20/09/2018'
           autor='Fulano' imagem="../img/uvas.png" />
          <InformationComponent titulo='Beneficios de uma boa alimentação!' data='20/09/2018'
           autor='Fulano' imagem="../img/uvas.png" />
          <InformationComponent titulo='Beneficios de uma boa alimentação!' data='20/09/2018'
           autor='Fulano' imagem="../img/uvas.png" />

          
        </ScrollView>
        

      </ScrollView>
    );
  } 
};

class InformationComponent extends React.Component {
  render(){

    var Teste = { uri: this.props.imagem};
    var aa = '../img/uvas.png';
    return(
      <View style={InfoStyle.container}>
        <Image source={{ uri: aa }} style={{width: 320, height: 100, marginVertical: 8}} />
        <Text style={InfoStyle.titulo}>{this.props.titulo}</Text>
        <View style={InfoStyle.ladoALado}>
          <Text>{this.props.data}</Text>
          <Text>Autor: {this.props.autor}</Text>
        </View>
      </View>
    );
  }
};

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