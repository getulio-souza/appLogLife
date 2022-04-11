import React, { Component } from 'react';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Telas/Login';
import Menu from './Telas/Menu';
import Subscribe from './Telas/Subscribe'; 
import Selecao from './Telas/selecao/'
import Consulta from './Telas/Consulta'; 
import Dados from './Telas/Dados'; 

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Login" component={Login}/>
       <Stack.Screen name="Subscribe" component={Subscribe}/>
       <Stack.Screen name="Menu" component={Menu}/>
       <Stack.Screen name="Selecao" component={Selecao}/>
       <Stack.Screen name="Consulta" component={Consulta}/>
       <Stack.Screen name="Dados" component={Dados}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
