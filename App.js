import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Sobre from './src/Components/Sobre';
import Inicio from './src/Components/Inicio';
import Recomendados from './src/Components/Recomendados';
import Lançamentos from './src/Components/Lançamentos';
import Sinopse from './src/Components/Sinopse';
import Sinopse2 from './src/Components/Sinopse2';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialPosition='Home'
				screenOptions={{
					headerTintColor: 'white',
				}}>
				<Stack.Screen
					name='Inicio'
					component={Inicio}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Sobre'
					component={Sobre}
					options={{ headerStyle: { backgroundColor: '#969393' } }}
				/>
				<Stack.Screen
					name='Recomendados'
					component={Recomendados}
					options={{ headerStyle: { backgroundColor: '#181615' } }}
				/>
				<Stack.Screen
					name='Lançamentos'
					component={Lançamentos}
					options={{ headerStyle: { backgroundColor: '#181615' } }}
				/>
				<Stack.Screen
					name='Sinopse Demon Slayer'
					component={Sinopse}
					options={{ headerStyle: { backgroundColor: '#181615' } }}
				/>
				<Stack.Screen
					name='Sinopse Re:Zero'
					component={Sinopse2}
					options={{ headerStyle: { backgroundColor: '#181615' } }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
