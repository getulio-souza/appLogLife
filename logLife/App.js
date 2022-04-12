// import React, { component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from './telas/login'
import menu from './telas/menu'
import subscribe from './telas/subscribe'
import selecao from './telas/selecao'
import consulta from './telas/consultar_coleta'
import dados from './telas/dados'; 

const Stack = createStackNavigator();

  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={login} />
          <Stack.Screen name="subscribe" component={subscribe} />
          <Stack.Screen name="menu" component={menu} />
          <Stack.Screen name="selecao" component={selecao} />
          <Stack.Screen name="consulta" component={consulta} />
          <Stack.Screen name="dados" component={dados} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App; 