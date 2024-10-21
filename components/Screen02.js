import { Text, SafeAreaView, StyleSheet, Button, Image, TouchableOpacity, View, TextInput } from 'react-native';
import React from 'react'

export default function App(navigation) {
  return (
   <View style={styles.container}>
          <Image style={styles.logo} source = {require('../assets/google-logo.png')}/>

          <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginLeft: 60
          }}> Nice to see you </Text>

          <Text style={{
            marginLeft: 80,
          }}> Create your account </Text>

          <TextInput style={styles.inputUserN}
            placeholder = "Enter your user nanme"
          />

          <TextInput style={styles.inputUserA}
            placeholder = "Enter your user address"
          />

          <TextInput style={styles.inputUserP}
            placeholder = "Enter your user address"
          />

          <TouchableOpacity style={styles.buttonSign} onPress={() => navigation.navigate('Screen03')}>
            <Text style={styles.textSign}> Continue </Text>
          </TouchableOpacity>

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  content: {
    marginBottom: 120,
  },

  logo: {
    height: 100,
    width: 100,
    marginLeft: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputUserN: {
    marginTop: 40,
    padding: 10,
    borderColor: 'black',
    height: 40,
    borderWidth: 1,
    width: '100%',
  },

  inputUserA: {
    marginTop: 20,
    padding: 10,
    borderColor: 'black',
    height: 40,
    borderWidth: 1,
    width: '100%',
  },

  inputUserP: {
    marginTop: 20,
    padding: 10,
    borderColor: 'black',
    height: 40,
    borderWidth: 1,
    width: '100%',
  },

  buttonSign: {
    marginTop: 30,
    backgroundColor: '#0099CC',
    borderRadius: 8,
    width: '100%',
    height: 40,
    padding: 8,
    alignItems: 'center',

  },

  textSign: {
    fontSize: 18,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    fontWeight: 'bold',
  },

});
