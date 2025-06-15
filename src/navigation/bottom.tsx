import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import PrayerScreen from '../screens/prayer';
import TasbeehScreen from '../screens/tasbeeh';
import DateScreen from '../screens/date';
import QiblaScreen from '../screens/qibla';

const Bottom = createBottomTabNavigator<BottomTabParamList>();

const TabBarIcon: React.FC<TabBarIconProps> = ({ routeName, focused }) => {
  const icons = {
    home: focused
      ? require('../assets/images/homeIcon.png')
      : require('../assets/images/homeIcon1.png'),
    qibla: focused
      ? require('../assets/images/qibla1.png')
      : require('../assets/images/qibla.png'),
    prayer: focused
      ? require('../assets/images/prayer1.png')
      : require('../assets/images/prayer.png'),
    tasbeeh: focused
      ? require('../assets/images/tasbih1.png')
      : require('../assets/images/tasbih.png'),
    date: focused
      ? require('../assets/images/timetable1.png')
      : require('../assets/images/timetable.png'),
  };

  return <Image source={icons[routeName]} style={styles.icon} />;
};

const BottomNavigator: React.FC = () => {
  return (
    <Bottom.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabBarIcon routeName={route.name as keyof BottomTabParamList} focused={focused} />
        ),
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}
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

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
