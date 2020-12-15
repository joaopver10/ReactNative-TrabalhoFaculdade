import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Sinopse2() {
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
						source={require('../Images/sinp2.jpg')}
						style={{ width: 300, height: 200, marginTop: 30, left: 30}}
					/>

                    <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: '#EB2E14', margin: 20}}>Re:Zero Kara Hajimeru Isekai Seikatsu</Text>
					<Text style={{ color: 'white', fontSize: 18, left: 10, marginBottom: 30,}}>
                    Subaru Natsuki é um NEET que não faz nada além de jogos. Uma noite, depois de visitar uma loja de conveniência, ele é repentinamente convocado para outro mundo. Sem nenhum sinal de quem o convocou, ele logo faz amizade com uma garota meio elfa de cabelos prateados que se apresenta como Satella, e seu companheiro espiritual Puck. Satella menciona que sua insígnia foi roubada por uma ladra chamada Felt. Quando ele e "Satella" são mortos misteriosamente, Subaru acorda e descobre que adquiriu uma habilidade que chama de "Retorno pela Morte", permitindo-lhe reverter o tempo morrendo. Ele cumprimenta "Satella" novamente, apenas para que ela se ofenda por ser chamada por esse nome, que na verdade se refere à "Bruxa da Inveja" e é considerado um tabu. Com a ajuda de Reinhard (um cavaleiro), nessa outra linha do tempo, Subaru salva a vida de "Satella" da assassina Elsa; ela revela que seu nome verdadeiro é Emilia, e como um sinal de gratidão, Felt devolve a insígnia para ela.
 
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
