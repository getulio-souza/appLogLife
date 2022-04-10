import React, { Component } from 'react';

import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Telas/Login';
import Subscribe from '../Telas/subscribe'; 
import escolher_opção from './Telas/Seleção'; 
import Consulta from './Telas/Consulta'; 
import Dados from './Telas/Dados_de_coleta'; 

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Login" component={Login}/>
       <Stack.Screen name="Subscribe" component={Subscribe}/>
       <Stack.Screen name="escolher_opção" component={escolher_opção}/>
       <Stack.Screen name="Consulta" component={Consulta}/>
       <Stack.Screen name="Dados" component={Dados}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}
