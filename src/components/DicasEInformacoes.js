import React from 'react';
import { Image, ScrollView, StyleSheet, FlatList, Text, Dimensions, TextInput, Button, Alert, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

class DicasEInformacoes extends React.Component {
	constructor(props){
    	super(props);
		
		this.state = { 
    		posts: [{
						id: 1,
						titulo: "Titulo da Postagem",
						categoria: "Perda de Peso",
					},
					{
						id: 2,
						titulo: "Titulo da Postagem",
						categoria: "Alimentação Saúdavel",
					},
					{
						id: 3,
						titulo: "Titulo da Postagem",
						categoria: "Obesidade",
					},
					{
						id: 4,
						titulo: "Titulo da Postagem",
						categoria: "Perda de Peso",
					},
					{
						id: 5,
						titulo: "Titulo da Postagem",
						categoria: "Perda de Peso",
					},
					{
						id: 6,
						titulo: "Titulo da Postagem",
						categoria: "Perda de Peso",
					}
					]
	}
	}

	renderItem = ({item}) => {
	   return (
	   	<DicaEInfo titulo={item.titulo} categoria={item.categoria}/>
	   	);
	}
	
	render(){
		return (
			<ScrollView style={Style.viewMain}>
				<FlatList  
				    keyExtractor={(_, index) => index.toString()} 
				    numColumns={1} data={this.state.posts} 
				    renderItem={this.renderItem} />
          	</ScrollView>
		);
	}
};

class DicaEInfo extends React.Component {
	constructor(props){
    	super(props);
	}
		render(){
		return (
			<View style={Style.viewPost}>
				<Text style={Style.tituloPost}>{this.props.titulo}</Text>
				<Image source={require('../img/squareOk.png')} style={{ width: Dimensions.get('window').width, height: 200 }} />
				<Text style={Style.categoriaPost}>{this.props.categoria}</Text>
			</View>
		);
	}
};

const Style = StyleSheet.create ({
	tituloPost: {
		color: '#333',
		fontSize: 18,
		fontWeight: 'bold',
		padding: 10,
	},
	categoriaPost: {
		color: '#33333370',
		fontSize: 15,
		fontWeight: 'bold',
		paddingLeft: 10,
		paddingTop: 5,
	},
	viewMain: {
		padding: 10,
		backgroundColor: '#EEE',
		height: Dimensions.get('window').height,
	},
	viewPost: {
		borderRadius: 10,
		backgroundColor: '#FFF',
		marginVertical: 5,
		paddingBottom: 10,
	}
});

export default DicasEInformacoes;