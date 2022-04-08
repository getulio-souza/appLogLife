import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.containerLogo}>
        <Image
        source={require('./Img/logo_loglife.png')}
        />
      </View>
       
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder='Digite seu e-mail'
          autoCorrect={false}
          onChangeText={()=>{}}
        />

         <TextInput style={styles.input}
          placeholder='Digite sua senha'
          autoCorrect={false}
          onChangeText={()=>{}}
        />

        <TouchableOpacity style={styles.btn_Submit}>
          <Text style={styles.submit_text}>Acessar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btn_register}>
          <Text style={styles.register_text}>Criar conta</Text>
      </TouchableOpacity>

      </View>

    <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003275',
  },

  containerLogo:{
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    paddingBottom:40
  },
  
  input: {
    backgroundColor: '#fff',
    width: 250,
    height: 40,
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    paddingLeft:7,
  },

  btn_Submit: {
    backgroundColor: '#61aadb',
    width: 250,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 15,
  },

  submit_text: {
    color: '#fff',
    fontSize: 18,
  },

  btn_register: {
    backgroundColor: '#000',
    width: 250,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 15,

  },

  register_text: {
    color:'#fff',
  }

});