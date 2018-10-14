import React from 'react';
import { Image, ScrollView, StyleSheet, Text, Dimensions, TextInput, Button, Alert, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

let t = Dimensions.get('window').width;

class Item extends React.Component {
	constructor(props){
    	super(props);
	}

	DefineStatus(){
		if (this.props.status == "PlusUltra") {
			return <Image source={require('../../img/squareOk.png')} style={StyleItem.status} />;
		} else {
			return <Image source={require('../../img/squareNo.png')} style={StyleItem.status} />;
		}
	}

	render(){
		return (
			<View style={StyleItem.item}>
				<TouchableOpacity onPress={() => {Alert.alert("Tá funfando.", "Texto")}} activeOpacity={0.9} accessibilityLabel="Learn more about this purple button">
	            	{this.DefineStatus()}
	            	<View style={StyleItem.item}>
	            		<Image source={require('../../img/rectangle.png')} style={{ width: 67, height: 60, paddingTop: 2 }} />
		            	<View style={{ padding: 3, paddingLeft: 3, width: t / 1.5}}>
			            	<Text style={StyleItem.tituloNome}>{this.props.nome}</Text>
			            	<View style={StyleItem.ladoALado}>
				            	<Text style={StyleItem.legendaKcal}>Kcal {this.props.kcal}</Text>
				            	<Text style={StyleItem.legendaKcal}> {this.props.estado}</Text>
			            	</View>
		            	</View>
	            	</View>
	          	</TouchableOpacity>
          	</View>
		);
	}
};

const StyleItem = StyleSheet.create ({
	tituloNome: {
		color: '#333',
		fontSize: 16,
		fontWeight: 'bold',
	},
	legendaKcal: {
		color: '#888',
		fontSize: 14,
	},
	status: {
		width: 24,
		height: 24,
		paddingTop: 2,
		position: 'absolute',
		top: 2,
		zIndex: 2,
	},
	item: {
		flexDirection: 'row',
		paddingLeft: 7,
		marginTop: 5,
		borderBottomWidth: 0.5,
		borderBottomColor: '#00000015',
	},
	ladoALado: {
	    flexDirection: 'row',
	    justifyContent: 'space-between',
  	}
});

export default Item;