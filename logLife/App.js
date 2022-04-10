import React from 'react';

import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Telas/Login';
import Subscribe from '../Telas/subscribe'; 
import Consulta from './Telas/Consulta'; 
import escolher_opção from './Telas/Seleção'; 
import Dados from './Telas/Dados_de_coleta'; 

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Login" component={Login}/>
       <Stack.Screen name="Subscribe" component={Subscribe}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}

