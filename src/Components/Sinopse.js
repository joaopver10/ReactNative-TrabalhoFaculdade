import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Sinopse() {
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
                <View style={styles.barraBg}/>
            	<View style={styles.barra}/>

	
					<Image
						source={require('../Images/sinp.jpg')}
						style={{ width: 300, height: 200, marginTop: 30, left: 30}}
					/>

                    <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: '#EB2E14', margin: 20}}>Demon Slayer</Text>
					<Text style={{ color: 'white', fontSize: 18, left: 10 }}>
						Tanjirō Kamado é um garoto que vive feliz com sua família, até que
						um dia ele chega em casa e encontra sua mãe e irmãos massacrados por
						demônios, sendo a única sobrevivente a sua irmã mais nova, Nezuko,
						que também se tornou um demônio. Giyū Tomioka, um caçador de
						demônios, chega e tenta decapitar Nezuko, mas Tanjirō a protege e
						promete transformá-la de volta em uma humana. Giyū finalmente decide
						deixar os irmãos irem depois de ficar impressionada com a
						perspicácia de Tanjirō e a forte vontade de Nezuko de proteger seu
						irmão, apesar dessa ter sido transformada. Giyū pede para os dois
						irem conhecer um homem chamado Sakonji Urokodaki, que mora numa
						montanha, e avisa Tanjirō para manter sua irmã fora do alcance da
						luz solar. Os irmãos enterram seus familiares e saem em direção à
						montanha de mãos dadas.
 
					</Text>
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
		alignItems: 'center',
	},
	barraBg: {
		backgroundColor: '#AD253A',
		width: 360,
		height: 15,
	},
});
