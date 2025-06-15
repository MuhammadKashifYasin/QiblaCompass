import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { HeaderIcon } from '../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HeadingData = [
  { name: 'No' },
  { name: 'Day' },
  { name: 'Date' },
  { name: 'Seher' },
  { name: 'Aftar' },
];

const DuaOfRamadan = [
  {
    name: 'Dua Of Sehri',
    arabic: 'وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ',
    meaning: 'I intend to keep the fast for tomorrow in the month of Ramadan',
  },
  {
    name: 'Dua Of Aftari',
    arabic:
      'اَللّٰهُمَّ اِنِّی لَکَ صُمْتُ وَبِکَ اٰمَنْتُ وَعَلَيْکَ تَوَکَّلْتُ وَعَلٰی رِزْقِکَ اَفْطَرْتُ',
    meaning:
      'O Allah! I fasted for you and I believe in you and I put my trust in You and I break my fast with your sustenance.',
  },
  {
    name: 'First Ashra Dua',
    arabic: 'رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ',
    meaning: 'Oh My Lord, forgive me, have mercy on me, and you’re the most merciful',
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
    meaning: 'Oh Allah, indeed You are Pardoning, [Generous,] You love pardon, so pardon me',
  },
];

const RamadanScreen: React.FC<RamadanScreenProps> = ({ navigation }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const RamadanCalendar = () => (
    <View style={styles.heading}>
      {HeadingData.map((item, index) => (
        <View key={index}>
          <Text style={styles.headingText}>{item.name}</Text>
        </View>
      ))}
    </View>
  );

  const RamadanDua = () => (
    <ScrollView>
      {DuaOfRamadan.map((item, index) => (
        <View key={index} style={styles.container}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.arabic}</Text>
          <Text style={styles.meaning}>{item.meaning}</Text>
        </View>
      ))}
    </ScrollView>
  );

  return (
    <View style={styles.screen}>
      <HeaderIcon title="Ramadan" navigation={() => navigation.goBack()} />
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => setShowCalendar(true)}
          style={[styles.button, showCalendar && styles.activeButton]}>
          <Text style={styles.textRamadan}>Ramadan Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowCalendar(false)}
          style={[styles.button, !showCalendar && styles.activeButton]}>
          <Text style={styles.textRamadan}>Ramadan Duas</Text>
        </TouchableOpacity>
      </View>
      {showCalendar ? <RamadanCalendar /> : <RamadanDua />}
    </View>
  );
};

export default RamadanScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
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
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  textRamadan: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
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
    shadowOffset: { width: 0, height: 3 },
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
    color:'#000'
  },
  heading: {
    width: wp(95),
    alignSelf: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#046920',
    borderRadius: 15,
    marginTop: hp(3),
    padding: 10,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
