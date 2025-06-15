import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import BottomNavigator from './bottom';
import AllahNames from '../screens/AllahNames';
import MuhammadScreen from '../screens/Muhammad';
import KalmaScreen from '../screens/Kalma';
import RamadanScreen from '../screens/ramadan';
import ZikerScreen from '../screens/ziker';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="bottom" component={BottomNavigator} />
      <Stack.Screen name="Allah" component={AllahNames} />
      <Stack.Screen name="Muhammad" component={MuhammadScreen} />
      <Stack.Screen name="kalma" component={KalmaScreen} />
      <Stack.Screen name="ramadan" component={RamadanScreen} />
      <Stack.Screen name="ziker" component={ZikerScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
