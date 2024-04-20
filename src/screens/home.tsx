import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeScreen = ({navigation}) => {
  const Array = [
    {
      image: require('../../src/assets/images/Allah.png'),
      name: 'Allah',
      navigation: () => navigation.navigate('Allah'),
    },
    {
      image: require('../../src/assets/images/architecture.png'),
      name: 'Muhammad',
      navigation: () => navigation.navigate('Muhammad'),
    },
    {
      image: require('../../src/assets/images/quran.png'),
      name: 'Kalma',
      navigation: () => navigation.navigate('kalma'),
    },
    {
      image: require('../../src/assets/images/crescent.png'),
      name: 'Ramadan ',
      navigation: () => navigation.navigate('ramadan'),
    },
  ];

  const Dua = [
    {
      dua: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ',
      meening:
        'O Allah, I ask You for knowledge that is of benefit , a good provision , and deeds that will be accepted.',
    },
    {
      dua: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ',
      meening:
        'O Allah, I ask You for knowledge that is of benefit , a good provision , and deeds that will be accepted.',
    },
    {
      dua: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ',
      meening:
        'O Allah, I ask You for knowledge that is of benefit , a good provision , and deeds that will be accepted.',
    },
    {
      dua: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ',
      meening:
        'O Allah, I ask You for knowledge that is of benefit , a good provision , and deeds that will be accepted.',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../src/assets/images/AllahHome.png')}
        style={{width: wp(100), height: hp(35)}}>
        <View style={styles.container}>
          <Text style={styles.text}>Find your Qibla Direction</Text>
          <Text style={styles.text}>Next Prayer</Text>
          <Text style={styles.text}>5:30 PM</Text>
        </View>
      </ImageBackground>
      <Text style={styles.textExplore}>Explore Catagories</Text>
      <View style={styles.circlesView}>
        {Array.map((item, index) => {
          return (
            <View key={index} style={styles.circleTextView}>
              <TouchableOpacity onPress={item.navigation} style={styles.circle}>
                <Image style={styles.image} source={item.image} />
              </TouchableOpacity>
              <Text style={styles.textAllah}>{item.name}</Text>
            </View>
          );
        })}
      </View>
      <Text style={styles.textdua}>Today's Dua</Text>
      <ScrollView>
        {Dua.map((item, index) => {
          return (
            <View key={index} style={styles.duaView}>
              <Text style={styles.arabic}>{item.dua}</Text>
              <Text style={styles.meening}>{item.meening}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  textExplore: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#046920',
    margin: 10,
    marginHorizontal: 20,
  },
  circlesView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#046920',
  },
  image: {
    width: 30,
    height: 30,
  },
  textAllah: {
    fontSize: 10,
    color: '#000',
    marginTop: 5,
  },
  circleTextView: {
    width: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textdua: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    margin: 10,
    marginHorizontal: 20,
  },
  arabic: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    margin: 10,
    marginHorizontal: 20,
  },
  duaView: {
    width: wp(90),
    // alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#046920',
    alignSelf: 'center',
  },
  meening: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    margin: 10,
    marginHorizontal: 20,
  },
});
