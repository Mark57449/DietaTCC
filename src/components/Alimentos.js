import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, Button, Alert, TouchableOpacity, View } from 'react-native';

import PesquisaDeAlimentos from './adds/PesquisaDeAlimentos.js';

class Alimentos extends React.Component {
	constructor(props){
    	super(props);
	}

	render(){
		return (
			<View>
				<View>
					<Text>Sem problemas!</Text>
					<Text>Não recomendado!</Text>
				</View>
				<View>
					<Text>Sem problemas!</Text>
					<Text>Não recomendado!</Text>
				</View>
				<ScrollView>
					<Text>Sem problemas!</Text>
					<Text>Não recomendado!</Text>
				</ScrollView>
			</View>
		);
	}
};

const EstilosRotinas = StyleSheet.create ({
	aaaa: {
		color: '#000',
	}
});

export default Alimentos;