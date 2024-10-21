import { Text, SafeAreaView, StyleSheet, Button, Image, TouchableOpacity, View } from 'react-native';
import React from 'react'

export default function App(navigation) {
  return (
   <View style={styles.container}>
        <View style={styles.imageView}>
            <Image style={styles.imageHS} source = {require('../assets/man-working.jpg')}/>
             <Text style={{
             fontWeight: 'bold', fontSize: 20
           }}> Boost Productivity </Text> 
             <Text> Simplify task, boots productivity</Text>

          <TouchableOpacity style={styles.buttonSign} onPress={() => navigation.navigate('Screen02')}>
            <Text style={styles.textSign}> Sign up </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => navigation.navigate('Screen03')} >
            <Text style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              marginTop: 20,
              marginLeft: 130,
              fontSize: 18,
            }}> Login </Text>
          </TouchableOpacity>


        </View>
        
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

  imageView: {
    marginBottom: 120,
  },

  textView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 200,
  },

  imageHS: {
    height: 400,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    
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
    fontSize: 20,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    fontWeight: 'bold',
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
