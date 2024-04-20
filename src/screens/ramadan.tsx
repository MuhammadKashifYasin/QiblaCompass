import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {HeaderIcon} from '../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const RamadanScreen = ({navigation}) => {
  const [showCalender, setShowCalender] = useState(false);
  const _RamadanCalender = () => {
    const Heading = [
      {
        name: 'No',
      },
      {
        name: 'Day',
      },
      {
        name: 'Date',
      },
      {
        name: 'Seher',
      },
      {
        name: 'Aftar',
      },
    ];

    return (
      <View>
        <View style={styles.heading}>
          {Heading.map((item, index) => {
            return (
              <View key={index}>
                <Text style={styles.headingText}>{item.name}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  const _RamadanDua = () => {
    const DuaOfRamadan = [
      {
        name: 'Dua Of Sehri',
        arabic: 'وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ',
        meaning:
          'I intend to keep the fast for tomorrow in the month of Ramadan',
      },
      {
        name: 'Dua Of Aftari',
        arabic:
          'اَللّٰهُمَّ اِنِّی لَکَ صُمْتُ وَبِکَ اٰمَنْتُ وَعَلَيْکَ تَوَکَّلْتُ وَعَلٰی رِزْقِکَ اَفْطَرْتُ',
        meaning:
          'O Allah! I fasted for you and I believe in you and I put my trust in You and I break my fast with your sustenance.',
      },
      {
        name: 'first Ashra Dua',
        arabic: 'رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ',
        meaning:
          'Oh My Lord, forgive me, have mercy on me, and you’re the most merciful',
      },
      {
        name: 'Second Ashra Dua',
        arabic: 'اَللَّهُمَّ أَجِرْنِي مِنَ النَّارِ',
        meaning: 'O Allah! Save me from the Hell – Fire.',
      },
      {
        name: 'Third Ashra Dua',
        arabic:
          'اللَّهُمَّ إِنَّكَ عَفُوٌّكَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
        meaning:
          'Oh Allah, indeed You are Pardoning, [Generous,] You love pardon, so pardon me',
      },
    ];

    return (
      <View style={{flex: 1}}>
        <ScrollView>
          {DuaOfRamadan.map((item, index) => {
            return (
              <View key={index} style={styles.container}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.arabic}</Text>
                <Text style={styles.meaning}>{item.meaning}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <HeaderIcon title="Ramadan" navigation={() => navigation.goBack()} />
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => setShowCalender(true)}
          style={[styles.button, showCalender ? styles.activeButton : null]}>
          <Text style={styles.textRamdan}>Ramadan Calender</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowCalender(false)}
          style={[styles.button, !showCalender ? styles.activeButton : null]}>
          <Text style={styles.textRamdan}>Ramadan Dua's</Text>
        </TouchableOpacity>
      </View>

      {showCalender ? <_RamadanCalender /> : <_RamadanDua />}
    </View>
  );
};
export default RamadanScreen;

const styles = StyleSheet.create({
  buttons: {
    width: wp(80),
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: hp(5),
  },
  button: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRamdan: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    padding: 17,
  },
  activeButton: {
    backgroundColor: '#046920',
  },
  container: {
    width: wp(90),
    backgroundColor: '#fff',
    alignSelf: 'center',
    padding: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    borderRadius: 15,
    marginVertical: hp(1),
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: hp(1),
  },
  meaning: {
    fontSize: 15,
  },
  heading: {
    width: wp(95),
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#046920',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: hp(3),
    padding: 10,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
