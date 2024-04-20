import React from 'react';
import {View, Text, Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import QiblaScreen from '../screens/qibla';
import PrayerScreen from '../screens/prayer';
import TasbeehScreen from '../screens/tasbeeh';
import DateScreen from '../screens/date';
import Splash from '../screens/splash';

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      initialRouteName="splash"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused
              ? require('../assets/images/homeIcon.png')
              : require('../assets/images/homeIcon1.png');
          } else if (route.name === 'qibla') {
            iconName = focused
              ? require('../assets/images/qibla1.png')
              : require('../assets/images/qibla.png');
          } else if (route.name === 'prayer') {
            iconName = focused
              ? require('../assets/images/prayer1.png')
              : require('../assets/images/prayer.png');
          } else if (route.name === 'tasbeeh') {
            iconName = focused
              ? require('../assets/images/tasbih1.png')
              : require('../assets/images/tasbih.png');
          } else if (route.name === 'date') {
            iconName = focused
              ? require('../assets/images/timetable1.png')
              : require('../assets/images/timetable.png');
          }

          // You can return any component here, such as an Image component
          return <Image source={iconName} style={{width: 24, height: 24}} />;
        },
        tabBarActiveTintColor: 'green',
      })}
      tabBarInactiveTintColor="gray"
      // tabBarStyle={{
      //   display: 'flex',
      // }}
    >
      <Bottom.Screen name="home" component={HomeScreen} />
      <Bottom.Screen name="qibla" component={QiblaScreen} />
      <Bottom.Screen name="prayer" component={PrayerScreen} />
      <Bottom.Screen name="tasbeeh" component={TasbeehScreen} />
      <Bottom.Screen name="date" component={DateScreen} />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
