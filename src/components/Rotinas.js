import React from 'react';
import { Image, ScrollView, StyleSheet, Text, Keyboard, TextInput, Button, Alert, TouchableOpacity, Picker, View, Dimensions } from 'react-native';
import { createStackNavigator, } from 'react-navigation';
import PopupDialog, { DialogTitle, FadeAnimation, DialogButton } from 'react-native-popup-dialog';

import CaixaDeRotina from './adds/CaixaDeRotina.js';

const fadeAnimation = new FadeAnimation({ animationDuration: 150 });

class UselessTextInput extends React.Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {this.props.maxLength}
        style={this.props.style}
      />
    );
  }
}

class Rotinas extends React.Component {
	constructor(props){
    	super(props);

		this.state = {
			dialogShow: false,
			text: '',
		};
	}

	static navigationOptions = {
    	headerStyle: {
      		height: 0,
      		width: 0,
      		paddingVertical: 0,
	    },
  	};

	showFadeAnimationDialog = () => {
    	this.fadeAnimationDialog.show();
 	}

	render(){

		return (
			<View style={{ marginTop: -25 }}>
				<View style={EstilosRotinas.ladoALado}>
					<TouchableOpacity style={EstilosRotinas.BtnFavorito} onPress={() => {Alert.alert("Tá funfando.", "Texto")}}>
						<Text style={EstilosRotinas.BtnTexto}>FAVORITAS</Text>
					</TouchableOpacity>
					<TouchableOpacity style={EstilosRotinas.BtnAll} onPress={() => {Alert.alert("Tá funfando.", "Texto")}}>
						<Text style={EstilosRotinas.BtnTexto}>TODAS AS ROTINAS</Text>
					</TouchableOpacity>
				</View>
				<ScrollView style={{ marginBottom: 60 }}>

					<CaixaDeRotina titulo="Titulo da Rotina" dataCriacao="20/10/2018" tipo="Academia"  cor="#976DD0"  acao={() => this.props.navigation.navigate('RotinaInfo')}/>
					<CaixaDeRotina titulo="Titulo da Rotina" dataCriacao="20/10/2018" tipo="Emagrecer" cor="#F95F62" acao={() => this.props.navigation.navigate('RotinaInfo')}/>
					<CaixaDeRotina titulo="Titulo da Rotina" dataCriacao="20/10/2018" tipo="Engordar"  cor="#00A6FF"  acao={() => this.props.navigation.navigate('RotinaInfo')}/>
					<CaixaDeRotina titulo="Titulo da Rotina" dataCriacao="20/10/2018" tipo="Academia"  cor="#B8977E"  acao={() => this.props.navigation.navigate('RotinaInfo')}/>
					<CaixaDeRotina titulo="Titulo da Rotina" dataCriacao="20/10/2018" tipo="Emagrecer"  cor="#343F4B"  acao={() => this.props.navigation.navigate('RotinaInfo')}/>

				</ScrollView>

				<PopupDialog
		          ref={(fadeAnimationDialog) => {
		            this.fadeAnimationDialog = fadeAnimationDialog; }}
          		dialogTitle={<DialogTitle title="Criando uma rotina..." />}
          		containerStyle={EstilosRotinas.PopupDialog}
          		height={0.6} width={0.9}>
		          <View style={EstilosRotinas.viewCriarRotinas}>
							<View>
								<Text style={{ fontWeight: 'bold' }}>Nome da Rotina:</Text>
								<UselessTextInput
					         multiline = {false}
					         numberOfLines = {1}
                   maxLength={30}
                   style={{ height: 50, paddingLeft: 15 }}
					         onChangeText={(text) => this.setState({text})}
					         value={this.state.text}
					       />
								 <Text style={{ fontWeight: 'bold' }}>Descrição da Rotina:</Text>
 								<UselessTextInput
 					         multiline = {true}
 					         numberOfLines = {4}
                   maxLength={200}
                   style={{ height: 100, paddingLeft: 15 }}
 					         onChangeText={(text) => this.setState({text})}
 					         value={this.state.text}
 					       />
								 <Text style={{ fontWeight: 'bold' }}>Selecione um Periodo de Tempo:</Text>
								 <Picker
									  selectedValue={this.state.language}
									  style={{ height: 50 }}
									  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
										<Picker.Item label="3 Dias" value="3" />
									  <Picker.Item label="1 Semana" value="7" />
									  <Picker.Item label="2 Semana" value="14" />
									</Picker>

							</View>
							<View style={EstilosRotinas.ladoALado}>
								<DialogButton text="CANCELAR" align="center" onPress={() => this.fadeAnimationDialog.dismiss()}/>
		            <DialogButton text="CRIAR ROTINA" buttonStyle={EstilosRotinas.btnPopup} textStyle={{ color: '#FFF' }} align="center" onPress={() => alert("O CARALHO, TÁ FUNCIONADNO!")}/>
							</View>
							</View>
        		</PopupDialog>

				<TouchableOpacity style={EstilosRotinas.btnFlutuante} onPress={this.showFadeAnimationDialog} activeOpacity={0.9}>
					<Text style={EstilosRotinas.txtFlutuante}>+</Text>
				</TouchableOpacity>

			</View>
		);
	}
};

import RotinaInfo from './adds/RotinaInfo.js';

const RootStack = createStackNavigator (
{
  Rotinas: {
    screen: Rotinas,
  },
  RotinaInfo: {
  	screen: RotinaInfo,
  },
},
  {
    initialRouteName: 'Rotinas',
  }
);

class Rotas extends React.Component {

	render(){
		return(
			<RootStack />
		);
	}
}

const EstilosRotinas = StyleSheet.create ({
	aaaa: {
		color: '#000',
	},
	ladoALado: {
	    flexDirection: 'row',
	    justifyContent: 'space-between',
	    marginVertical: 10,
  	},
  	BtnFavorito: {
  		backgroundColor: '#F95F62',
  		borderRadius: 3,
  		marginLeft: 14,
  		flex: 1,
  	},
  	BtnAll: {
  		backgroundColor: '#343F4B',
  		borderRadius: 3,
  		marginHorizontal: 14,
  		flex: 2,
  	},
  	BtnTexto: {
  		color: '#FFF',
  		paddingHorizontal: 10,
  		paddingVertical: 7,
  		fontWeight: 'bold',
  		textAlign: 'center',
  		fontSize: 16,
  	},
  	btnFlutuante: {
  		position: 'absolute',
  		bottom: 75,
  		right: 20,
  		width: 58,
  		height: 58,
  		borderRadius: 50,
  		backgroundColor: '#777',
  		justifyContent: 'center',
    	alignItems: 'center',
  	},
  	txtFlutuante: {
  		color: '#FFF',
  		fontSize: 30,
  		fontWeight: 'bold'
  	},

  	PopupDialog: {
  		position: 'absolute',
  		top: 0,
  	},
  	viewCriarRotinas: {
  		width: Dimensions.get('window').width,
			padding: 10
  	},
		btnPopup: {
			backgroundColor: '#ff8039',
		}
});

export default Rotas;
