import React from 'react';
import { Image, ScrollView, StyleSheet, Text, Dimensions, SectionList, Button, Alert, TouchableOpacity, TouchableWithoutFeedback, View, FlatList } from 'react-native';

import PerfilData from '../dataPerfil.js';


class Perfil extends React.Component {
	constructor(props){
    	super(props);

    	this.state = { 
    		perfil: PerfilData,
    		estatisticas: [{
						id: 1,
						nomeInformacao: "Rotinas Criadas",
						valor: "1",
					}],
    	}
	}

	renderItem = ({item}) => {
	   return (
	   	<DadosPerfil nome={item.nomeInformacao} valor={item.valor} status={item.status} />
	   	);
	}

	render(){
		return (
			<ScrollView style={Style.viewPerfil}>

				<View style={Style.box}>
					<Text style={[Style.titulo, { textAlign: 'center' }]}>Olá, Wendel Henrique</Text>
				</View>
				<View style={Style.box}>
					<Text style={Style.titulo}>Sobre você!</Text>
					<View style={Style.viewBox}>
						<Text style={Style.subtitulo}>Este é o seu perfil no Just Diet! Oque quer dizer que algumas informações suas seram exibidas aqui.</Text>
					</View>
					<View style={Style.viewBox}>
						<FlatList  
				          keyExtractor={(_, index) => index.toString()} 
				          numColumns={4} data={this.state.perfil} 
				          renderItem={this.renderItem} />
			        </View>
			        <FlatList  
			          keyExtractor={(_, index) => index.toString()} 
			          numColumns={1} data={this.state.estatisticas} 
			          renderItem={this.renderItem} />
				</View>

				<View style={Style.box}>
					<Text style={Style.titulo}>Configurações</Text>
					<View style={Style.viewBox}>
						<Text style={Style.subtitulo}>Alguns ajustes podem ser feitos neste bloco, ou você pode explorar por aqui.</Text>
					</View>
					<SectionList
						  renderItem={({item, index, section}) => 
						  <TouchableOpacity key={index} style={Style.configItem}>
						  <Text style={{ fontSize: 15, textAlign: 'center', opacity: 0.7  }}>{item}</Text></TouchableOpacity>}
						  renderSectionHeader={({section: {title}}) => (
						    <Text style={{ fontWeight: 'bold', color: '#00000050', paddingVertical: 2 }}>{title}</Text>
						  )}
						  sections={[
						    {title: 'Configurações Gerais', data: ['Filtro Alimentar', 'Nacionalidade', 'Sobre o Aplicativo']},
						    {title: 'Configurações de Conta', data: ['Trocar de Conta', 'Sair da Conta', 'Excluir a Conta']},
						  ]}
						  keyExtractor={(item, index) => item + index}
						/>
				</View>
				<View style={{ width: 50, height: 15 }}></View>

          	</ScrollView>
		);
	}
};

class DadosPerfil extends React.Component {
	constructor(props){
    	super(props);
	}
		render(){
		return (
			<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', marginVertical: 4, paddingHorizontal: 3 }}>
		   		<View style={{ padding: 5, borderRadius: 30, backgroundColor: '#8a64bf', }}>
		   			<Text style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold', color: '#FFF' }}>{this.props.valor}{this.props.status}</Text>
		   		</View>
		   		<Text style={{ fontSize: 15, textAlign: 'center', marginVertical: 5 }}>{this.props.nome}</Text>
	   		</View>
		);
	}
};


const Style = StyleSheet.create ({
	titulo: {
		color: '#333',
		fontSize: 22,
		fontWeight: 'bold',
	},
	subtitulo: {
		color: '#00000075',
		fontSize: 13,
	},
	viewPerfil: {
		paddingHorizontal: 10,
		paddingTop: 0,
		backgroundColor: '#EEE',
		height: Dimensions.get('window').height,
	},
	viewBox: {
		borderBottomWidth: 1,
		borderColor: '#00000030',
		paddingBottom: 5,
		marginBottom: 15,
	},
	box: {
		backgroundColor: '#FFF',
		padding: 15,
		borderRadius: 10,
		marginVertical: 5,
	},

	configItem: {
		padding: 10,
		backgroundColor: '#00000000',
		borderWidth: 3.5,
		borderColor: '#00000020',
		marginVertical: 2,
		borderRadius: 10
	}
});

export default Perfil;