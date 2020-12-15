import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	View,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Inicio() {
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
							<Text style={styles.textoAtual}>Inicio</Text>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => navigation.navigate('Lançamentos')}>
							<Text style={styles.texto}>Lançamentos</Text>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => navigation.navigate('Recomendados')}>
							<Text style={styles.texto}>Recomendados</Text>
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
								source={require('../Images/anime1.png')}
								style={styles.imageA}
							/>
							<Text style={styles.textoAnime}> Demon Slayer</Text>
						</View>

						<View style={{ left: 123}}>
							<TouchableOpacity
                               onPress={() => navigation.navigate('Sinopse Demon Slayer')}
								style={{
									borderWidth: 1,
									borderRadius: 4,
									padding: 10,
									backgroundColor: '#11A3FC',
									width: 110,
								}}>
								<Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
									Ler Sobre
								</Text>
							</TouchableOpacity>
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
								source={require('../Images/anime2.png')}
								style={styles.imageA}
							/>
							<Text style={styles.textoAnime}>    Re:Zero </Text>
						</View>

						<View style={{ left: 143 }}>
							<TouchableOpacity
                               onPress={() => navigation.navigate('Sinopse Re:Zero')}
								style={{
									borderWidth: 1,
									borderRadius: 4,
									padding: 10,
									backgroundColor: '#11A3FC',
									width: 110,
								}}>
								<Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
									Ler Sobre
								</Text>
							</TouchableOpacity>
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
								source={require('../Images/anime3.jpg')}
								style={styles.imageA}
							/>
							<Text style={styles.textoAnime}> Tokyo Ghoul </Text>
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
								source={require('../Images/anime4.jpg')}
								style={styles.imageA}
							/>
							<Text style={styles.textoAnime}> Naruto </Text>
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
								source={require('../Images/anime5.png')}
								style={styles.imageA}
							/>
							<Text style={styles.textoAnime}> Your Name </Text>
						</View>
					</View>
				</View>
			</ScrollView>
			<StatusBar hidden={true} />
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
	barraBg: {
		backgroundColor: '#AD253A',
		width: 360,
		height: 65,
	},
	barra: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		padding: 18,
		alignItems: 'center',
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
		marginBottom: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textoAnime: {
		margin: 15,
		fontSize: 20,
		fontWeight: 'bold',
	},
	btnSin: {
		borderWidth: 1,
		borderRadius: 3,
		padding: 7,
		backgroundColor: '#11A3FC',
		width: 100,
	},
});
