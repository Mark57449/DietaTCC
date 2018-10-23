import React from 'react';
import { Image, StyleSheet, Text, Button, Alert, TouchableOpacity, View, ScrollView, SectionList, FlatList } from 'react-native';

import Item from './Item.js';
import data from './../../dataConsumidos.js';

class RotinaInfo extends React.Component {
	constructor(props){
    	super(props);

    	this.state = {
    		dataEsperado: [{
	        	title: 'Esperado',
	        	data: ['700' + 'Kcal', '7' + ' Dias']
	        }],
	        dataAtualmente: [{
	        	title: 'Atualmente',
	        	data: ['670' + 'Kcal', '6' + ' Dias']
	        }],
					data: data
    	};
	}

	static navigationOptions = {
	    	title: 'Titulo da Rotina',
	    	headerStyle: {
	      		backgroundColor: '#f4511e',
	      		height: 55,
	      		marginTop: -25,
		    },
		    	headerTintColor: '#FFF',
		    	headerTitleStyle: {
		      	fontWeight: 'bold',
		    },
  		};

			renderItem = ({item}) => {
			   return (
					 <View style={Styles.ladoALado}>
					 	<Item style={Styles.itensConsumidos} nome={item.nome} kcal={item.kcal} estado={item.estado} status="PlusUltra"/>
						<View style={Styles.itemDelete}><Text style={{ fontWeight: 'bold', color: '#BB0000' }}>X</Text></View>
					 </View>
				 );
			}
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#EEE' }}>
      	<View>
	      	<View style={Styles.viewHeader}>
	      		<Text style={Styles.viewHeaderTexto}>
	      			Prosposta que o projeto oferece, omnis iste natus error sit voluptatem
	      	 		accusant doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo
	      	  		inventore veritatis.
	      	  	</Text>
	      	  	<Text style={{ textAlign: 'right', marginTop: 5, color: '#FFFFFF70' }}>Criada em: 20/10/2018</Text>
	      	</View>
	      	<View style={[Styles.ladoALado, Styles.viewFlutuante]}>
		      	<TouchableOpacity style={Styles.btnFlutuante} onPress={this.showFadeAnimationDialog} activeOpacity={0.9}>
					<Text style={Styles.txtFlutuante}>/</Text>
				</TouchableOpacity>
				<TouchableOpacity style={Styles.btnFlutuante} onPress={this.showFadeAnimationDialog} activeOpacity={0.9}>
					<Text style={Styles.txtFlutuante}>+</Text>
				</TouchableOpacity>
			</View>
			<View style={{ backgroundColor: '#FFFFFF00', height: 6 }} />
		</View>
      	<ScrollView style={{ paddingTop: 20, paddingHorizontal: 10, zIndex: 30, }}>
      	<View style={Styles.ladoALado}>
      		<SectionList
	          sections={this.state.dataEsperado}
	          renderItem={({item}) => <Text style={[{ marginLeft: 20 }, Styles.item]}>{item}</Text>}
	          renderSectionHeader={({section}) => <Text style={Styles.sectionHeader}>{section.title}</Text> }
	          keyExtractor={(item, index) => index}
	        />
	        <SectionList
	          sections={this.state.dataAtualmente}
	          renderItem={({item}) => <Text style={[{ marginRight: 20 }, Styles.item]}>{item}</Text>}
	          renderSectionHeader={({section}) => <Text style={Styles.sectionHeader}>{section.title}</Text> }
	          keyExtractor={(item, index) => index}
	        />
	    </View>

	    <View style={Styles.box}>
			<Text style={Styles.titulo}>Lista de Alimentos Consumidos</Text>
			<View style={[Styles.viewBox, Styles.ladoALado]}/>
						<FlatList
						keyExtractor={(_, index) => index.toString()}
						numColumns={1} data={this.state.data}
						renderItem={this.renderItem} />
			</View>

      	</ScrollView>
      </ScrollView>
    );
  }
};

const Styles = StyleSheet.create ({
	ladoALado: {
	    flexDirection: 'row',
	    justifyContent: 'space-between',
	    marginHorizontal: 10,
  	},
	viewHeader: {
		backgroundColor: '#f4511e',
		padding: 15,
    zIndex: 55
	},
	viewHeaderTexto: {
		color: '#FFF',
		fontSize: 16,
	},
	viewFlutuante: {
		position: 'absolute',
  		bottom: -17,
  		left: 10,
  		zIndex: 60
	},
	btnFlutuante: {
		width: 40,
  		height: 40,
  		borderRadius: 50,
  		backgroundColor: '#f4511e',
  		borderColor: '#EEE',
  		borderWidth: 3,
  		justifyContent: 'center',
    	alignItems: 'center',
    	zIndex: 61,
    	marginRight: 15,

  	},
  	txtFlutuante: {
  		color: '#FFF',
  		fontSize: 30,
  		fontWeight: 'bold',
  		paddingBottom: 3,
  	},

  	sectionHeader: {
  		paddingHorizontal: 20,
  		paddingVertical: 10,
  		backgroundColor: '#FFF',
  		fontWeight: 'bold',
  		textAlign: 'center',
  		borderRadius: 5,
  		fontSize: 18
  	},
  	item: {
  		padding: 10,
  		textAlign: 'center',
  		borderRadius: 5,
  		backgroundColor: '#FFF',
  		marginTop: 5
  	},


  	titulo: {
		color: '#333',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	subtitulo: {
		color: '#00000075',
		fontSize: 13,
	},
	viewBox: {
		borderBottomWidth: 1,
		borderColor: '#00000030',
		paddingBottom: 5,
		marginBottom: 15,
	},
	box: {
		backgroundColor: '#FFF',
		paddingVertical: 5,
		paddingHorizontal: 15,
		borderRadius: 10,
		marginVertical: 15,
	},

	itensConsumidos: {
		flexDirection: 'row',
	},
	itemDelete: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000'
	},
});

export default RotinaInfo;
