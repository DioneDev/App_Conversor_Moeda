import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	titulo:{
		fontSize:30,
		fontWeight:'bold',
		color:'#000'
	},
	input:{
		width:280,
		height:45,
		backgroundColor:'#ccc',
		textAlign:'center',
		marginTop:15,
		fontSize:20,
		color:'#000',
		borderRadius:5
	},
	valorConvertido:{
		fontSize:30,
		fontWeight:'bold',
		color:'#000',
		marginTop:15
	},
	btnConverter:{
		width:150,
		height:45,
		backgroundColor:'#07EB57',
		borderRadius:5,
		justifyContent:'center',
		alignItems:'center',
		marginTop:15
	},
	btnTexto:{
		fontSize:18,
		fontWeight:'bold',
		color:'#fff'
	},

});
export default styles;