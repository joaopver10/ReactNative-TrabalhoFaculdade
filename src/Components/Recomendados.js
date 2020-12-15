import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Recomendados() {
	const navigation = useNavigation();

	return (
		<View style={styles.principal}>
			<ScrollView>
				<View style={styles.topoBg}>
					<View style={styles.topo}>
						<Image
							style={styles.imgTopo}
							source={require('../Images/logo1.png')}
						/>
					</View>
				</View>

				<View style={styles.barraBg}>
					<View style={styles.barra}>
						<TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
							<Text style={styles.texto}>Inicio</Text>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => navigation.navigate('Lançamentos')}>
							<Text style={styles.texto}>Lançamentos</Text>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => navigation.navigate('Recomendados')}>
							<Text style={styles.textoAtual}>Recomendados</Text>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
							<Text style={styles.texto}>Sobre</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.containerAnimes}>
					<View style={styles.containerAnimesBG}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Image
								source={require('../Images/recom1.png')}
								style={styles.imageA}
							/>
							<Text style={styles.textoAnime}> Fireworks </Text>
						</View>
					</View>
				</View>

				<View style={styles.containerAnimes}>
					<View style={styles.containerAnimesBG}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Image
								source={require('../Images/recom2.png')}
								style={styles.imageA}
							/>
							<Text style={styles.textoAnime}>Garden of Words</Text>
						</View>
					</View>
				</View>

				<View style={styles.containerAnimes}>
					<View style={styles.containerAnimesBG}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Image
								source={require('../Images/recom3.png')}
								style={styles.imageA}
							/>
							<Text style={styles.textoAnime}> A Silent Voice </Text>
						</View>
					</View>
				</View>

				<View style={styles.containerAnimes}>
					<View style={styles.containerAnimesBG}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Image
								source={require('../Images/recom4.png')}
								style={styles.imageA}
							/>
							<Text style={styles.textoAnime}>Weathering with You</Text>
						</View>
					</View>
				</View>

				<StatusBar hidden={true} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	principal: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#181615',
	},
	topoBg: {
		backgroundColor: '#181615',
	},
	topo: {
		padding: 15,
		width: 360,
		height: 180,
		justifyContent: 'center',
		alignItems: 'center',
	},
	barra: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		padding: 18,
		alignItems: 'center',
	},
	barraBg: {
		backgroundColor: '#AD253A',
		width: 360,
		height: 65,
	},
	texto: {
		fontSize: 15,
		fontWeight: 'bold',
	},
	textoAtual: {
		fontSize: 15,
		fontWeight: 'bold',
		borderWidth: 1,
		padding: 6,
		backgroundColor: 'black',
		color: 'white',
		borderRadius: 5,
	},
	imageA: {
		width: 150,
		height: 210,
		borderRadius: 10,
		marginLeft: 10,
	},
	containerAnimes: {
		backgroundColor: '#504D4D',
		marginTop: 40,
		flexWrap: 'wrap',
	},
	containerAnimesBG: {
		marginTop: 15,
		marginBottom: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textoAnime: {
		margin: 15,
		fontSize: 20,
		fontWeight: 'bold',
	},
});
