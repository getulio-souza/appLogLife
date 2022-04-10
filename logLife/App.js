import React, { Component } from 'react';

import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from '../logLife/Telas/login/';
import menu from '../logLife/Telas/menu/'
import subscribe from '../logLife/Telas/subscribe/'; 
import selecao from '../logLife/Telas/selecao/'
import consulta from '../logLife/Telas/consulta/'; 
import dados from '../logLife/Telas/dados/'; 

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
       <Stack.Screen name="login" component={login}/>
       <Stack.Screen name="subscribe" component={subscribe}/>
       <Stack.Screen name="menu" component={menu}/>
       <Stack.Screen name="selecao" component={selecao}/>
       <Stack.Screen name="consulta" component={consulta}/>
       <Stack.Screen name="dados" component={dados}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}
