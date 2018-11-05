import React from 'react';
import { Image, ScrollView, FlatList, StyleSheet, Text, TextInput, Button, Alert, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

import Item from './adds/Item.js';
import data from '../data.js';

	let numberGrid = 1;


class Alimentos extends React.Component {
	constructor(props){
    	super(props);

    	this.state = { 
    		text: 'Pesquise aqui sobre o alimento que quiser.',
    		listaItens: [],
    		data: data
    	}
	}

	// componentWillMount(){
	// 	axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
	// 	.then(response => { this.setState({ listaItens: response.data }); })
	// 	.catch(() => { console.log("Erro ao recuperar os dados."); });
	// }

	renderItem = ({item}) => {
	   return <Item style={EstilosRotinas.item} nome={item.nome} kcal={item.kcal} estado={item.estado} status="PlusUltra"/>;
	}

	render(){
		return (
			<View style={{ paddingVertical: 20, paddingHorizontal: 15, marginBottom: 90}}>
				<View style={EstilosRotinas.ladoALado}>
					<View style={{ flexDirection: 'row', paddingHorizontal: 13 }}>
						<Image source={require('../img/squareOk.png')} style={{ width: 24, height: 24, paddingTop: 2 }} /> 
						<Text style={[EstilosRotinas.legenda, { color: '#65B545', marginLeft: 10 }]}>Sem problemas! </Text>
					</View>
					<View style={{ flexDirection: 'row', paddingHorizontal: 13 }}>
						<Image source={require('../img/squareNo.png')} style={{ width: 24, height: 24, paddingTop: 2 }} />
						<Text style={[EstilosRotinas.legenda, { color: '#F95F62', marginLeft: 10 }]}> Não recomendado! </Text>
					</View>
				</View>
				<View>
					<TextInput
				        style={EstilosRotinas.InputPesquisa}
				        onChangeText={(text) => this.setState({text})}
				        placeholder={this.state.text}
				        autoCapitalize="sentences"
				      />
				</View>
				<ScrollView>
					<FlatList  
			          keyExtractor={(_, index) => index.toString()} 
			          numColumns={numberGrid} data={this.state.data} 
			          renderItem={this.renderItem} />

					
				</ScrollView>
			</View>
		);
	}
};

const EstilosRotinas = StyleSheet.create ({
	Info: {
		color: '#333',
		textAlign: 'center',
		fontSize: 16,
	},
	ladoALado: {
	    flexDirection: 'row',
	    justifyContent: 'space-between',
  	},
  	legenda: {
  		justifyContent: 'center',
  		fontWeight: 'bold',
  	},
  	InputPesquisa: {
  		height: 60,
  		borderColor: '#00000030',
  		borderWidth: 0.5,
  		borderRadius: 5,
  		marginVertical: 10,
  		paddingHorizontal: 13,
  	},
  	item: {
		flexDirection: 'row',
	},
});

export default Alimentos;