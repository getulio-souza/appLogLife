import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);


import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Login({navigation}) {
    return (
        <View>
            <Button
            onPress={()=> navigation.navigate('Login')}
            />
       </View>
   )    
}

