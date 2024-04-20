import React, {useEffect} from 'react';
import {Image, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('bottom');
    }, 3000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{width: 200, height: 200}}
        source={require('../../src/assets/images/Logo.png')}
      />
    </View>
  );
};
export default Splash;
