import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

export default function Sobre() {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#BDB7B7',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Text style={{ fontSize: 16, fontWeight: 'bold' }}>
				All The Anime APP
			</Text>
			<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Versão 1.0</Text>
			<Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 80 }}>
				Desenvolvido por:
			</Text>
			<Text style={{ fontSize: 16 }}>João Pedro Vitorino</Text>
			<Text style={{ fontSize: 16 }}>Jonathan Roque </Text>
			<Text style={{ fontSize: 16 }}>Monvar Adelino</Text>
			<Text style={{ fontSize: 16 }}>Vanessa França</Text>
			<Text style={{ marginBottom: 30, fontSize: 16 }}>Tayná Moreira</Text>
			<StatusBar hidden={true} />
		</View>
	);
}
