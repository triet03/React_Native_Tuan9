import { Text, SafeAreaView, StyleSheet, Button, Image, TouchableOpacity, View, TextInput } from 'react-native';
import React from 'react'

export default function Screen03({navigation}) {
  return (
   <View style={styles.container}>
       <Image style={styles.imHeader} source = {require('../assets/header.jpg')}/>

       Email
       <TextInput style={styles.inputUserE}
            placeholder = "Enter email"
          />

      Password
      <TextInput style={styles.inputUserP}
            placeholder = "Enter password"
          />


      <TouchableOpacity style={styles.buttonSign} onPress={() => navigation.navigate('Screen04')}>
            <Text style={styles.textSign}> Login </Text>
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

  imHeader: {
    marginBottom: 20,
    width: '100%',
    height: 100,
    
  },

  inputUserE: {
    marginBottom: 20,
    marginTop: 40,
    padding: 10,
    borderColor: 'black',
    height: 40,
    borderWidth: 1,
    width: '100%',
  },

  inputUserP: {
    marginBottom: 20,
    marginTop: 40,
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
  },
});
