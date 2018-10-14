import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, Button, Alert, TouchableOpacity, View, Dimensions } from 'react-native';

import CaixaDeRotina from './adds/CaixaDeRotina.js';

class Rotinas extends React.Component {
	constructor(props){
    	super(props);
	}

	render(){
		return (
			<View>
				<View style={EstilosRotinas.ladoALado}>
					<TouchableOpacity style={EstilosRotinas.BtnFavorito} onPress={() => {Alert.alert("Tá funfando.", "Texto")}}>
						<Text style={EstilosRotinas.BtnTexto}>FAVORITAS</Text>
					</TouchableOpacity>
					<TouchableOpacity style={EstilosRotinas.BtnAll} onPress={() => {Alert.alert("Tá funfando.", "Texto")}}>
						<Text style={EstilosRotinas.BtnTexto}>TODAS AS ROTINAS</Text>
					</TouchableOpacity>
				</View>
				<ScrollView>
					<CaixaDeRotina tipo="Academia"  cor="#976DD0"  />
					<CaixaDeRotina tipo="Emagrecer" cor="#F95F62" />
					<CaixaDeRotina tipo="Engordar"  cor="#00A6FF"  />
					<CaixaDeRotina tipo="Academia"  cor="#B8977E"  />
					<CaixaDeRotina tipo="Emagrecer"  cor="#343F4B"  />
				</ScrollView>
			</View>
		)
	}
};

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
  	}
});

export default Rotinas;