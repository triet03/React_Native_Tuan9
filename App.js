import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import Screen01 from './components/Screen01';
import Screen02 from './components/Screen02';
import Screen03 from './components/Screen03';



export default function App({navigation}) {

  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01">
        <Stack.Screen
          name="Screen01"
          component={Screen01}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen02"
          component={Screen02}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen03"
          component={Screen03}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>   
    
  );
};

