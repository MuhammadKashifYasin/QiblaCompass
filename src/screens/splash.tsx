import React, { useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Splash: React.FC<SplashProps> = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('bottom');
    }, 3000);

    return () => clearTimeout(timeout); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../src/assets/images/Logo.png')}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
