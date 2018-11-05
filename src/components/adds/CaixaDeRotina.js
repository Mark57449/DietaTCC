import React from 'react';
import { Image, StyleSheet, Text, Button, Alert, TouchableOpacity, View } from 'react-native';

class CaixaDeRotina extends React.Component {

	constructor(props){
    	super(props);
	}

	render(){
		return(
			<View>
				<TouchableOpacity activeOpacity={1} onPress={this.props.acao} style={[StyleRotina.container, {backgroundColor: this.props.cor}]}>
					<Text style={StyleRotina.titulo}>Titulo da Rotina</Text>
					<Text style={{ color: '#DDD' }}>Pequena descrição sobre a sua rotina.</Text>
					<Text style={{ color: '#EEE', fontWeight: 'bold', paddingTop: 5 }}> > {this.props.tipo}</Text>
				</TouchableOpacity>
			</View>
		);
	}
};

const StyleRotina = StyleSheet.create({
	container: {
	    paddingHorizontal: 10,
	    paddingVertical: 11,
	    marginHorizontal: 13,
	    marginVertical: 6,
	    borderRadius: 3,
	    backgroundColor: '#77FFFF',
  },
  titulo: {
    color: '#FFF',
    fontSize: 27,
    fontWeight: 'bold',
  },
  ladoALado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cor: {
    backgroundColor: '#976dd0',
  },
});

export default CaixaDeRotina;