import React, {Component} from 'react';
import {
	View, 
	Text,  
	TextInput, 
	TouchableOpacity,
	Keyboard
} from 'react-native';

import styles from './styles';
import api from '../services/api';

class Conversor extends Component{

	constructor(props){
		super(props);
		this.state={
			moedaA: props.moedaA,
			moedaB: props.moedaB,
			moedaB_valor:0,
			valorConvertido:0
		};

		this.converter = this.converter.bind(this);
	}

	async converter(){
		let de_para = this.state.moedaA +'_'+ this.state.moedaB;
		const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=4cbd03b39b0c7aa42dd8`)
		let cotacao = response.data[de_para];

		let resultado = (cotacao * parseFloat(this.state.moedaB_valor));
		
		this.setState({
			valorConvertido: resultado.toFixed(2)
		});

		// Fechar o teclado automaticamente.
		Keyboard.dismiss();
	}

	render(){

		const {moedaA, moedaB} = this.props;

		return(
			<View style={styles.container}>

				<Text style={styles.titulo}>
					{moedaA} para {moedaB}
				</Text>

				<TextInput 
					style={styles.input}
					placeholder="Digite um valor!"
					keyboardType="numeric"
					onChangeText={(moedaB_valor) => this.setState({moedaB_valor})}
				/>

				<Text style={styles.valorConvertido}>
				{(this.state.valorConvertido === 0) ? '' : this.state.valorConvertido}
				</Text>

				<TouchableOpacity style={styles.btnConverter} onPress={this.converter}>
					<Text style={styles.btnTexto}>Converter</Text>
				</TouchableOpacity>

			</View>
		);
	}
}
export default Conversor;
