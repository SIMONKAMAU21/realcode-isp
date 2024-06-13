import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Domain from './pages/Domain';
import Login from './pages/Login';
import Accounts from './pages/Accounts';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Domain">
        <Stack.Screen name="Domain" component={Domain} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Accounts" component={Accounts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
