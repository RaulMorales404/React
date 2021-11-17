/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
kjkjhkjh

SHA256:T1xXQo3kpc0sdq71Gy5Plj0U3JgFQZWOavy9ivImgl8
import React from 'react';
import RegisterView from './src/screens/RegisterView/RegisterView';
import LoginView from './src/screens/LoginView/LoginView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyFlightsView from './src/screens/MyFlightsView/MyFlightsView';
import BookingView from './src/screens/BookingView/BookingView';

const Stack = ());

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
     
        <Stack.Screen name='Register' component={RegisterView}/>
        <Stack.Screen name='MyFlights' component={MyFlightsView}/>
        <Stack.Screen name='Booking' component={BookingView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
