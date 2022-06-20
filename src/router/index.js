import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DetailContact, Home, SplashScreen} from '../pages';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailContact"
        component={DetailContact}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
