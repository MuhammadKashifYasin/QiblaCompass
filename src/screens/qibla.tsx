import React, {useState, useEffect} from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import CompassHeading from 'react-native-compass-heading';
import Geolocation from 'react-native-geolocation-service';
import {PERMISSIONS, request} from 'react-native-permissions';

const QiblaScreen = () => {
  const [compassHeading, setCompassHeading] = useState(0);
  const [qiblad, setQiblad] = useState(0);

  useEffect(() => {
    requestLocationPermission();
    const degree_update_rate = 3;
console.log('start');


    CompassHeading.start(degree_update_rate, degree => {
      console.log('middle');
      
      setCompassHeading(degree);
    });
    console.log('nd');
    

    return () => {
      CompassHeading.stop();
    };
  }, []);

  const requestLocationPermission = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (result === 'granted') {
        getLocation();
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
    }
  };

  const calculateQiblaDirection = (latitude, longitude) => {
    const PI = Math.PI;
    const latk = (21.4225 * PI) / 180.0;
    const longk = (39.8264 * PI) / 180.0;
    const phi = (latitude * PI) / 180.0;
    const lambda = (longitude * PI) / 180.0;
    const calculatedQiblad =
      (180.0 / PI) *
      Math.atan2(
        Math.sin(longk - lambda),
        Math.cos(phi) * Math.tan(latk) -
          Math.sin(phi) * Math.cos(longk - lambda),
      );
    setQiblad(calculatedQiblad);
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        calculateQiblaDirection(latitude, longitude);
      },
      error => {
        console.error('Error getting current location:', error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/compass.jpeg')}
        style={[
          styles.image,
          {transform: [{rotate: `${360 - compassHeading}deg`}]},
        ]}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            transform: [{rotate: `${qiblad}deg`}],
          }}>
          <Image
            source={require('../assets/images/kabah.jpeg')}
            style={{marginBottom: '45%', resizeMode: 'contain', flex: 0.7}}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default QiblaScreen;

const styles = StyleSheet.create({
  image: {width: '90%', flex: 0.5, resizeMode: 'contain',},
  container: {alignItems:'center',justifyContent:'center', flex: 1},
});
